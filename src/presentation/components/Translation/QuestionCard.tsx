import { useDispatch } from "react-redux";
import { deleteQuestion } from "@/infrastructure/state/slice.ts";
import { Question } from "@/core/types/question";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard = ({ question }: QuestionCardProps) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {question.answers.map((answer, idx) => (
          <li key={idx}>{answer}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(deleteQuestion(question.id))}>Eliminar</button>
    </div>
  );
};

export default QuestionCard;
