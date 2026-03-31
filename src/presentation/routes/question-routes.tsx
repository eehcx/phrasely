import { RouteObject } from "react-router-dom";
import { QuestionPage } from "@/presentation/pages/games/questions/page.tsx";
import { AddQuestions } from "@/presentation/pages/games/questions/add-questions.tsx";
import { QuestionFormTopic } from "@/presentation/pages/games/questions/forms/question-form-topic.tsx";
import { QuestionsFields } from "@/presentation/pages/games/questions/questions-fields.tsx";
import { QuestionSlider } from "@/presentation/pages/games/questions/slider-questions.tsx";

export const QuestionsGameRoutes: RouteObject[] = [
    {
        path: "question",
        element: <QuestionPage />,
        children: [

            {
                path: "play",
                element: <QuestionSlider />
            },
            {
                path: 'add', element: <AddQuestions />,
                children: [
                    {
                        index: true,
                        element: <QuestionFormTopic />
                    },
                    {
                        path: "questions",
                        element: <QuestionsFields />
                    }
                ]
            }
        ]

    }
]