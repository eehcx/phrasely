import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveQuestions } from "@/infrastructure/utils/translation/questionStorage.ts";
import { Question } from "@/core/types/question";

// Definir acción asíncrona con tipos correctos
export const saveQuestionsAction = createAsyncThunk<Question[], Question[]>(
    "questions/saveQuestions",
    async (questions, { rejectWithValue }) => {
      try {
        await saveQuestions(questions);
        return questions;
      } catch (error) {
        return rejectWithValue("Error al guardar las preguntas");
      }
    }
  );
  
