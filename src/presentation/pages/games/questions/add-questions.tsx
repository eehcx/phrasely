import { QuestionFormProvider } from '@/presentation/pages/games/questions/forms/question-form-provider'
import { QuestionSelectionProvider } from '@/presentation/contexts/question-form-context.tsx'
export const AddQuestions = () => {
    return (
        <QuestionSelectionProvider>
            <QuestionFormProvider />
        </QuestionSelectionProvider>
    )
}
