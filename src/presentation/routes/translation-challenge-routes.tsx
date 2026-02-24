import { RouteObject } from "react-router-dom";
import TranslationChallenge from "@/presentation/pages/translation/TranslationChallengeIntro.tsx";
import AddQuestion from "@/presentation/pages/translation/AddQuestion.tsx";
import Game from "@/presentation/pages/translation/TranslationChallengePlay.tsx";
import Settings from "@/presentation/pages/translation/TranslationChallengeSettings.tsx"; // Importar el nuevo componente de configuración

const translationChallengeRoutes: RouteObject[] = [
  {
    path: "/translation-challenge",
    Component: TranslationChallenge,
  },
  {
    path: "/translation-challenge/add",
    element: <AddQuestion />,
  },
  {
    path: "/translation-challenge/play",
    element: <Game />,
  },
  {
    path: "/translation-challenge/settings", // Nueva ruta para configuración
    element: <Settings />,
  },
];

export default translationChallengeRoutes;
