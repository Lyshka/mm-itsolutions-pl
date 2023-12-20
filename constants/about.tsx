import { StarsPeople } from "@/assets/img/StarsPeople";
import { BrainPeople } from "@/assets/img/BrainPeople";
import { RatingUp } from "@/assets/img/RatingUp";

export const aboutList = [
  {
    id: 1,
    title: "Indywidualne podejście",
    description: "Podchodzimy indywidualnie do każdej branży и biznesu",
    img: <BrainPeople className="2xl:w-20 w-[53.333px] 2xl:h-20 h-[53.333px] text-main"/>,
  },
  {
    id: 2,
    title: "Potężna strategia",
    description: "Analizujemy twój obszar rynkowy i tworzymy potężną strategię promocyjną",
    img: <RatingUp className="2xl:w-20 w-[53.333px] 2xl:h-20 h-[53.333px] text-main"/>,
  },
  {
    id: 3,
    title: "Doświadczeni specjaliści",
    description: "Nasi pracownicy to eksperci pierwszej klasy w swoich dziedzinach",
    img: <StarsPeople className="2xl:w-20 w-[53.333px] 2xl:h-20 h-[53.333px] text-main"/>,
  },
];
