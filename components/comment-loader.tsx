"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface CommentLoaderProps {
  depth?: number;
}

export const CommentLoader = ({ depth = 0 }: CommentLoaderProps) => {
  return (
    <div className={`ml-${depth * 4} mt-4`}>
      <div className="p-4 bg-gray-100 rounded-md">
        <Skeleton className="h-4 w-24 mb-2" /> {/* author */}
        <Skeleton className="h-3 w-16 mb-2" /> {/* date */}
        <Skeleton className="h-4 w-full mb-2" /> {/* comment text first line */}
        <Skeleton className="h-4 w-3/4" /> {/* comment text second line */}
      </div>
    </div>
  );
};
