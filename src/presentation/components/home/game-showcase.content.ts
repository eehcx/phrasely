interface GameCard {
  name: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  slug: string;
}

export const GAMES: GameCard[] = [
  {
    name: "WordWise",
    description:
      "Mejora tu vocabulario con ejercicios de asociación de palabras y definiciones.",
    gradientFrom: "#F35F31",
    gradientTo: "#FFA96D",
    slug: "wordwise",
  },
  {
    name: "Sece-Sentences",
    description:
      "Practica gramática formando oraciones correctas a partir de palabras desordenadas.",
    gradientFrom: "#433252",
    gradientTo: "#6B4F8A",
    slug: "sece-sentences",
  },
  {
    name: "Wordle",
    description:
      "Adivina la palabra oculta en seis intentos, un clásico para entrenar la mente.",
    gradientFrom: "#F35F31",
    gradientTo: "#433252",
    slug: "wordle",
  },
];
