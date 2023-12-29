import { servicesPl } from "./services";

export const mainMenuPl = [
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
    url: `services/${servicesPl[0].url}`,
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

export const mainMenuRu = [
  {
    id: 1,
    title: "ГЛАВНАЯ",
    url: "/",
  },
  {
    id: 2,
    title: "О НАС",
    url: "/#about",
  },
  {
    id: 3,
    title: "ПОРТФОЛИО",
    url: "/#portfolio",
  },
  {
    id: 4,
    title: "УСЛУГИ И ЦЕНЫ",
    url: `services/${servicesPl[0].url}`,
    addition: [
      {
        id: 1,
        title: "Разработка сайта",
        url: "site-creation",
      },
      {
        id: 2,
        title: "Обслуживание сайта",
        url: "website-maintenance",
      },
      {
        id: 3,
        title: "Контекстная реклама",
        url: "contextual-advertising",
      },
      {
        id: 4,
        title: "SEO продвижение",
        url: "seo-promotion",
      },
      {
        id: 5,
        title: "SMM продвижение",
        url: "smm-promotion",
      },
      {
        id: 6,
        title: "Таргетированная реклама",
        url: "targeted-advertising",
      },
      {
        id: 7,
        title: "Разработка уникального дизайна",
        url: "development-of-a-unique-design",
      },
      {
        id: 8,
        title: "Booking service",
        url: "booking-service",
      },
      {
        id: 9,
        title: "Прочие услуги",
        url: "other-services",
      },
      {
        id: 10,
        title: "Функциональный отдел маркетинга",
        url: "functional-marketing-department",
      },
    ],
  },
  {
    id: 5,
    title: "НОВОСТИ",
    url: "news",
  },
  {
    id: 6,
    title: "КОНТАКТЫ",
    url: "/#contacts",
  },
];

export const footerMenuJobsPl = [
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

export const footerMenuJobsRu = [
  {
    id: 1,
    title: "SMM | Разработка сайтов | SEO",
  },
  {
    id: 2,
    title: "Таргет и контекстная реклама",
  },
  {
    id: 3,
    title: "Дизайн | Создание контента",
  },
];
