import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice.ts';
import questionSlice from './questionSlice.ts';
import sentenceSlice from './sentenceSlice.ts';
import questionReducer from "@/infrastructure/state/slice.ts";

const rootReducer = combineReducers({
    user: userSlice,
    question: questionSlice,
    sentence: sentenceSlice,
    questions: questionReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
