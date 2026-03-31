import { ExerciseLayout } from "@/presentation/components/common/quizz/exercise-layout.tsx"
import Cube from "@/assets/cube.jpg"
import { useAppDispatch, useAppSelector } from "@/data/state/reduxHooks.ts";
import { next as sentenceNext, prev as sentencePrev } from "@/data/state/slices/sentenceSlice.ts";
import { useSentence } from "@/presentation/hooks/useSentence.ts";
import { useNavigate } from "react-router-dom";

export const SentenceSlider = () => {
    const dispatch = useAppDispatch();
    const { current, topic, sentences } = useAppSelector(state => state.sentence);
    const { handleResetSentences } = useSentence()
    const navigate = useNavigate()


    const handleNext = () => dispatch(sentenceNext());
    const handlePrev = () => dispatch(sentencePrev());

    const handleReset = () => {
        handleResetSentences()
        navigate("/console")
    }
    return (
        <>
            <ExerciseLayout
                onReset={handleReset}
                backgroundImage={Cube}
                data={sentences}
                current={current}
                topic={topic}
                onNext={handleNext}
                onPrev={handlePrev} Glassbackground={"bg-purple-300/20"} />
        </>
    )
}