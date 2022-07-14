export type OptionType = {
  key: number;
  title: string;
  status: number;
};

export type VoteValueType = {
  index?: number;
  key: number;
  title: string;
  date?: string;
  status: number;
  creator?: string;
  image?: string;
  options?: OptionType[];
};
