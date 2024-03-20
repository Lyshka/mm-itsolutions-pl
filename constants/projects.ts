import { StaticImageData } from "next/image";

import {
  project1_smm,
  project2_smm,
  project3_site,
  project4_site,
  project5_smm,
  project6_smm,
  project7_site,
  project8_smm,
  project9_smm,
  project10_site,
  project11_site,
  project12_site,
  project13_smm,
  project14_site,
  project15_smm,
  project16_smm,
  project17_site,
  project18_smm,
  project19_smm,
  project20_site,
} from "@/assets/img";

export enum CategoriesPl {
  all = "All",
  smm = "SMM",
  sites = "Strony internetowe",
}

export enum CategoriesRu {
  all = "All",
  smm = "SMM",
  sites = "Сайты",
}

interface IprojectsCategoriesPl {
  id: number;
  title: CategoriesPl;
}

interface IprojectsCategoriesRu {
  id: number;
  title: CategoriesRu;
}

export const projectsCategoriesPl: IprojectsCategoriesPl[] = [
  {
    id: 1,
    title: CategoriesPl.all,
  },
  {
    id: 2,
    title: CategoriesPl.smm,
  },
  {
    id: 3,
    title: CategoriesPl.sites,
  },
];

export const projectsCategoriesRu: IprojectsCategoriesRu[] = [
  {
    id: 1,
    title: CategoriesRu.all,
  },
  {
    id: 2,
    title: CategoriesRu.smm,
  },
  {
    id: 3,
    title: CategoriesRu.sites,
  },
];

export interface Iprojects {
  id: number;
  img: StaticImageData;
  category: CategoriesPl | CategoriesRu;
}

export const projectsPl = [
  {
    id: 1,
    img: project1_smm,
    category: CategoriesPl.smm,
  },
  {
    id: 2,
    img: project2_smm,
    category: CategoriesPl.smm,
  },
  {
    id: 3,
    img: project3_site,
    category: CategoriesPl.sites,
  },
  {
    id: 4,
    img: project4_site,
    category: CategoriesPl.sites,
  },
  {
    id: 5,
    img: project5_smm,
    category: CategoriesPl.smm,
  },
  {
    id: 6,
    img: project6_smm,
    category: CategoriesPl.smm,
  },
  {
    id: 7,
    img: project7_site,
    category: CategoriesPl.sites,
  },
  {
    id: 8,
    img: project8_smm,
    category: CategoriesPl.smm,
  },
  {
    id: 9,
    img: project9_smm,
    category: CategoriesPl.smm,
  },
  {
    id: 10,
    img: project10_site,
    category: CategoriesPl.sites,
  },
  {
    id: 11,
    img: project11_site,
    category: CategoriesPl.sites,
  },
  {
    id: 12,
    img: project12_site,
    category: CategoriesPl.sites,
  },
  {
    id: 13,
    img: project13_smm,
    category: CategoriesPl.smm,
  },
  {
    id: 14,
    img: project14_site,
    category: CategoriesPl.sites,
  },
  {
    id: 15,
    img: project15_smm,
    category: CategoriesPl.smm,
  },
  {
    id: 16,
    img: project16_smm,
    category: CategoriesPl.smm,
  },
  {
    id: 17,
    img: project17_site,
    category: CategoriesPl.sites,
  },
  {
    id: 18,
    img: project18_smm,
    category: CategoriesPl.smm,
  },
  {
    id: 19,
    img: project19_smm,
    category: CategoriesPl.smm,
  },
  {
    id: 20,
    img: project20_site,
    category: CategoriesPl.sites,
  },
];

export const projectsRu = [
  {
    id: 1,
    img: project1_smm,
    category: CategoriesRu.smm,
  },
  {
    id: 2,
    img: project2_smm,
    category: CategoriesRu.smm,
  },
  {
    id: 3,
    img: project3_site,
    category: CategoriesRu.sites,
  },
  {
    id: 4,
    img: project4_site,
    category: CategoriesRu.sites,
  },
  {
    id: 5,
    img: project5_smm,
    category: CategoriesRu.smm,
  },
  {
    id: 6,
    img: project6_smm,
    category: CategoriesRu.smm,
  },
  {
    id: 7,
    img: project7_site,
    category: CategoriesRu.sites,
  },
  {
    id: 8,
    img: project8_smm,
    category: CategoriesRu.smm,
  },
  {
    id: 9,
    img: project9_smm,
    category: CategoriesRu.smm,
  },
  {
    id: 10,
    img: project10_site,
    category: CategoriesRu.sites,
  },
  {
    id: 11,
    img: project11_site,
    category: CategoriesRu.sites,
  },
  {
    id: 12,
    img: project12_site,
    category: CategoriesRu.sites,
  },
  {
    id: 13,
    img: project13_smm,
    category: CategoriesRu.smm,
  },
  {
    id: 14,
    img: project14_site,
    category: CategoriesRu.sites,
  },
  {
    id: 15,
    img: project15_smm,
    category: CategoriesRu.smm,
  },
  {
    id: 16,
    img: project16_smm,
    category: CategoriesRu.smm,
  },
  {
    id: 17,
    img: project17_site,
    category: CategoriesRu.sites,
  },
  {
    id: 18,
    img: project18_smm,
    category: CategoriesRu.smm,
  },
  {
    id: 19,
    img: project19_smm,
    category: CategoriesRu.smm,
  },
  {
    id: 20,
    img: project20_site,
    category: CategoriesRu.smm,
  },
];
