import { configureStore } from "@reduxjs/toolkit";

// import { todosReducer } from "./reducers/todosReducer";
import { todosSlice } from "./slices/todoSlice";

export const store = configureStore({
  reducer: { todosSlice: todosSlice.reducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
