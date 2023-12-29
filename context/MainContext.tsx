"use client";

import { CategoriesPl, CategoriesRu } from "@/constants/projects";
import { useSelectLaguageDate } from "@/hooks/useSelectLaguageDate";
import { ReactNode, createContext, useState } from "react";

type ErrorTel = {
  stateError: boolean;
  tel?: string;
};

interface IMainContext {
  categoryProjects: CategoriesPl | CategoriesRu;
  isOpenMenuHeader: boolean;
  isOpenGratitude: boolean;
  isOpenFeedBack: boolean;
  isOpenDiscount: boolean;
  isErrorTel: ErrorTel;
  onSelect: (title: CategoriesPl | CategoriesRu) => void;
  toggleGratitude: (state: boolean) => void;
  toggleFeedBack: () => void;
  toggleDiscount: () => void;
  toggleMenuHeader?: () => void;
  toggleErrorTel: ({ stateError, tel }: ErrorTel) => void;
}

interface IMainContextProvider {
  children: ReactNode;
}

export const MainContext = createContext<IMainContext>({
  categoryProjects: CategoriesPl.all,
  isOpenMenuHeader: false,
  isOpenGratitude: false,
  isOpenFeedBack: false,
  isOpenDiscount: false,
  isErrorTel: { stateError: false, tel: "" },
  onSelect(title) {},
  toggleGratitude(state) {},
  toggleFeedBack() {},
  toggleDiscount() {},
  toggleErrorTel({ stateError, tel }) {},
});

export const MainContextProvider = ({ children }: IMainContextProvider) => {
  const Categories = useSelectLaguageDate(CategoriesPl, CategoriesRu);

  const [categoryProjects, setCategoryProjects] = useState<
    CategoriesPl | CategoriesRu
  >(Categories.all);
  const [isOpenMenuHeader, setIsOpenMenuHeader] = useState(false);
  const [isOpenGratitude, setIsOpenGratitude] = useState(false);
  const [isOpenFeedBack, setisOpenFeedBack] = useState(false);
  const [isOpenDiscount, setIsOpenDiscount] = useState(false);
  const [isErrorTel, setIsErrorTel] = useState<ErrorTel>({
    stateError: false,
    tel: "",
  });

  const onSelect = (title: CategoriesPl | CategoriesRu) => {
    setCategoryProjects(title);
  };

  const toggleGratitude = (state: boolean) => {
    setIsOpenGratitude(state);
  };

  const toggleFeedBack = () => {
    setisOpenFeedBack((prv) => !prv);
  };

  const toggleMenuHeader = () => {
    setIsOpenMenuHeader((prv) => !prv);
  };

  const toggleDiscount = () => {
    setIsOpenDiscount((prv) => !prv);
  };

  const toggleErrorTel = ({ stateError, tel }: ErrorTel) => {
    setIsErrorTel((prv) => ({
      ...prv,
      stateError,
      tel,
    }));
  };

  return (
    <MainContext.Provider
      value={{
        categoryProjects,
        isOpenMenuHeader,
        isOpenGratitude,
        isOpenFeedBack,
        isOpenDiscount,
        isErrorTel,
        onSelect,
        toggleGratitude,
        toggleFeedBack,
        toggleMenuHeader,
        toggleDiscount,
        toggleErrorTel,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
