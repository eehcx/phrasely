
import { useFormContext } from "react-hook-form";
import { buttonVariants } from "@/presentation/components/ui/button.tsx";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { IQuestionFormSchema } from "@/presentation/pages/games/questions/types/IQuestionFormSchema";
import { useQuestionSelection } from "@/presentation/contexts/question-form-context.tsx";
import { QuestionEditor } from "@/presentation/pages/games/questions/forms/question-editor";
import { QuestionList } from "@/presentation/pages/games/questions/question-list";


export function QuestionsFields() {
    const { watch, setValue, getValues } = useFormContext<IQuestionFormSchema>();
    const { selectedQuestionIndex, setSelectedQuestionIndex } = useQuestionSelection();

    // Observar las sentencias
    const questions = watch("questions");

    // Función para agregar una nueva sentencia
    const addQuestion = () => {
        const currentQuestions = getValues("questions") || [];
        setValue("questions", [
            ...currentQuestions,
            {
                question: "",
                answers: [""],
                correct_answer: 0,
            },
        ]);
        setSelectedQuestionIndex(currentQuestions.length);
    };

    return (
        <div className="space-y-4 selection:text-primary-foreground selection:bg-primary">


            <Link to=".." className={buttonVariants({ variant: "link", className: "text-secondary font-normal text-slate-800" })}>
                <ChevronLeftIcon /> Go back</Link>

            <h2 className="text-2xl font-semibold text-slate-900">Let's add some questions!</h2>
            <div className="grid md:grid-cols-2 gap-5">
                {selectedQuestionIndex != null && (
                    <QuestionEditor
                        selectedIndex={selectedQuestionIndex}
                        questions={questions}
                        addQuestion={addQuestion}
                    />
                )}
                <QuestionList questions={questions} />
            </div>


        </div>
    );
}
