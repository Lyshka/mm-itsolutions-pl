"use client";

import clsx from "clsx";
import { useContext } from "react";

import {
  projectsCategoriesPl,
  projectsCategoriesRu,
} from "@/constants/projects";
import { MainContext } from "@/context/MainContext";
import { useSelectLaguageDate } from "@/hooks/useSelectLaguageDate";

export const SelectedMenu = () => {
  const { categoryProjects, onSelect } = useContext(MainContext);
  const projectsCategories = useSelectLaguageDate(
    projectsCategoriesPl,
    projectsCategoriesRu
  );

  return (
    <div className="flex w-fit 2xl:p-[6px] p-2 justify-center items-center gap-4 rounded-[30px] border border-[#F4F4F4]">
      {projectsCategories.map(({ id, title }) => (
        <button
          onClick={() => {
            onSelect(title);
          }}
          key={id}
          className={clsx(
            "2xl:py-[6px] py-1 2xl:px-[22px] px-4 w-fit whitespace-nowrap rounded-[30px] shadow-btn-select-project flex justify-center items-center 2xl:text-base text-[10px] 2xl:leading-6 leading-4",
            categoryProjects === title ? "bg-main text-white" : ""
          )}
        >
          {title}
        </button>
      ))}
    </div>
  );
};
