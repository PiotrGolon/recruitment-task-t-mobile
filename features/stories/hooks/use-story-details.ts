"use client";

import { useQuery } from "@tanstack/react-query";
import { Story } from "@/types/index";

/**
 * Fetches the details of a story from the API with error handling.
 * @param id - The ID of the story to fetch.
 * @returns A Promise that resolves to a Story object.
 * @throws Will throw an error if the fetch operation fails.
 */
const fetchStoryDetails = async (id: string): Promise<Story> => {
  try {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );

    if (!res.ok) throw new Error(`Failed to fetch story with id ${id}`);

    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Error occurred while fetching story details");
  }
};

/**
 * Custom hook to fetch story details using React Query.
 * @param id - The ID of the story to fetch.
 * @returns The query result, including data, error, and loading states.
 */
export const useStoryDetails = (id: string | undefined) => {
  return useQuery<Story, Error>({
    queryKey: ["story", id], // Query key for caching and refetching
    queryFn: () => fetchStoryDetails(id!), // Function to fetch the data
    enabled: Boolean(id), // The query will execute only if ID is provided
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    retry: 2, // Retry failed requests up to 2 times
  });
};
