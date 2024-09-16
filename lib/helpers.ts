import { formatDistanceToNow } from "date-fns";

/**
 * Decodes HTML entities in a given text string.
 * @param text - The text containing HTML entities.
 * @returns The decoded text.
 */
export function decodeHtmlEntities(text: string): string {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(text, "text/html").body
    .textContent;
  return decodedString || "";
}

/**
 * Increases the number of displayed articles by 3.
 * @param setItemsToShow - React state setter function for the number of items to show.
 */
export const loadMoreStories = (
  setItemsToShow: React.Dispatch<React.SetStateAction<number>>
) => {
  // Increase the number of displayed articles by 3
  setItemsToShow((prev) => prev + 3);
};

/**
 * Decreases the number of displayed articles by 3, but not below 9.
 * @param setItemsToShow - React state setter function for the number of items to show.
 * @param currentItems - Current number of items being displayed.
 */
export const loadLessStories = (
  setItemsToShow: React.Dispatch<React.SetStateAction<number>>,
  currentItems: number
) => {
  // Decrease by 3, but do not go below 9
  setItemsToShow((prev) => (currentItems > 9 ? prev - 3 : 9));
};

/**
 * Formats a UNIX timestamp into a relative time string.
 * @param timestamp - UNIX timestamp in seconds.
 * @returns A string representing the time elapsed, e.g., '3 hours ago'.
 */
export const formatTimeAgo = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  // e.g., '3 hours ago'
  return formatDistanceToNow(date, { addSuffix: true });
};
