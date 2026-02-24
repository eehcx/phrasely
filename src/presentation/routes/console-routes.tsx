import { RouteObject } from "react-router-dom";
import { GameConsole } from "@/presentation/pages/console/game-console.tsx";
import { ScoreRanking } from "@/presentation/pages/console/score-ranking.tsx";
import { GuestSession } from "@/presentation/pages/console/new-guest.tsx";

export const ConsoleRoutes: RouteObject[] = [
    {
        path: "/console",
        element: <GameConsole />,
    },
    {
        path: "/console/rank",
        element: <ScoreRanking />,
    },
    {
        path: "/console/guest/add",
        element: <GuestSession />
    }
]