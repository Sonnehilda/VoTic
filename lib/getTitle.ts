// PreviewList Component & FullViewList Component.

import {
  nameOfDefaultList,
  nameOfMineList,
  nameOfPopularityList,
  nameOfRecentList,
  nameOfSearchedList,
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
    case "/search":
      return nameOfSearchedList;
    default:
      return nameOfDefaultList;
  }
};
