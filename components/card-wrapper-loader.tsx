import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const CardWrapperLoader = () => {
  return (
    <Card className="shadow-md hover:shadow-xl transition-shadow duration-200 h-48 flex flex-col justify-between">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-3/4" /> {/* Skeleton title */}
          <Skeleton className="h-4 w-2/5 mt-4" /> {/* Skeleton date */}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end">
        <div className="flex justify-end">
          <Skeleton className="h-8 w-20" /> {/* Skeleton button */}
        </div>
      </CardContent>
    </Card>
  );
};
