import React, { Dispatch, SetStateAction } from 'react'

export type TodosType = {
    id?: number;
    title: string;
    status: boolean;
}

export interface ITodoProps {
    todo: TodosType;
    setTodos: Dispatch<SetStateAction<TodosType[]>>;
}

export interface ISetTodos {
    setTodos: Dispatch<SetStateAction<TodosType[]>>;
}

export interface TodoProp {
    todos: TodosType[];
    setTodos: Dispatch<SetStateAction<TodosType[]>>;
}

export type StatusProps = {
    id: number;
    status: boolean;
}