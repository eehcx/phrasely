import { SentenceCardForm } from "@/presentation/pages/games/sentences/cards/sentence-card-form.tsx";

interface SentenceListProps {
    sentences: Array<any>;
}

export function SentenceList({ sentences }: SentenceListProps) {
    return (
        <div className="space-y-2">
            {sentences.map((_, index) => (
                <SentenceCardForm key={index} index={index} />
            ))}
        </div>
    );
}
