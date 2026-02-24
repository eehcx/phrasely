import { SentenceForm } from '@/presentation/components/sentences/sentence-form-provider.tsx'
import { SentenceSelectionProvider } from '@/presentation/contexts/sentence-form-context.tsx'
export const AddSentences = () => {
    return (
        <SentenceSelectionProvider>
            <SentenceForm />
        </SentenceSelectionProvider>
    )
}
