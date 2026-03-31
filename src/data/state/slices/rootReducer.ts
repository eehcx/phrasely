import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice.ts';
import questionSlice from './questionSlice.ts';
import sentenceSlice from './sentenceSlice.ts';

const rootReducer = combineReducers({
    user: userSlice,
    question: questionSlice,
    sentence: sentenceSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
