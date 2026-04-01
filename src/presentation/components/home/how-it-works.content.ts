import { Pencil, Share2, Gamepad2, type LucideIcon } from "lucide-react";

interface StepItem {
  number: number;
  title: string;
  description: string;
  iconName: LucideIcon;
}

export const STEPS: StepItem[] = [
  {
    number: 1,
    title: "Crea tu juego",
    description:
      "Diseña ejercicios de vocabulario, gramática o comprensión en minutos con nuestro editor intuitivo.",
    iconName: Pencil,
  },
  {
    number: 2,
    title: "Comparte el link",
    description:
      "Genera un enlace único y envíalo a tus alumnos por el medio que prefieras.",
    iconName: Share2,
  },
  {
    number: 3,
    title: "¡A jugar!",
    description:
      "Tus alumnos acceden al juego y practican de forma interactiva y divertida.",
    iconName: Gamepad2,
  },
];
