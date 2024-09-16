//story type from Hacker News endpoint

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

//story comment type by id
export type Comment = {
  id: number;
  by?: string;
  text?: string;
  time?: number;
  kids?: number[];
  type?: string;
};
