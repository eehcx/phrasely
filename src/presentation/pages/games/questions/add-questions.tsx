import { QuestionFormProvider } from '@/presentation/components/questions/question-form-provider.tsx'
import { QuestionSelectionProvider } from '@/presentation/contexts/question-form-context.tsx'
export const AddQuestions = () => {
    return (
        <QuestionSelectionProvider>
            <QuestionFormProvider />
        </QuestionSelectionProvider>
    )
}
