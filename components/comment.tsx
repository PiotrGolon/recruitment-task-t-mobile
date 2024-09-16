"use client";

import { useState } from "react";
import { useCommentDetails } from "@/features/stories/hooks/use-comment-details";

import { formatTimeAgo } from "@/lib/helpers";

import { CommentLoader } from "@/components/comment-loader"; // Komponent loadera dla komentarzy
import { Button } from "./ui/button";

import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";

interface CommentProps {
  commentId: number;
  depth?: number; // To handle comment nesting
}

const MAX_DEPTH = 5; // Maximum nesting depth
const INDENT_SIZE = 16; // Indentation size per depth level

/**
 * Component to display a single comment and its nested replies.
 * @param commentId - The ID of the comment to display.
 * @param depth - The current depth of the comment in the thread.
 */
export const Comment = ({ commentId, depth = 0 }: CommentProps) => {
  // Fetch comment details using the custom hook
  const { data: comment, isLoading, error } = useCommentDetails(commentId);

  // State to track visibility of replies
  const [showReplies, setShowReplies] = useState(false);

  // Handlinig loading state
  if (isLoading) return <CommentLoader depth={depth} />; // Wyświetlenie loadera

  // Handling error state
  if (error)
    return (
      <div style={{ marginLeft: depth * 16 }} className="mt-2 text-red-500">
        Error loading comment.
      </div>
    );

  // If no comment data is available
  if (!comment) return null;

  // Check if the comment has replies
  const hasReplies = Array.isArray(comment.kids) && comment.kids.length > 0;

  return (
    <div style={{ marginLeft: depth * INDENT_SIZE }} className="mt-4">
      {/* Comment Content */}
      <div className="p-4 bg-gray-100 rounded-md">
        <p className="text-sm font-bold">{comment.by || "Unknown"}</p>
        <p className="text-xs text-gray-500">
          {comment.time ? formatTimeAgo(comment.time) : "Unknown time"}
        </p>
        <div
          className="mt-2 text-gray-700"
          dangerouslySetInnerHTML={{
            __html: comment.text || "No content available.",
          }}
        ></div>
      </div>

      {/* Replies Section */}
      {hasReplies && depth < MAX_DEPTH && (
        <div className="mt-2">
          {!showReplies ? (
            // Button to show replies
            <Button
              variant="ghost"
              onClick={() => setShowReplies(true)}
              className="text-blue-600 hover:text-blue-800 transition"
              aria-label="Show replies to this comment"
            >
              Show replies
              <ChevronDownCircle className="size-4 ml-2" />
            </Button>
          ) : (
            <div className="mt-2">
              {/* Recursively render child comments */}
              {comment.kids?.map((kidId) => (
                <Comment key={kidId} commentId={kidId} depth={depth + 1} />
              ))}
              {/* Button to hide replies */}
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  className="font-normal text-muted-foreground hover:text-black border-none outline-none transition mt-2"
                  onClick={() => setShowReplies(false)}
                  aria-label="Hide replies to this comment"
                >
                  Hide replies <ChevronUpCircle className="size-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
