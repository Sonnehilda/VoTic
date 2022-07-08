// PreviewList Component & FullViewList Component.

import {
  nameOfDefaultList,
  nameOfMineList,
  nameOfPopularityList,
  nameOfRecentList,
} from "./constants";

export const getTitle = (type: string) => {
  switch (type) {
    case "popularity":
    case "p":
      return nameOfPopularityList;
    case "recent":
    case "r":
      return nameOfRecentList;
    case "mine":
    case "m":
      return nameOfMineList;
    default:
      return nameOfDefaultList;
  }
};
