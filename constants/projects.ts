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
} from "@/assets/img";

export enum Categories {
  all = "All",
  smm = "SMM",
  sites = "Strony internetowe",
}

interface IprojectsCategories {
  id: number;
  title: Categories;
}

export const projectsCategories: IprojectsCategories[] = [
  {
    id: 1,
    title: Categories.all,
  },
  {
    id: 2,
    title: Categories.smm,
  },
  {
    id: 3,
    title: Categories.sites,
  },
];

export const projects = [
  {
    id: 1,
    img: project1_smm,
    category: Categories.smm,
  },
  {
    id: 2,
    img: project2_smm,
    category: Categories.smm,
  },
  {
    id: 3,
    img: project3_site,
    category: Categories.sites,
  },
  {
    id: 4,
    img: project4_site,
    category: Categories.sites,
  },
  {
    id: 5,
    img: project5_smm,
    category: Categories.smm,
  },
  {
    id: 6,
    img: project6_smm,
    category: Categories.smm,
  },
  {
    id: 7,
    img: project7_site,
    category: Categories.sites,
  },
  {
    id: 8,
    img: project8_smm,
    category: Categories.smm,
  },
  {
    id: 9,
    img: project9_smm,
    category: Categories.smm,
  },
  {
    id: 10,
    img: project10_site,
    category: Categories.sites,
  },
  {
    id: 11,
    img: project11_site,
    category: Categories.sites,
  },
  {
    id: 12,
    img: project12_site,
    category: Categories.sites,
  },
  {
    id: 13,
    img: project13_smm,
    category: Categories.smm,
  },
  {
    id: 14,
    img: project14_site,
    category: Categories.sites,
  },
  {
    id: 15,
    img: project15_smm,
    category: Categories.smm,
  },
  {
    id: 16,
    img: project16_smm,
    category: Categories.smm,
  },
  {
    id: 17,
    img: project17_site,
    category: Categories.sites,
  },
];
