import { RouteObject } from "react-router-dom";
import { WordlePage } from "@/presentation/pages/games/wordle/page.tsx";
import { WordleFormWordsFields } from "@/presentation/components/wordle/wordle-form-words-fields.tsx";
import { WordleFormTopic } from "@/presentation/components/wordle/wordle-form-topic.tsx";
import { CreateWordleGame } from "@/presentation/pages/games/wordle/create-wordle-game.tsx";
import { WordleGamePage } from "@/presentation/pages/games/wordle/wordle-game-page.tsx";

export const WordleGameRoutes: RouteObject[] = [
    {
        path: "wordle",
        element: <WordlePage />,
        children: [

            {
                path: "play",
                element: <WordleGamePage />
            },
            {
                path: 'add', element: <CreateWordleGame />,
                children: [
                    {
                        index: true,
                        element: <WordleFormTopic />
                    },
                    {
                        path: "words",
                        element: <WordleFormWordsFields />
                    }
                ]
            }
        ]

    }
]

