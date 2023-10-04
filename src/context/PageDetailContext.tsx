import { Dispatch, SetStateAction, createContext } from "react";

export type PageDetail = {
  title: string;
};

type Pages = {
  homePage: PageDetail;
  profilePage: PageDetail;
  notFoundPage: PageDetail;
};

type PageDetailContextValue = {
  pageDetails: Pages;
  setPageDetails: Dispatch<SetStateAction<Pages>>;
};

const PageDetailContext = createContext<PageDetailContextValue | undefined>(
  undefined
);

export default PageDetailContext;
