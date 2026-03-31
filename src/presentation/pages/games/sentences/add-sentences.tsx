import { SentenceForm } from '@/presentation/pages/games/sentences/forms/sentence-form-provider.tsx'
import { SentenceSelectionProvider } from '@/presentation/contexts/sentence-form-context.tsx'
export const AddSentences = () => {
    return (
        <SentenceSelectionProvider>
            <SentenceForm />
        </SentenceSelectionProvider>
    )
}
