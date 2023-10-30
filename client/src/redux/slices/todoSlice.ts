import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodosType } from "../../types";
import { addTodo, delTodo, editTodo, getTodos, statusTodo } from "../thunkActions";


interface TodoState {
    todos: TodosType[];
    loader: boolean;
    error: string | undefined;
}

const initialState: TodoState = {
    todos: [],
    loader: false,
    error: '',
}
export const todosSlice = createSlice({
    name: "todosSlice",
    initialState,
    reducers: {
        //Здесь мы можем спокойно писать сами редусеры. Но поскольку у меня будет работа с базой данных
        //я решил что лучше сразу всё сделать через мидлварки. Отличная с ними будет практика, чтобы избежать
        //проблем с ассинхронкой. Короче, это дефолт, а экстра редусеры смотри вниз. Они как раз построены на миддл-
        //варках
    },
    extraReducers(builder) {
        builder.addCase(
            getTodos.fulfilled,
            (state, action: PayloadAction<TodosType[]> ) => {
                // console.log('1', state.todos);
                state.todos = action.payload;
                state.loader = false;
                // console.log('2', state.todos);
            }
        );
        builder.addCase(getTodos.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(getTodos.rejected, (state, action) => {
            state.error = action.error.message
        });
        builder.addCase(
            addTodo.fulfilled,
            (state, action: PayloadAction<TodosType>) => {
                console.log(state, action);
                state.todos.push(action.payload);
                state.loader = false;
            }
        )
        builder.addCase(addTodo.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(
            addTodo.rejected, (state, action) => {
                state.error = action.error.message;
            }
        )
        builder.addCase(
            delTodo.fulfilled,
            (state, action) => {
                state.todos = state.todos.filter((el) => el.id !== action.payload);
                state.loader = false;
            }
        )
        builder.addCase(delTodo.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(
            delTodo.rejected, (state, action) => {
                state.error = action.error.message;
            }
        )
        builder.addCase(
            statusTodo.fulfilled, 
            (state, action) => {
                state.todos = state.todos.map((el) => {if (el.id === action.payload?.id)
                    {return { ...el, status: action.payload?.status } 
                    } return el })
                state.loader = false;
            }
        )
        builder.addCase(statusTodo.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(
            statusTodo.rejected, (state, action) => {
                state.error = action.error.message;
            }
        )
        builder.addCase(
            editTodo.fulfilled,
            (state, action) => {
                state.todos = state.todos.map((el) => {if (el.id === action.payload?.id)
                    {return { ...el, title: action.payload?.result.title } 
                    } return el })
                state.loader = false;
            }
        )
        builder.addCase(editTodo.pending, (state) => {
            state.loader = true;
        })
        builder.addCase(
            editTodo.rejected, (state, action) => {
                state.error = action.error.message;
            }
        )
    }
})