import { services } from "./services";

export const mainMenu = [
  {
    id: 1,
    title: "GŁÓWNA",
    url: "/",
  },
  {
    id: 2,
    title: "O NAS",
    url: "/#about",
  },
  {
    id: 3,
    title: "PORTFOLIO",
    url: "/#portfolio",
  },
  {
    id: 4,
    title: "USŁUGI I CENY",
    url: `services/${services[0].url}`,
    addition: [
      {
        id: 1,
        title: "Tworzenie stron internetowych",
        url: "site-creation",
      },
      {
        id: 2,
        title: "Obsługa strony internetowej",
        url: "website-maintenance",
      },
      {
        id: 3,
        title: "Reklama kontekstowa",
        url: "contextual-advertising",
      },
      {
        id: 4,
        title: "SEO-promocja",
        url: "seo-promotion",
      },
      {
        id: 5,
        title: "SMM-promocja",
        url: "smm-promotion",
      },
      {
        id: 6,
        title: "Reklama ukierunkowana",
        url: "targeted-advertising",
      },
      {
        id: 7,
        title: "Projektowanie unikalnego designu",
        url: "development-of-a-unique-design",
      },
      {
        id: 8,
        title: "Usługa rezerwacji",
        url: "booking-service",
      },
      {
        id: 9,
        title: "Inne usługi",
        url: "other-services",
      },
      {
        id: 10,
        title: "Dział funkcjonalny marketingu",
        url: "functional-marketing-department",
      },
    ],
  },
  {
    id: 5,
    title: "WIADOMOŚCI",
    url: "news",
  },
  {
    id: 6,
    title: "KONTAKTY",
    url: "/#contacts",
  },
];

export const footerMenuJobs = [
  {
    id: 1,
    title: "SMM | Tworzenie stron internetowych | SEO",
  },
  {
    id: 2,
    title: "Target i reklama kontekstowa",
  },
  {
    id: 3,
    title: "Projektowanie | Tworzenie treści",
  },
];
