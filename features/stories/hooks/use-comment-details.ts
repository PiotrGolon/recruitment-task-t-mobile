"use client";

import { useQuery } from "@tanstack/react-query";
import { Comment } from "@/types/index";

/**
 * Fetches the details of a comment from the API with error handling.
 * @param id - The ID of the comment to fetch.
 * @returns A Promise that resolves to a Comment object.
 * @throws Will throw an error if the fetch operation fails.
 */
const fetchCommentDetails = async (id: number): Promise<Comment> => {
  try {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );

    if (!res.ok) throw new Error(`Failed to fetch comment with id ${id}`);

    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Error occurred while fetching comment details");
  }
};

/**
 * Custom hook to fetch comment details using React Query.
 * @param id - The ID of the comment to fetch.
 * @returns The query result, including data, error, and loading states.
 */
export const useCommentDetails = (id: number) => {
  return useQuery({
    queryKey: ["comment", id],
    queryFn: () => fetchCommentDetails(id),
    enabled: !!id, // The query will execute only if an ID is provided
  });
};
