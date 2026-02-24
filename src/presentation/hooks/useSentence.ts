import { useAppDispatch } from '@/infrastructure/state/reduxHooks.ts';
import { addSentence, addTopic, removeSentence, reset } from '@/infrastructure/state/slices/sentenceSlice.ts';
import { Sentence, SentenceState } from '@/core/types/sentenceType.ts';

export const useSentence = () => {
    const dispatch = useAppDispatch();

    const registerTopicSentence = (topic: SentenceState['topic']) => {
        dispatch(addTopic(topic))
    }

    const registerNewSentence = (sentence: Sentence[]) => {
        dispatch(addSentence(sentence));
    };

    const deleteSentence = (index: number) => {
        dispatch(removeSentence(index));
    };

    const handleResetSentences = () => {
        dispatch(reset());
    }

    return {
        registerNewSentence,
        deleteSentence,
        registerTopicSentence,
        handleResetSentences
    };
};
