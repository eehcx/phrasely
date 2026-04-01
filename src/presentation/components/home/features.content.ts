import {
  Wand2,
  BarChart3,
  Link2,
  TrendingUp,
  Gift,
  type LucideIcon,
} from "lucide-react";

interface FeatureItem {
  iconName: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: FeatureItem[] = [
  {
    iconName: Wand2,
    title: "Fácil creación",
    description:
      "Crea juegos interactivos en minutos sin conocimientos técnicos.",
  },
  {
    iconName: BarChart3,
    title: "Resultados en tiempo real",
    description:
      "Observa el progreso de tus alumnos mientras juegan.",
  },
  {
    iconName: Link2,
    title: "Links compartibles",
    description:
      "Comparte tus juegos con un simple enlace, sin descargas ni instalaciones.",
  },
  {
    iconName: TrendingUp,
    title: "Seguimiento de progreso",
    description:
      "Analiza el rendimiento de cada alumno con métricas detalladas.",
  },
  {
    iconName: Gift,
    title: "Gratis para siempre",
    description:
      "Accede a todas las funcionalidades sin costo alguno para docentes.",
  },
];
