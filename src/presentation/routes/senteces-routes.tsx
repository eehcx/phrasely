import { RouteObject } from "react-router-dom";
//import { Index } from "@/pages/index";
import { AddSentences } from "@/presentation/pages/games/sentences/add-sentences.tsx";
import { SentencePage } from "@/presentation/pages/games/sentences/page.tsx";
import { FieldsSentences } from "@/presentation/pages/games/sentences/fields-sentences/fields-sentences.tsx";
import { SentenceFormTopic } from "@/presentation/pages/games/sentences/forms/sentence-form-topic.tsx";
import { SentenceSlider } from "@/presentation/pages/games/sentences/slider-sentences.tsx";

export const SentenceRoutes: RouteObject[] = [
    {
        path: "sentence",
        element: <SentencePage />,
        children: [
            {
                path: "play",
                element: <SentenceSlider />
            },
            {
                path: 'add', element: <AddSentences />,
                children: [
                    {
                        index: true,
                        element: <SentenceFormTopic />
                    },
                    {
                        path: "sentences",
                        element: <FieldsSentences />
                    }
                ]
            }
        ]

    }
]