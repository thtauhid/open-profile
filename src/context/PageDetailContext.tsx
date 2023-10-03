import { createContext } from "react";

export type PageDetail = {
  title: string;
};

type Pages = {
  homePage: PageDetail;
  profilePage: PageDetail;
  notFoundPage: PageDetail;
};

const defaultPageDetails: Pages = {
  homePage: { title: "" },
  profilePage: { title: "" },
  notFoundPage: { title: "" },
};

const PageDetailContext = createContext({
  pageDetails: defaultPageDetails,
  setPageDetails: (value: Pages) => value,
});

export default PageDetailContext;
