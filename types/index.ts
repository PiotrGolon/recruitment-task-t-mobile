//Type for stories from Hacker News endpoint

export type Story = {
  id: number;
  title: string;
  url?: string;
  text?: string;
  score?: number;
  by?: string;
  time?: number | undefined;
  descendants?: number;
  kids?: number[];
};
