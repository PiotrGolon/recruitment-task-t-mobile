"use client";
import { useQuery } from "@tanstack/react-query";
import { Story } from "@/types/index";
import { useState } from "react";
import { loadMoreStories, loadLessStories } from "@/lib/helpers";

const INITIAL_ITEMS_TO_SHOW = 9; // Initial number of stories to display
const MAX_STORIES_TO_FETCH = 30; // Maximum number of stories to fetch
const TOP_STORIES_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";
const STORY_ITEM_URL = "https://hacker-news.firebaseio.com/v0/item";

/**
 * Fetches the top stories from the Hacker News API.
 * @returns An array of Story objects containing id, title, and time.
 * @throws Will throw an error if the fetch operation fails.
 */
const fetchTopStories = async (): Promise<Story[]> => {
  try {
    const res = await fetch(TOP_STORIES_URL);
    if (!res.ok) throw new Error("Failed to fetch top stories IDs");

    const storyIds: number[] = await res.json();

    // Fetch details for each story up to the MAX_STORIES_TO_FETCH limit
    const storyPromises = storyIds
      .slice(0, MAX_STORIES_TO_FETCH)
      .map(async (id: number) => {
        const storyRes = await fetch(`${STORY_ITEM_URL}/${id}.json`);
        if (!storyRes.ok)
          throw new Error(`Failed to fetch story with id ${id}`);

        const story = await storyRes.json();
        return {
          id: story.id,
          title: story.title,
          time: story.time,
        } as Story;
      });

    const stories = await Promise.all(storyPromises);
    return stories;
  } catch (error) {
    console.error("Error fetching top stories:", error);
    throw error;
  }
};

/**
 * Custom hook to fetch and manage top stories from Hacker News.
 * Provides functionality to load more or fewer stories.
 * @returns An object containing stories, error status, loading status, and functions to load more or fewer stories.
 */
export const useTopStories = () => {
  const [itemsToShow, setItemsToShow] = useState(INITIAL_ITEMS_TO_SHOW);

  // Fetch top stories using React Query
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["topStories"],
    queryFn: fetchTopStories,
    staleTime: 1000 * 60 * 5, // Data remains fresh for 5 minutes
    retry: 2, // Retry failed requests up to 2 times
  });

  // Slice the data to return only the number of items to display
  const stories = data?.slice(0, itemsToShow) || [];

  return {
    stories, // List of stories to display
    error, // Error object if the fetch failed
    isLoading, // True if the initial data is loading
    isFetching, // True if the data is refetching in the background
    loadMoreStories: () => loadMoreStories(setItemsToShow), // Function to increase itemsToShow
    loadLessStories: () => loadLessStories(setItemsToShow, itemsToShow), // Function to decrease itemsToShow
  };
};
