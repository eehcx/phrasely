import { ExerciseLayout } from "@/presentation/components/quizz/exercise-layout.tsx"
import Foodies from "@/assets/glass.png"
import { useAppDispatch, useAppSelector } from "@/infrastructure/state/reduxHooks.ts";
import { next as questionNext, prev as questionPrev } from "@/infrastructure/state/slices/questionSlice.ts";
import { useNavigate } from "react-router-dom";
import { useQuestion } from "@/presentation/hooks/useQuestion.ts";

export const QuestionSlider = () => {
    const dispatch = useAppDispatch();
    const { current, topic, questions } = useAppSelector(state => state.question);



    const { handleResetQuestions } = useQuestion()
    const navigate = useNavigate()
    const handleReset = () => {
        handleResetQuestions()
        navigate("/console")
    }

    const handleNext = () => dispatch(questionNext());
    const handlePrev = () => dispatch(questionPrev());
    return (
        <>
            <ExerciseLayout
                Glassbackground="bg-purple-300/20"
                onReset={handleReset}
                backgroundImage={Foodies}
                data={questions}
                current={current}
                topic={topic}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        </>
    )
}