import { ExerciseLayout } from "@/presentation/components/common/quizz/exercise-layout.tsx"
import Foodies from "@/assets/glass.png"
import { useAppDispatch, useAppSelector } from "@/data/state/reduxHooks.ts";
import { next as questionNext, prev as questionPrev } from "@/data/state/slices/questionSlice.ts";
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