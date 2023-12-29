import {
  bookingService,
  contextualAdvertising,
  developmentOfAUniqueDesign,
  functionalMarketingDepartment,
  otherServices,
  seoPromotion,
  siteCreation,
  smmPromotion,
  targetedAdvertising,
  websiteMaintenance,
} from "@/assets/img";

export const servicesPl = [
  {
    id: 1,
    url: "site-creation",
    title: "Tworzenie stron internetowych",
    description:
      "Tworzenie stron internetowych o różnym stopniu skomplikowania, począwszy od stron landingowych, aż do sklepów internetowych. Kreatywny design, struktura sprzedażowa, wygodna funkcjonalność. Pełny zakres usług od projektu do hostingu.",
    img: siteCreation,
    alt: "Tworzenie stron internetowych",
    advantages: {
      title: "Zalety naszych stron",
      list: [
        {
          id: 1,
          title: "Rozpoznawalność marki",
          description:
            "Bierzemy pod uwagę Twoje pomysły i korporacyjny styl organizacji. Zwiększamy liczbę klientów, a także zwiększamy świadomość marki",
        },
        {
          id: 2,
          title: "Przejrzysty interfejs",
          description:
            "Dzięki naszemu działowi kreatywnemu przekazujemy klientowi główne zalety produktu lub usługi.",
        },
        {
          id: 3,
          title: "Niezawodna obsługa",
          description:
            "Nasz dział rozwoju zadba o stabilne i nieprzerwane działanie Twojego serwisu lub serwisu",
        },
      ],
    },
    textBadge:
      "Zamów dowolny plan rozwoju strony internetowej i otrzymaj w prezencie Reklamę Kontekstową + CEO",
    cards: [
      {
        id: 1,
        valuableBYN: "1500",
        month: false,
        title: "Standard",
        includeServices: [
          {
            id: 1,
            title: "Landing page do 4 ekranów",
          },
          {
            id: 2,
            title: "Z projektem standardowym",
          },
          {
            id: 3,
            title: "Bez CMS",
          },
          {
            id: 4,
            title: "Pomoc w rejestracji domeny",
          },
          {
            id: 5,
            title: "Umieszczenie na hosting",
          },
        ],
      },
      {
        id: 2,
        valuableBYN: "2500",
        month: false,
        title: "Premium",
        includeServices: [
          {
            id: 1,
            title: "Landing page do 7 ekranów",
          },
          {
            id: 2,
            title: "Z indywidualnym designem",
          },
          {
            id: 3,
            title: "Prosty CMS (WB lub inny)",
          },
          {
            id: 4,
            title: "Pomoc w rejestracji domeny",
          },
          {
            id: 5,
            title: "Umieszczenie na hosting i kontakt",
          },
          {
            id: 6,
            title: "Interaktywny asystent",
          },
        ],
      },
      {
        id: 3,
        valuableBYN: "5000",
        month: false,
        title: "Strona korporacyjna",
        includeServices: [
          {
            id: 1,
            title: "do 7 stron",
          },
          {
            id: 2,
            title: "Z indywidualnym designem",
          },
          {
            id: 3,
            title: "CMS (WB lub inny)",
          },
          {
            id: 4,
            title: "Pomoc w rejestracji domeny",
          },
          {
            id: 5,
            title: "Interaktywny asystent",
          },
        ],
      },
      {
        id: 4,
        valuableBYN: "8000",
        month: false,
        title: "Sklep internetowy",
        includeServices: [
          {
            id: 1,
            title: "Sklep internetowy do 15 stron",
          },
          {
            id: 2,
            title: "Z indywidualnym designem",
          },
          {
            id: 3,
            title: "CMS (WB lub inny)",
          },
          {
            id: 4,
            title: "Pomoc w rejestracji domeny",
          },
          {
            id: 5,
            title: "Interaktywny asystent",
          },
          {
            id: 6,
            title: "Umieszczenie na hosting i kontakt",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    url: "website-maintenance",
    title: "Obsługa strony internetowej",
    img: websiteMaintenance,
    description:
      "Tworzenie treści na stronie, usuwanie błędów, dodawanie nowych stron, redesign, rozwijanie kalkulatorów, formularzy kontaktowych, integracja z programami magazynowymi",
    alt: "Obsługa strony internetowej",
    advantages: {
      title: "Zalety naszych stron",
      list: [
        {
          id: 1,
          title: "Regularne aktualizacje i bezpieczeństwo",
          description:
            "Dbamy o ciągłą aktualizację Twojej witryny, monitorujemy jej bezpieczeństwo i chronimy przed zagrożeniami, co zapewnia niezawodne i stabilne działanie platformy internetowej.",
        },
        {
          id: 2,
          title: "Profesjonalne wsparcie i szybka reakcja",
          description:
            "Nasz zespół wsparcia technicznego jest zawsze gotowy do pomocy i odpowiedzi na Twoje pytania. Gwarantujemy szybką reakcję na wszelkie zapytania, co pozwala uniknąć przestojów i problemów na stronie.",
        },
        {
          id: 3,
          title: "Poprawa i optymalizacja wydajności",
          description:
            "Optymalizujemy Twoją witrynę tak, aby działała wydajniej, co poprawia wydajność i sprawia, że ​​strony ładują się szybciej. Poprawia to wygodę użytkownika i pomaga zwiększyć konwersje i przychody.",
        },
      ],
    },
    textBadge:
      "Zamów dowolny plan utrzymania strony internetowej i otrzymaj SEO w prezencie",
    cards: [
      {
        id: 1,
        valuableBYN: "1000",
        month: true,
        title: "Standard",
        includeServices: [
          {
            id: 1,
            title: "Miesięczne wsparcie techniczne strony",
          },
          {
            id: 2,
            title: "Usuwanie błędów",
          },
          {
            id: 3,
            title: "Aktualizacja treści",
          },
          {
            id: 4,
            title: "Przygotowanie treści",
          },
          {
            id: 6,
            title: "Wypełnianie strony",
          },
          {
            id: 7,
            title: "Instalacja/modyfikacja pluginów, liczników",
          },
          {
            id: 8,
            title: "Pisanie i publikacja wiadomości",
          },
          {
            id: 9,
            title: "Dodawanie nowych stron",
          },
          {
            id: 10,
            title: "Do 30 godzin prac w miesiącu",
          },
        ],
      },
      {
        id: 2,
        valuableBYN: "1500",
        month: true,
        title: "Premium",
        includeServices: [
          {
            id: 1,
            title: "Miesięczne wsparcie techniczne strony",
          },
          {
            id: 2,
            title: "Usuwanie błędów",
          },
          {
            id: 3,
            title: "Aktualizacja treści",
          },
          {
            id: 4,
            title: "Przygotowanie treści",
          },
          {
            id: 5,
            title: "Wypełnianie strony",
          },
          {
            id: 6,
            title: "Instalacja/modyfikacja pluginów, liczników",
          },
          {
            id: 7,
            title: "Pisanie i publikacja wiadomości",
          },
          {
            id: 8,
            title: "Dodawanie nowych stron",
          },
          {
            id: 9,
            title: "Do 50 godzin prac w miesiącu",
          },
        ],
      },
      {
        id: 3,
        valuableBYN: "30",
        month: false,
        title: "Jednorazowe",
        includeServices: [
          {
            id: 1,
            title: "Prace jednorazowe z technicznym utrzymaniem strony",
          },
          {
            id: 2,
            title: "Usuwanie błędów",
          },
          {
            id: 3,
            title: "Aktualizacja treści",
          },
          {
            id: 4,
            title: "Przygotowanie treści",
          },
          {
            id: 5,
            title: "Wypełnianie strony",
          },
          {
            id: 6,
            title: "Instalacja/modyfikacja pluginów, liczników",
          },
          {
            id: 7,
            title: "Pisanie i publikacja wiadomości",
          },
          {
            id: 8,
            title: "Dodawanie nowych stron",
          },
          {
            id: 9,
            title: "Za 1 godzinę pracy",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    url: "contextual-advertising",
    title: "Reklama kontekstowa",
    description:
      "Konfiguracja reklamy kontekstowej w Polsce, na wyszukiwarkach Google, reklama banerowa, reklama e-mail, na YouTube. Pomoc w uzupełnianiu kont reklamowych.",
    img: contextualAdvertising,
    alt: "Reklama kontekstowa",
    advantages: {
      title: "Dlaczego warto zamówić reklamę kontekstową?",
      list: [
        {
          id: 1,
          title: "Precyzyjne targetowanie",
          description:
            "Zainteresowanych odbiorców przyciągamy za pomocą słów kluczowych.",
        },
        {
          id: 2,
          title: "Elastyczna kontrola budżetu",
          description:
            "Efektywnie dystrybuujemy koszty reklamy zgodnie z Twoimi wymaganiami.",
        },
        {
          id: 3,
          title: "Wysoka konwersja",
          description:
            "Zwiększamy liczbę klientów poprzez pozyskiwanie zainteresowanych użytkowników.",
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "500",
        month: true,
        title: "Standard",
        includeServices: [
          {
            id: 1,
            title:
              "Konfiguracja reklamy kontekstowej dla stron internetowych w wyszukiwarce Google",
          },
          {
            id: 2,
            title: "Pierwszy miesiąc zbierania jądra semantycznego",
          },
          {
            id: 3,
            title: "Rejestracja konta reklamowego",
          },
          {
            id: 4,
            title:
              "Tworzenie reklam, określanie strategii reklamowej - 1000 zł",
          },
          {
            id: 6,
            title:
              "Kolejne miesiące opieka i korekta kampanii - 500,00 zł do 10 produktów/usług",
          },
          {
            id: 7,
            title:
              "Budżet reklamowy nie jest wliczony w cenę i jest płatny oddzielnie przez Klienta trzecim stronom",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    url: "seo-promotion",
    title: "SEO-promocja",
    description:
      "Pełen zakres promocji stron internetowych na kluczowe frazy w wyszukiwarkach Yandex, Google. Podniesiemy pozycję Twojej strony w wynikach wyszukiwania.",
    img: seoPromotion,
    alt: "SEO-promocja",
    advantages: {
      title: "Dlaczego warto zamówić promocję SEO?",
      list: [
        {
          id: 1,
          title: "Zwiększona widoczność",
          description:
            "Optymalizujemy Twoją witrynę tak, aby była lepiej zrozumiana przez wyszukiwarki, co pomaga podnieść jej ranking i przyciągnąć więcej ruchu organicznego.",
        },
        {
          id: 2,
          title: "Docelowy ruch",
          description:
            "Kierujemy słowa kluczowe i zapytania związane z Twoją firmą, aby przyciągnąć dokładnie tych użytkowników, którzy szukają Twojego produktu lub usługi.",
        },
        {
          id: 3,
          title: "Wyniki długoterminowe",
          description:
            "Promocja SEO buduje silny profil online Twojej firmy, co pomaga zwiększyć ruch organiczny i prowadzi do długoterminowego sukcesu Twojej obecności w Internecie.",
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "450",
        month: true,
        title: "Standard",
        includeServices: [
          {
            id: 1,
            title:
              "Tworzenie jądra semantycznego dla maksymalnie 15 produktów/usług miesięcznie",
          },
          {
            id: 2,
            title: "Pełny zakres prac od jądra semantycznego do publikacji",
          },
          {
            id: 3,
            title: "Optymalizacja pod Yandex i Google",
          },
          {
            id: 4,
            title:
              "Pisanie i optymalizacja Title, Description, H1-H4, ALT dla maksymalnie 60 stron i obrazów miesięcznie",
          },
          {
            id: 6,
            title: "Wyszukiwanie i usuwanie złamanych linków",
          },
          {
            id: 7,
            title: "Pisanie do 3 artykułów miesięcznie",
          },
          {
            id: 8,
            title: "Kontrola pozycji",
          },
          {
            id: 9,
            title: "Umieszczanie co najmniej 5 darmowych linków miesięcznie",
          },
          {
            id: 10,
            title: "Zakup płatnych linków po uzgodnieniu z Klientem",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    url: "smm-promotion",
    title: "SMM-promocja",
    description:
      "Pełen zakres promocji towarów i usług w mediach społecznościowych, rozruch sprzedaży, zwiększenie sprzedaży i zasięgów. Skonfigurujemy piksel FB, śledzimy statystyki. Tworzymy treści wizualne i pisemne.",
    img: smmPromotion,
    alt: "SMM-promocja",
    advantages: {
      title: "Dlaczego warto zamówić promocję SMM?",
      list: [
        {
          id: 1,
          title: "Fascynująca treść",
          description:
            "Tworzymy atrakcyjne posty, które przyciągają uwagę i angażują odbiorców, co przyczynia się do wzrostu liczby subskrybentów i repostów.",
        },
        {
          id: 2,
          title: "Interakcja z publicznością",
          description:
            "Aktywnie komunikujemy się z subskrybentami, odpowiadamy na komentarze i wiadomości, budując zaufanie i wzmacniając więzi z klientami.",
        },
        {
          id: 3,
          title: "Rozszerzanie swojej obecności w Internecie",
          description:
            "Promocja SMM pomaga poszerzyć Twoją obecność w Internecie, przyciągnąć nowych klientów i poprawić reputację Twojej marki.",
        },
      ],
    },
    textBadge:
      "Zamów dowolny plan promocyjny SMM i otrzymaj w prezencie zestaw reklam ukierunkowanych",
    cards: [
      {
        id: 1,
        valuableBYN: "1500",
        title: "Standard",
        month: true,
        includeServices: [
          {
            id: 1,
            title:
              "Tworzenie, projektowanie, nagłówek profilu, strategia prowadzenia mediów społecznościowych, TOV, link, Highlights",
          },
          {
            id: 2,
            title: "Tworzenie i publikacja do 12 postów i do 30 Stories",
          },
          {
            id: 3,
            title: "Konfiguracja targetu do 2 kampanii miesięcznie",
          },
          {
            id: 4,
            title:
              "Budżet reklamowy nie jest wliczony w cenę i jest płatny oddzielnie przez Klienta trzecim stronom",
          },
        ],
      },
      {
        id: 2,
        valuableBYN: "2000",
        month: true,
        title: "Premium",
        includeServices: [
          {
            id: 1,
            title:
              "Tworzenie, projektowanie, nagłówek profilu, strategia prowadzenia mediów społecznościowych, TOV, link, Highlights",
          },
          {
            id: 2,
            title: "Tworzenie i publikacja do 12 postów i do 70 Stories",
          },
          {
            id: 3,
            title: "Konfiguracja targetu do 4 kampanii miesięcznie",
          },
          {
            id: 4,
            title:
              "Budżet reklamowy nie jest wliczony w cenę i jest płatny oddzielnie przez Klienta trzecim stronom",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    url: "targeted-advertising",
    title: "Reklama ukierunkowana",
    description:
      "Pełny zakres promocji stron internetowych na kluczowe frazy w wyszukiwarkach Google. Podniesiemy pozycję Twojej strony w wynikach wyszukiwania.",
    img: targetedAdvertising,
    alt: "Reklama ukierunkowana",
    advantages: {
      title: "Dlaczego warto zamówić reklamę targetowaną?",
      list: [
        {
          id: 1,
          title: "Wysoka wydajność",
          description:
            "Reklama kierowana jest do konkretnych odbiorców na podstawie ich zainteresowań, zachowań i cech, zwiększając prawdopodobieństwo przyciągnięcia zainteresowanych klientów i konwersji.",
        },
        {
          id: 2,
          title: "Optymalizacja kosztów",
          description:
            "Pozwala efektywnie wykorzystać budżet reklamowy, minimalizując rozproszenie kosztów reklamy na nieodpowiednich odbiorców.",
        },
        {
          id: 3,
          title: "Personalizacja wiadomości",
          description:
            "Umożliwia oferowanie spersonalizowanych ofert i promocji, co usprawnia interakcję z potencjalnymi klientami i zwiększa ich lojalność wobec marki.",
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "1000",
        month: true,
        title: "Standard",
        includeServices: [
          {
            id: 1,
            title:
              "Konfiguracja reklam ukierunkowanych w mediach społecznościowych dla maksymalnie 5 kampanii z maksymalną liczbą 30 reklam",
          },
          {
            id: 2,
            title:
              "Pierwszy miesiąc rejestracji konta reklamowego, tworzenie reklam",
          },
          {
            id: 3,
            title: "Określenie strategii reklamowej - 1000,00 zł",
          },
          {
            id: 4,
            title:
              "Kolejne miesiące opieka i korekta kampanii - 500,00 zł do 10 produktów/usług",
          },
          {
            id: 5,
            title:
              "Budżet reklamowy nie jest wliczony w cenę i jest płatny oddzielnie przez Klienta trzecim stronom",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    url: "development-of-a-unique-design",
    title: "Projektowanie unikalnego designu",
    description:
      "Zaprojektujemy unikalny design dla strony internetowej, banerów, mediów społecznościowych, postów, prezentacji. Webdesign. Projektowanie ulotek, menu, katalogów, wideo, wizytówek, plakatów.",
    img: developmentOfAUniqueDesign,
    alt: "Projektowanie unikalnego designu",
    advantages: {
      title: "Dlaczego warto opracować unikalny projekt strony internetowej?",
      list: [
        {
          id: 1,
          title: "Unikalność i wyróżnienie się na tle konkurencji",
          description:
            "Unikalny projekt strony internetowej pomoże Twojej witrynie wyróżnić się spośród tysięcy innych i zapewnić odwiedzającym niezapomniane wrażenia wizualne.",
        },
        {
          id: 2,
          title: "Zwiększanie świadomości marki",
          description:
            "Indywidualny projekt pomaga zachować spójną identyfikację wizualną Twojej marki, co zwiększa rozpoznawalność i zaufanie do Twojej marki.",
        },
        {
          id: 3,
          title: "Optymalizacja doświadczenia użytkownika",
          description:
            "Efektywny, unikalny design ułatwia nawigację i interakcję ze stroną, co zwiększa satysfakcję użytkowników i zwiększa konwersję.",
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "4000",
        title: "Podręcznik identyfikacji wizualnej",
        month: false,
        includeServices: [
          {
            id: 1,
            title: "Tworzenie pełnej księgi identyfikacji wizualnej",
          },
        ],
      },
      {
        id: 2,
        valuableBYN: "1500",
        month: false,
        title: "Skrócony podręcznik identyfikacji wizualnej",
        includeServices: [
          {
            id: 1,
            title: "Tworzenie krótkiej wersji księgi identyfikacji wizualnej",
          },
        ],
      },
      {
        id: 3,
        valuableBYN: "1000",
        month: false,
        title: "Katalog biznesowy",
        includeServices: [
          {
            id: 1,
            title: "Tworzenie projektu designu katalogu biznesowego",
          },
        ],
      },
      {
        id: 4,
        valuableBYN: "1000",
        month: false,
        title: "Menu",
        includeServices: [
          {
            id: 1,
            title: "Tworzenie projektu designu menu",
          },
        ],
      },
      {
        id: 5,
        valuableBYN: "500",
        month: false,
        title: "Logo",
        includeServices: [
          {
            id: 1,
            title: "Tworzenie projektu designu logo",
          },
        ],
      },
      {
        id: 6,
        valuableBYN: "200",
        month: false,
        title: "Ulotka, wizytówka",
        includeServices: [
          {
            id: 1,
            title: "Tworzenie projektu designu ulotek, wizytówek",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    url: "booking-service",
    title: "Usługa rezerwacji",
    description:
      "Moduł na stronę internetową, Instagram, Facebook oraz inne platformy społecznościowe do rezerwacji pokoi hotelowych online. Synchronizacja z Booking.com.",
    img: bookingService,
    alt: "Usługa rezerwacji",
    advantages: {
      title: "Dlaczego warto wybrać usługę rezerwacji?",
      list: [
        {
          id: 1,
          title: "Wygodna rezerwacja",
          description:
            "Użytkownicy mogą łatwo i szybko zarezerwować wybrane usługi lub produkty za pośrednictwem platformy internetowej, bez konieczności odwiedzania fizycznych placówek i wykonywania połączeń telefonicznych.",
        },
        {
          id: 2,
          title: "Miejsca gwarantowane",
          description:
            "System rezerwacji umożliwia klientom rezerwację wybranych terminów i usług z wyprzedzeniem, zapewniając im gwarancję miejsc i łatwość korzystania z usługi.",
        },
        {
          id: 3,
          title: "Efektywny czas użytkowania",
          description:
            "Dzięki rezerwacji online klienci mogą zoptymalizować swój czas, wybierając dogodny dla siebie harmonogram, co zwiększa satysfakcję i lojalność wobec usługi.",
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "500",
        month: false,
        title: "Ekonomiczny",
        includeServices: [
          {
            id: 1,
            title: "Miesięczny koszt obsługi modułu rezerwacji",
          },
        ],
      },
      {
        id: 2,
        valuableBYN: "1500",
        month: false,
        title: "Standard",
        includeServices: [
          {
            id: 1,
            title:
              "Implementacja i konfiguracja modułu rezerwacji online dla hotelu/bazy wypoczynkowej/apartamentów – do 10 pokoi",
          },
          {
            id: 2,
            title: "Dodajemy z opisem wszystkie pokoje hotelowe do modułu",
          },
          {
            id: 3,
            title: "Dodajemy ceny i promocje",
          },
          {
            id: 4,
            title: "Wskazujemy wszystkie dodatkowe usługi",
          },
          {
            id: 5,
            title:
              "Konfigurujemy i testujemy kanały odbierania wiadomości o rezerwacji",
          },
          {
            id: 6,
            title:
              "Dodatkowy bonus: rejestracja obiektu i pokoi na portalu Booking.com",
          },
        ],
      },
      {
        id: 3,
        valuableBYN: "2000",
        month: false,
        title: "Premium",
        includeServices: [
          {
            id: 1,
            title:
              "Implementacja i konfiguracja modułu rezerwacji online dla hotelu/bazy wypoczynkowej/apartamentów – do 30 pokoi",
          },
          {
            id: 2,
            title: "Dodajemy z opisem wszystkie pokoje hotelowe do modułu",
          },
          {
            id: 3,
            title: "Dodajemy ceny i promocje",
          },
          {
            id: 4,
            title: "Wskazujemy wszystkie dodatkowe usługi",
          },
          {
            id: 5,
            title:
              "Konfigurujemy i testujemy kanały odbierania wiadomości o rezerwacji",
          },
          {
            id: 6,
            title:
              "Dodatkowy bonus: rejestracja obiektu i pokoi na portalu Booking.com",
          },
        ],
      },
      {
        id: 4,
        valuableBYN: "3000",
        month: false,
        title: "Ultra",
        includeServices: [
          {
            id: 1,
            title:
              "Implementacja i konfiguracja modułu rezerwacji online dla hotelu/bazy wypoczynkowej/apartamentów – od 30 pokoi",
          },
          {
            id: 2,
            title: "Dodajemy z opisem wszystkie pokoje hotelowe do modułu",
          },
          {
            id: 3,
            title: "Dodajemy ceny i promocje",
          },
          {
            id: 4,
            title: "Wskazujemy wszystkie dodatkowe usługi",
          },
          {
            id: 5,
            title:
              "Konfigurujemy i testujemy kanały odbierania wiadomości o rezerwacji",
          },
          {
            id: 6,
            title:
              "Dodatkowy bonus: rejestracja obiektu i pokoi na portalu Booking.com",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    url: "other-services",
    title: "Inne usługi",
    description:
      "Tworzenie prezentacji, wysyłki e-mail, copywriting, pisanie artykułów na strony internetowe. Praca z opiniami, automatyczne odpowiedzi.",
    img: otherServices,
    alt: "Usługi marketingowe",
    advantages: {
      title: "Dlaczego warto wybrać inne usługi?",
      list: [
        {
          id: 1,
          title: "Atrakcyjna treść",
          description:
            "Wideo to jeden z najbardziej angażujących formatów treści, skutecznie przykuwający uwagę i utrzymujący zainteresowanie odbiorców.",
        },
        {
          id: 2,
          title: "Reprezentacja wizualna",
          description:
            "Wideo pozwala wizualnie zaprezentować produkty, usługi lub pomysły, co pomaga lepiej komunikować się z docelowymi odbiorcami i przekazywać komunikat.",
        },
        {
          id: 3,
          title: "Profesjonalne wykonanie",
          description:
            "Zespoły produkcyjne posiadają doświadczenie i wiedzę, aby tworzyć wysokiej jakości filmy, uwzględniając wszystkie niezbędne aspekty, czyniąc Twoje treści bardziej atrakcyjnymi i profesjonalnymi.",
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "200",
        month: false,
        title: "Wypełnianie karty",
        includeServices: [
          {
            id: 1,
            title: "Wypełnianie karty firmowej na Google",
          },
        ],
      },
      {
        id: 2,
        valuableBYN: "300",
        month: false,
        title: "Recenzje",
        includeServices: [
          {
            id: 1,
            title: "Odpowiadanie na recenzje w karcie firmy Google",
          },
        ],
      },
      {
        id: 3,
        valuableBYN: "800",
        month: false,
        title: "Rozsyłki",
        includeServices: [
          {
            id: 1,
            title: "Konfiguracja rozsyłki e-mail (spam) do 5 wiadomości",
          },
        ],
      },
      {
        id: 4,
        valuableBYN: "400",
        month: false,
        title: "Automatyczne odpowiedzi",
        includeServices: [
          {
            id: 1,
            title:
              "Pisanie i redagowanie automatycznych odpowiedzi w wiadomościach bezpośrednich",
          },
        ],
      },
      {
        id: 5,
        valuableBYN: "200",
        month: false,
        title: "Copywriting",
        includeServices: [
          {
            id: 1,
            title:
              "Pisanie unikalnych tekstów pod istotne zapytania użytkowników",
          },
        ],
      },
      {
        id: 6,
        valuableBYN: "500",
        month: false,
        title: "Tworzenie prezentacji",
        includeServices: [
          {
            id: 1,
            title:
              "Tworzenie prezentacji o firmie, produkcie, usłudze w programie Power Point lub Google Presentation",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    url: "functional-marketing-department",
    title: "Dział funkcjonalny marketingu",
    description:
      "Zastąpimy pełny dział marketingu za cenę jednego wynagrodzenia. Podniesiemy poziom sprzedaży produktów/usług.",
    img: functionalMarketingDepartment,
    alt: "Dział funkcjonalny marketingu",
    advantages: {
      title: "Dlaczego warto wybrać Dział Marketingu Funkcjonalnego?",
      list: [
        {
          id: 1,
          title: "Badania i analizy rynku",
          description:
            "Analizuje trendy rynkowe, konkurencję i potrzeby klientów w celu określenia skutecznych strategii marketingowych.",
        },
        {
          id: 2,
          title: "Opracowywanie strategii marketingowych",
          description:
            "Tworzy plany i strategie mające na celu przyciągnięcie i utrzymanie klientów oraz zwiększenie świadomości marki i sukcesu.",
        },
        {
          id: 3,
          title: "Realizacja kampanii marketingowych",
          description:
            "Odpowiedzialny za uruchamianie i realizację inicjatyw reklamowych i marketingowych, w tym marketingu cyfrowego, strategii dotyczących treści i reklam ukierunkowanych, w celu osiągnięcia określonych wskaźników marketingowych.",
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "2000",
        title: "Standard",
        month: true,
        includeServices: [
          {
            id: 1,
            title: "Prowadzenie mediów społecznościowych",
          },
          {
            id: 2,
            title: "Tworzenie projektów reklamowych",
          },
          {
            id: 3,
            title: "Tworzenie ofert promocyjnych",
          },
          {
            id: 4,
            title: "Konfiguracja reklamy ukierunkowanej",
          },
          {
            id: 5,
            title: "Konfiguracja reklamy kontekstowej",
          },
          {
            id: 6,
            title: "Tworzenie i wypełnianie treścią strony internetowej",
          },
        ],
      },
    ],
  },
];

export const servicesRu = [
  {
    id: 1,
    url: "site-creation",
    title: "Разработка сайта",
    description:
      "Создание сайтов любой сложности от лэндинга до интернет магазина. Креативный дизайн, продающая структура, удобный функционал. Полный цикл от макета до хостинга.",
    img: siteCreation,
    alt: "Создание сайтов",
    advantages: {
      title: "Преимущества наших сайтов",
      list: [
        {
          id: 1,
          title: "Узнаваемость бренда",
          description:
            "Учитываем ваши идеи и фирменный стиль организации. Увеличиваем количество клиентов, так же повышаем узнаваемость бренда",
        },
        {
          id: 2,
          title: "Понятный интерфейс",
          description:
            "Благодаря нашему креативному отделу мы доносим до клиента главные преимущества продукта или услуги",
        },
        {
          id: 3,
          title: "Надежный сервис",
          description:
            "Наш отдел разработки обеспечит стабильную и беспрерывную работу вашего сервиса или сайта",
        },
      ],
    },
    textBadge:
      "Закажи любой тариф по разработке сайта и получи Контекстную рекламу + CEO в подарок",
    cards: [
      {
        id: 1,
        valuableBYN: "1500",
        month: false,
        title: "Стандарт",
        includeServices: [
          {
            id: 1,
            title: "Лэндинг до 4 экранов",
          },
          {
            id: 2,
            title: "Со стандартным дизайном",
          },
          {
            id: 3,
            title: "без CMS",
          },
          {
            id: 4,
            title: "помощь в регистрации домена",
          },
          {
            id: 5,
            title: "размещение на хостинге",
          },
        ],
      },
      {
        id: 2,
        valuableBYN: "2500",
        month: false,
        title: "Премиум",
        includeServices: [
          {
            id: 1,
            title: "Лэндинг до 7 экранов",
          },
          {
            id: 2,
            title: "С уникальным дизайном",
          },
          {
            id: 3,
            title: "простой CMS (WP либо др)",
          },
          {
            id: 4,
            title: "помощь в регистрации домена",
          },
          {
            id: 5,
            title: "размещение на хостинге обратная связь",
          },
          {
            id: 6,
            title: "интерактивный помощник",
          },
        ],
      },
      {
        id: 3,
        valuableBYN: "5000",
        month: false,
        title: "Корпоративный сайт",
        includeServices: [
          {
            id: 1,
            title: "Корпоративный сайт до 7 страниц",
          },
          {
            id: 2,
            title: "С уникальным дизайном",
          },
          {
            id: 3,
            title: "CMS (WP либо др)",
          },
          {
            id: 4,
            title: "помощь в регистрации домена",
          },
          {
            id: 5,
            title: "интерактивный помощник",
          },
        ],
      },
      {
        id: 4,
        valuableBYN: "8000",
        month: false,
        title: "Интернет-магазин",
        includeServices: [
          {
            id: 1,
            title: "Интернет магазин до 15 страниц",
          },
          {
            id: 2,
            title: "С уникальным дизайном",
          },
          {
            id: 3,
            title: "CMS (WP либо др)",
          },
          {
            id: 4,
            title: "помощь в регистрации домена",
          },
          {
            id: 5,
            title: "размещение на хостинге обратная связь",
          },
          {
            id: 6,
            title: "интерактивный помощник",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    url: "website-maintenance",
    title: "Обслуживание сайта",
    img: websiteMaintenance,
    description:
      "Наполнение контентом сайта, устранение ошибок, добавление новых страниц,  редизайн,   разработка калькуляторов, форм обратной связи, привязка к складским программам.",
    alt: "Обслуживание сайтов",
    advantages: {
      title: "Преимущества наших сайтов",
      list: [
        {
          id: 1,
          title: "Регулярные обновления и безопасность",
          description:
            "Мы обеспечиваем постоянное обновление вашего сайта, следим за его безопасностью и защищаем от угроз, что обеспечивает надежную и стабильную работу онлайн-платформы.",
        },
        {
          id: 2,
          title: "Профессиональная поддержка и быстрое реагирование",
          description:
            "Наша команда технической поддержки всегда готова помочь и ответить на ваши вопросы. Мы гарантируем быстрое реагирование на любые запросы, что позволяет избежать простоев и проблем на сайте.",
        },
        {
          id: 3,
          title: "Повышение производительности и оптимизация",
          description:
            "Мы оптимизируем ваш сайт для более эффективной работы, что повышает его производительность и ускоряет загрузку страниц. Это улучшает пользовательский опыт и способствует увеличению конверсии и доходов.",
        },
      ],
    },
    textBadge:
      "Закажи любой тариф по обслуживанию сайта и получи SEO в подарок",
    cards: [
      {
        id: 1,
        valuableBYN: "1000",
        month: true,
        title: "Стандарт",
        includeServices: [
          {
            id: 1,
            title: "Ежемесячное техническое сопровождение сайта",
          },
          {
            id: 2,
            title: "Устранение ошибок",
          },
          {
            id: 3,
            title: "Обновление контента",
          },
          {
            id: 4,
            title: "Подготовка контента",
          },
          {
            id: 6,
            title: "Наполнение сайта",
          },
          {
            id: 7,
            title: "Установка/ изменения плагинов, счетчиков",
          },
          {
            id: 8,
            title: "Написание и публикация новостей",
          },
          {
            id: 9,
            title: "Добавление новых страниц",
          },
          {
            id: 10,
            title: "До 30 часов выполнения работ в месяц",
          },
        ],
      },
      {
        id: 2,
        valuableBYN: "1500",
        month: true,
        title: "Премиум",
        includeServices: [
          {
            id: 1,
            title: "Ежемесячное техническому сопровождению сайта",
          },
          {
            id: 2,
            title: "Устранение ошибок",
          },
          {
            id: 3,
            title: "Обновление контента",
          },
          {
            id: 4,
            title: "Подготовка контента",
          },
          {
            id: 5,
            title: "Наполнение сайта",
          },
          {
            id: 6,
            title: "Установка/ изменения плагинов, счетчиков",
          },
          {
            id: 7,
            title: "Написание и публикация новостей",
          },
          {
            id: 8,
            title: "Добавление новых страниц",
          },
          {
            id: 9,
            title: "До 50 часов выполнения работ работы в месяц",
          },
        ],
      },
      {
        id: 3,
        valuableBYN: "30",
        month: false,
        title: "Разовое",
        includeServices: [
          {
            id: 1,
            title: "Разовые работы техническому сопровождению сайта",
          },
          {
            id: 2,
            title: "Устранение ошибок",
          },
          {
            id: 3,
            title: "Обновление контента",
          },
          {
            id: 4,
            title: "Подготовка контента",
          },
          {
            id: 5,
            title: "Наполнение сайта",
          },
          {
            id: 6,
            title: "Установка/ изменения плагинов, счетчиков",
          },
          {
            id: 7,
            title: "Написание и публикация новостей",
          },
          {
            id: 8,
            title: "Добавление новых страниц",
          },
          {
            id: 9,
            title: "За 1 час выполнения работ",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    url: "contextual-advertising",
    title: "Контекстная реклама",
    description:
      "Настройка контекстной рекламы Могилеве и Беларуси, на поиске Яндекс,Google, банерная реклама, реклама e-mail, You tube. Помощь в пополнении рекламных аккаунтов.",
    img: contextualAdvertising,
    alt: "Настройка контекстной рекламы",
    advantages: {
      title: "Почему стоит заказать контекстную рекламу?",
      list: [
        {
          id: 1,
          title: "Точное таргетирование",
          description:
            "Привлекаем заинтересованную аудиторию благодаря ключевым словам.",
        },
        {
          id: 2,
          title: "Гибкий контроль бюджета",
          description:
            "Эффективно распределяем рекламные затраты по вашим требованиям.",
        },
        {
          id: 3,
          title: "Высокая конверсия",
          description:
            "Увеличиваем число клиентов, привлекая заинтересованных пользователей.",
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "500",
        month: true,
        title: "Стандарт",
        includeServices: [
          {
            id: 1,
            title:
              "Настройка контекстной рекламы для сайтов в поисковой системе Яндекс либо Гугл",
          },
          {
            id: 2,
            title: "1-й месяц сбор семантического ядра",
          },
          {
            id: 3,
            title: "Регистрация рекламного аккаунта",
          },
          {
            id: 4,
            title:
              "Создание объявлений, определение стратегии рекламы- 250,00 р.",
          },
          {
            id: 6,
            title:
              "Последующие месяца сопровождение и корректировка компании- 150,00 р. до 10 товаров/услуги",
          },
          {
            id: 7,
            title:
              "* Рекламный бюджет не входит в стоимость и оплачивается Заказчиком отдельно третьим лицам",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    url: "seo-promotion",
    title: "SEO продвижение",
    description:
      "Полный комплекс продвижения сайтов по ключевым запросам в поисковиках Яндекс, Google. Поднимем ваш сайт в вверх в поисковой выдаче.",
    img: seoPromotion,
    alt: "SEO продвижение сайтов под ключ",
    advantages: {
      title: "Почему стоит заказать SEO продвижение?",
      list: [
        {
          id: 1,
          title: "Повышение видимости",
          description:
            "Оптимизируем ваш сайт, чтобы он лучше понимался поисковыми системами, что помогает увеличить его рейтинг и привлечь больше органического трафика.",
        },
        {
          id: 2,
          title: "Целевой трафик",
          description:
            "Нацеливаемся на ключевые слова и запросы, связанные с вашим бизнесом, чтобы привлечь именно тех пользователей, которые ищут вашу продукцию или услугу.",
        },
        {
          id: 3,
          title: "Долгосрочные результаты",
          description:
            "SEO продвижение строит устойчивый онлайн-профиль вашего бизнеса, что способствует увеличению органического трафика и приводит к долгосрочной успешности вашего веб-присутствия.",
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "450",
        month: true,
        title: "Стандарт",
        includeServices: [
          {
            id: 1,
            title:
              "Разработка семантического ядра под не более 15 товаров /услуг в месяц",
          },
          {
            id: 2,
            title: "Полный цикл работ от семантического ядра до публикаций",
          },
          {
            id: 3,
            title: "Оптимизация под Яндекс и Google",
          },
          {
            id: 4,
            title:
              "Написание и оптимизация Title,Description, Н1-Н4, ALT до 60 страниц и картинок в месяц",
          },
          {
            id: 6,
            title: "Поиск и удаление битых ссылок",
          },
          {
            id: 7,
            title: "Написание до 3 статей в месяц",
          },
          {
            id: 8,
            title: "Контроль позиций",
          },
          {
            id: 9,
            title: "Размещение не менее 5 бесплатных ссылок в мес.",
          },
          {
            id: 10,
            title: "Покупка платных ссылок по согласованию с Заказчиком.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    url: "smm-promotion",
    title: "SMM продвижение",
    description: "Полный комплекс SMM продвижения любых товаров и услуг, запуск продаж, повышение продаж, охватов. Настроем FB pixel, статистику. Снимем контент, напишем посты.",
    img: smmPromotion,
    alt: "SMM продвижение бизнеса",
    advantages: {
      title: "Почему стоит заказать SMM - продвижение?",
      list: [
        {
          id: 1,
          title: "Увлекательный контент",
          description:
            "Создаем привлекательные посты, которые привлекают внимание и вовлекают аудиторию, что способствует росту подписчиков и репостов.",
        },
        {
          id: 2,
          title: "Взаимодействие с аудиторией",
          description:
            "Активно общаемся с подписчиками, отвечаем на комментарии и сообщения, создавая доверительные отношения и укрепляя связь с клиентами.",
        },
        {
          id: 3,
          title: "Расширение онлайн-присутствия",
          description:
            "SMM-продвижение помогает расширить ваше онлайн-присутствие, привлечь новых клиентов и улучшить репутацию вашего бренда.",
        },
      ],
    },
    textBadge:
      "Закажи любой тариф SMM-продвижения и получи настройку таргетированной рекламы в подарок",
    cards: [
      {
        id: 1,
        valuableBYN: "1500",
        title: "Стандарт",
        month: true,
        includeServices: [
          {
            id: 1,
            title:
              "Создание, дизайн, шапка профиля, стратегия ведения социальных сетей, ТOV, ссылка, хайлайты",
          },
          {
            id: 2,
            title: "Создание и публикация до 12 постов и до 30 сторис",
          },
          {
            id: 3,
            title: "Настройка таргета до 2 компаний в мес.",
          },
          {
            id: 4,
            title:
              "* Рекламный бюджет не входит в стоимость и оплачивается Заказчиком отдельно третьим лицам",
          },
        ],
      },
      {
        id: 2,
        valuableBYN: "2000",
        month: true,
        title: "Премиум",
        includeServices: [
          {
            id: 1,
            title:
              "Создание, дизайн, шапка профиля, стратегия ведения социальных сетей, ТOV, ссылка, хайлайты",
          },
          {
            id: 2,
            title: "Создание и публикация до 12 постов и до 70 сторис",
          },
          {
            id: 3,
            title: "Настройка таргета до 4 компаний в мес.",
          },
          {
            id: 4,
            title:
              "* Рекламный бюджет не входит в стоимость и оплачивается Заказчиком отдельно третьим лицам",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    url: "targeted-advertising",
    title: "Таргетированная реклама",
    description: "Полный комплекс продвижения сайтов по ключевым запросам в поисковиках Яндекс, Google. Поднимем ваш сайт в вверх в поисковой выдаче.",
    img: targetedAdvertising,
    alt: "Таргетированная реклама",
    advantages: {
      title: "Почему стоит заказать таргетированную рекламу?",
      list: [
        {
          id: 1,
          title: "Высокая эффективность",
          description:
            "Реклама нацелена на определенную аудиторию с учетом их интересов, поведения и характеристик, что увеличивает вероятность привлечения заинтересованных клиентов и конверсии.",
        },
        {
          id: 2,
          title: "Оптимизация затрат",
          description:
            "Позволяет эффективно использовать рекламный бюджет, минимизируя рассеивание рекламных затрат на неподходящую аудиторию.",
        },
        {
          id: 3,
          title: "Персонализация сообщений",
          description:
            "Позволяет предлагать индивидуальные предложения и акции, что улучшает взаимодействие с потенциальными клиентами и повышает их лояльность к бренду.",
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "1000",
        month: true,
        title: "Стандарт",
        includeServices: [
          {
            id: 1,
            title:
              "Настройка таргетированной рекламы в социальных сетях до 5 компаний с максимальным количеством объявлений 30",
          },
          {
            id: 2,
            title:
              "1-й месяц регистрация рекламного аккаунта, создание объявлений",
          },
          {
            id: 3,
            title: "Определение стратегии рекламы- 250,00 р.",
          },
          {
            id: 4,
            title:
              "Последующие месяца сопровождение и корректировка компании- 100,00 р. до 10 товаров/услуги",
          },
          {
            id: 5,
            title:
              "* Рекламный бюджет не входит в стоимость и оплачивается Заказчиком отдельно третьим лицам",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    url: "development-of-a-unique-design",
    title: "Разработка уникального дизайна",
    description: "Разработаем уникальный дизайн для сайта, баннеров, социальных сетей, постов, презентаций. Webdesign. Дизайн  флаеров, меню, каталогов, видео, визиток, флаеров.",
    img: developmentOfAUniqueDesign,
    alt: "разработка уникального дизайна",
    advantages: {
      title: "Почему стоит выбрать разработку уникального веб-дизайна?",
      list: [
        {
          id: 1,
          title: "Уникальность и выделение среди конкурентов",
          description:
            "Уникальный веб-дизайн помогает вашему сайту выделиться среди тысяч других и создать запоминающееся визуальное впечатление у посетителей.",
        },
        {
          id: 2,
          title: "Повышение узнаваемости бренда",
          description:
            "Индивидуальный дизайн способствует поддержанию единой визуальной идентичности вашего бренда, что увеличивает узнаваемость и доверие к вашему бренду.",
        },
        {
          id: 3,
          title: "Оптимизация пользовательского опыта",
          description:
            "Эффективный уникальный дизайн облегчает навигацию и взаимодействие с сайтом, что повышает удовлетворенность пользователей и способствует увеличению конверсии.вв",
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "4000",
        title: "Брендбук",
        month: false,
        includeServices: [
          {
            id: 1,
            title: "Разработка полного брендбука",
          },
        ],
      },
      {
        id: 2,
        valuableBYN: "1500",
        month: false,
        title: "Укороченный брендбук",
        includeServices: [
          {
            id: 1,
            title: "Разработка короткой версии брендбука",
          },
        ],
      },
      {
        id: 3,
        valuableBYN: "1000",
        month: false,
        title: "Бизнес-каталог",
        includeServices: [
          {
            id: 1,
            title: "Разработка дизайна бизнес каталогов",
          },
        ],
      },
      {
        id: 4,
        valuableBYN: "1000",
        month: false,
        title: "Меню",
        includeServices: [
          {
            id: 1,
            title: "Разработка дизайна меню",
          },
        ],
      },
      {
        id: 5,
        valuableBYN: "500",
        month: false,
        title: "Логотип",
        includeServices: [
          {
            id: 1,
            title: "Разработка дизайна лого",
          },
        ],
      },
      {
        id: 6,
        valuableBYN: "200",
        month: false,
        title: "Флаер, визитка",
        includeServices: [
          {
            id: 1,
            title: "Разработка дизайна флаеров, визиток",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    url: "booking-service",
    title: "Booking service",
    description: "Блок для сайта, Instagram, vk и др социальных сетей для бронирования гостиничных номеров онлайн. Синхронизация с Booking.com",
    img: bookingService,
    alt: "Сервис для бронирования гостиниц",
    advantages: {
      title: "Почему стоит выбрать Booking service?",
      list: [
        {
          id: 1,
          title: "Удобное бронирование",
          description:
            "Пользователи могут легко и быстро забронировать желаемые услуги или товары через онлайн-платформу, без необходимости посещения физических точек или звонков.",
        },
        {
          id: 2,
          title: "Гарантированные места",
          description:
            "Система бронирования позволяет клиентам забронировать нужные даты и услуги заранее, обеспечивая им гарантированные места и удобство в использовании услуги.",
        },
        {
          id: 3,
          title: "Эффективное время использования",
          description:
            "Благодаря бронированию онлайн, клиенты могут оптимизировать свое время, выбирая удобное для них расписание, что повышает удовлетворенность и лояльность к сервису.",
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "500",
        month: false,
        title: "Эконом",
        includeServices: [
          {
            id: 1,
            title: "Ежемесячна стоимость сопровождения модуля бронирования",
          },
        ],
      },
      {
        id: 2,
        valuableBYN: "1500",
        month: false,
        title: "Стандарт",
        includeServices: [
          {
            id: 1,
            title:
              "Внедрение и настройка модуля онлайн бронирования для отеля/базы отдыха/ апартаментов – до 10 номеров",
          },
          {
            id: 2,
            title: "Вносим с описанием все гостиничные номера в модуль",
          },
          {
            id: 3,
            title: "Вносим тарифы и акции",
          },
          {
            id: 4,
            title: "Указываем все сопутствующие услуги",
          },
          {
            id: 5,
            title:
              "Настраиваем и тестируем каналы приема сообщений о бронировании",
          },
          {
            id: 6,
            title:
              "Дополнительный бонус регистрации Вашего объекта и номеров на сервисе Booking.com",
          },
        ],
      },
      {
        id: 3,
        valuableBYN: "2000",
        month: false,
        title: "Премиум",
        includeServices: [
          {
            id: 1,
            title:
              "Внедрение и настройка модуля онлайн бронирования для отеля/базы отдыха/ апартаментов – до 30 номеров",
          },
          {
            id: 2,
            title: "Вносим с описанием все гостиничные номера в модуль",
          },
          {
            id: 3,
            title: "Вносим тарифы и акции",
          },
          {
            id: 4,
            title: "Указываем все сопутствующие услуги",
          },
          {
            id: 5,
            title:
              "Настраиваем и тестируем каналы приема сообщений о бронировании",
          },
          {
            id: 6,
            title:
              "Дополнительный бонус регистрации Вашего объекта и номеров на сервисе Booking.com",
          },
        ],
      },
      {
        id: 4,
        valuableBYN: "3000",
        month: false,
        title: "Ультра",
        includeServices: [
          {
            id: 1,
            title:
              "Внедрение и настройка модуля онлайн бронирования для отеля/базы отдыха/ апартаментов – больше 30 номеров",
          },
          {
            id: 2,
            title: "Вносим с описанием все гостиничные номера в модуль",
          },
          {
            id: 3,
            title: "Вносим тарифы и акции",
          },
          {
            id: 4,
            title: "Указываем все сопутствующие услуги",
          },
          {
            id: 5,
            title:
              "Настраиваем и тестируем каналы приема сообщений о бронировании",
          },
          {
            id: 6,
            title:
              "Дополнительный бонус регистрации Вашего объекта и номеров на сервисе Booking.com",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    url: "other-services",
    title: "Прочие услуги",
    description: "Создание презентаций, .e-mail рассылки, копирайтинг, написание статьей для сайтов. Работа с отзывами, автоответы.",
    img: otherServices,
    alt: "маркетинговые услуги",
    advantages: {
      title: "Почему стоит выбрать Прочие услуги?",
      list: [
        {
          id: 1,
          title: "Привлекательный контент",
          description:
            "Видео является одним из самых привлекательных форматов контента, что позволяет эффективно привлекать внимание и удерживать интерес аудитории.",
        },
        {
          id: 2,
          title: "Наглядное представление",
          description:
            "Видео позволяет наглядно демонстрировать продукты, услуги или идеи, что помогает лучше коммуницировать с целевой аудиторией и донести ваше сообщение.",
        },
        {
          id: 3,
          title: "Профессиональное исполнение",
          description:
            "Продакшн команды обладают опытом и знаниями для создания высококачественного видео с учетом всех необходимых аспектов, что делает ваш контент более привлекательным и профессиональным.",
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "200",
        month: false,
        title: "Заполнение карточки",
        includeServices: [
          {
            id: 1,
            title: "Заполнение карточки компаний Google",
          },
        ],
      },
      {
        id: 2,
        valuableBYN: "300",
        month: false,
        title: "Отзывы",
        includeServices: [
          {
            id: 1,
            title: "Ответы на отзывы в карточках компании Google",
          },
        ],
      },
      {
        id: 3,
        valuableBYN: "800",
        month: false,
        title: "Рассылки",
        includeServices: [
          {
            id: 1,
            title: "Настройка рассылок email (spam) до 5 писем",
          },
        ],
      },
      {
        id: 4,
        valuableBYN: "400",
        month: false,
        title: "Автоответы",
        includeServices: [
          {
            id: 1,
            title:
              "Написание и редакция автоответов в директ",
          },
        ],
      },
      {
        id: 5,
        valuableBYN: "200",
        month: false,
        title: "Копирайтинг",
        includeServices: [
          {
            id: 1,
            title:
              "Написание уникальных текстов под релевантные запросы пользователей",
          },
        ],
      },
      {
        id: 6,
        valuableBYN: "500",
        month: false,
        title: "Разработка презентации",
        includeServices: [
          {
            id: 1,
            title:
              "Разработка презентаций о предприятии, товаре, услуге в Power point, Google presentation",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    url: "functional-marketing-department",
    title: "Функциональный отдел маркетинга",
    description: "Заменим полноценный отдел маркетинга всего по стоимости одной заработной платы. Вывдем продажи товаров / услуг  на новый уровень.",
    img: functionalMarketingDepartment,
    alt: "отдел маркетинга на аутсросинге",
    advantages: {
      title: "Почему стоит выбрать Функциональный отдел маркетинга?",
      list: [
        {
          id: 1,
          title: "Исследование рынка и анализ",
          description:
            "Анализирует рыночные тенденции, конкурентов и потребности клиентов для определения эффективных стратегий маркетинга.",
        },
        {
          id: 2,
          title: "Разработка маркетинговых стратегий",
          description:
            "Создает планы и стратегии, направленные на привлечение и удержание клиентов, а также на повышение узнаваемости и успеха бренда.",
        },
        {
          id: 3,
          title: "Реализация маркетинговых кампаний",
          description:
            "Отвечает за запуск и выполнение рекламных и маркетинговых инициатив, включая цифровой маркетинг, контент-стратегии и таргетированную рекламу, с целью достижения конкретных маркетинговых показателей.",
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "2000",
        title: "Стандарт",
        month: true,
        includeServices: [
          {
            id: 1,
            title: "Ведение социальных сетей",
          },
          {
            id: 2,
            title: "Разработка рекламных макетов",
          },
          {
            id: 3,
            title: "Разработка акционных предложений",
          },
          {
            id: 4,
            title: "Настройка таргетированной рекламы",
          },
          {
            id: 5,
            title: "Настройка контекстной рекламы",
          },
          {
            id: 6,
            title: "Разработка и наполнение контентом сайта",
          },
        ],
      },
    ],
  },
];
