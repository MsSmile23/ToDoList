import { createAsyncThunk } from "@reduxjs/toolkit";
import { StatusProps, TodosType } from "../types";

export const getTodos = createAsyncThunk("todos/all", async () => {
    try { 
        const result = await fetch("http://localhost:3001/api/todos");
        return result.json(); 
    }
    catch(err){console.log(err)}
});

export const addTodo = createAsyncThunk(
    "todos/add",
    async(input: TodosType) => {
        try { 
            const result = await fetch("http://localhost:3001/api/todos", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(input),
            })
            return await result.json();
         }
        catch(err){console.log(err)}
    }
)
export const delTodo = createAsyncThunk(
    "todos/del", 
    async(id: number) => {
        try {
            await fetch (`http://localhost:3001/api/todos/${id}`, {method: 'DELETE'});
            return id;
        }
        catch (err) {console.log(err)}
    }
)

export const statusTodo = createAsyncThunk(
    "todos/status",
    async(statusData) => {
        const { id, status } = statusData
        try{ await fetch(`http://localhost:3001/api/todos/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status}),
            }) 
            return {id, status}
        }
        catch(err) {console.log(err)}
    }
)

export const editTodo = createAsyncThunk(
    "todos/edit",
    async(editData) => {
        const { id, change } = editData;
        try {
            const responce = await fetch(`http://localhost:3001/api/todos/${id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(change),
            })
            const result = await responce.json();
            return {id, result}
        }
        catch (err) {console.log(err)}
    }
)