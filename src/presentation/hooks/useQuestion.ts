import { useAppDispatch } from '@/infrastructure/state/reduxHooks.ts';
import { addQuestion, removeQuestion, addTopic, reset } from '@/infrastructure/state/slices/questionSlice.ts';
import { Question, QuestionState } from '@/core/types/questionType.ts';

export const useQuestion = () => {
    const dispatch = useAppDispatch();

    const registerTopicSentence = (topic: QuestionState['topic']) => {
        dispatch(addTopic(topic))
    }

    const handleNewQuestion = (question: Question[]) => {
        dispatch(addQuestion(question));
    };

    const deleteSentence = (index: number) => {
        dispatch(removeQuestion(index));
    };

    const handleResetQuestions = () => {
        dispatch(reset());
    }

    return {
        registerTopicSentence,
        handleNewQuestion,
        deleteSentence,
        handleResetQuestions
    };
};