import { usePathname } from "next/navigation";
import Link from "next/link";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Import komponentów z Shadcn-ui
import { Button } from "./ui/button";

import { ChevronLeftCircle } from "lucide-react";

import { formatTimeAgo } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { Comment } from "./comment";

interface CardWrapperProps {
  title?: string;
  time?: number | undefined;
  kids?: number[];
  numberOfComments?: number;
  children: React.ReactNode;
}

export const CardWrapper = ({
  title,
  time,
  kids,
  numberOfComments,
  children,
}: CardWrapperProps) => {
  const formattedTime = time ? formatTimeAgo(time) : "";

  const pathname = usePathname();
  const isStoryId = pathname.startsWith("/story/");

  return (
    <Card className="shadow-md hover:shadow-xl transition-shadow duration-200 h-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle>
          {title && (
            <div className="felx flex-col">
              <div className="flex items-center">
                {isStoryId && (
                  <Link href="/" className="flex items-center">
                    <Button variant="circle" size="icon">
                      <ChevronLeftCircle className="size-6" />
                    </Button>
                  </Link>
                )}
                <h2 className={cn("text-lg", isStoryId && "ml-2")}>{title}</h2>
              </div>

              <p
                className={cn(
                  "text-sm mt-2 text-gray-400 text-muted-foreground",
                  isStoryId && "ml-11"
                )}
              >
                {time ? `Published: ${formattedTime}` : ""}
              </p>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end">
        {children}
        {kids && kids.length > 0 && (
          <div className="ml-11 mt-6">
            <h3 className="text-lg font-semibold mb-4">
              Comments ({numberOfComments})
            </h3>
            {kids.map((commentId) => (
              <Comment key={commentId} commentId={commentId} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
