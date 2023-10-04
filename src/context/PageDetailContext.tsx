import { Dispatch, SetStateAction, createContext } from "react";

export type PageDetail = {
  title: string;
};

export type Pages = {
  homePage: PageDetail;
  profilePage: PageDetail;
  notFoundPage: PageDetail;
};

export type PageDetailContextValue = {
  pageDetails?: Pages;
  setPageDetails?: Dispatch<SetStateAction<Pages>>;
};

const PageDetailContext = createContext<PageDetailContextValue>({});

export default PageDetailContext;
