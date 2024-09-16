"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const CardInfoLoader = () => {
  return (
    <Card className="shadow-md hover:shadow-xl transition-shadow duration-200 h-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col">
            <div className="flex items-center mb-2 ml-0">
              {/* Skeleton for the back button */}
              <div className="flex items-center">
                <Skeleton className="rounded-full w-10 h-10 mr-2" />
                <Skeleton className="h-6 w-24" />{" "}
                {/* Placeholder for "Back to Home" text */}
              </div>
              {/* Skeleton for the title */}
              <Skeleton className="h-6 w-48 ml-2" />
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end">
        {/* Skeleton for Author, Points, Comments */}
        <div className="mb-4 ml-11 space-y-2">
          <Skeleton className="h-4 w-32" /> {/* Author */}
          <Skeleton className="h-4 w-24" /> {/* Points */}
        </div>

        {/* Skeleton for Text Section */}
        <div className="mb-4 ml-11 space-y-2">
          <Skeleton className="h-6 w-40" /> {/* Text Header */}
          <Skeleton className="h-4 w-full" /> {/* Text Line 1 */}
          <Skeleton className="h-4 w-full" /> {/* Text Line 2 */}
          <Skeleton className="h-4 w-3/4" /> {/* Text Line 3 */}
        </div>

        {/* Skeleton for Read Full Story Button */}
        <div className="ml-11">
          <Skeleton className="h-10 w-36 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
};
