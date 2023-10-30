import React, { ChangeEvent, useState, JSXElementConstructor } from 'react'
import { ITodoProps, StatusProps } from '../types'
import { useAppDispatch } from '../redux/hooks'
import { delTodo, editTodo, statusTodo } from '../redux/thunkActions';

export const Card = ({todo} : ITodoProps): JSX.Element => {

    const dispatch = useAppDispatch();

    const deleteHandler = () => {
        console.log(todo.id);
        dispatch(delTodo(todo.id))
    }
    const checkHandler =  (event: ChangeEvent<HTMLInputElement>) => {
        const status = event.target.checked;
        const id = todo.id
        const statusData = {id, status}
        dispatch(statusTodo(statusData));
    }
    const [isEditing, setEdit] = useState(false);
    const handleEdit = () => {
        setEdit(true);
    };

    const [change, setChange] = useState({title: ''});

    const newChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setChange({...change, [event.target.name]: event.target.value});
  }
    const editToDo =  () => {
        const id = todo.id
        const editData = {id, change}
        setEdit(false)
        dispatch(editTodo(editData))
    }

  return (
    <>
    {isEditing? (<div>
        <hr/>
        {todo.title}
        <input onChange={newChange} type='text' name='title' placeholder='Новое название' value={change?.title}/>
        <button onClick={editToDo} type='button'>Сохранить</button>
        <hr/>
        </div>
        )
    : (<div>
        <hr/>
        {todo.status ? (<div style={{textDecoration: "line-through"}}>{todo.title}</div>) : (<div>{todo.title}</div>)}
        <input onChange={checkHandler} type='checkbox' checked={todo.status}/>
        <button onClick={deleteHandler} type='button'>Удалить</button>
        <button type='button' onClick={handleEdit}>Изменить</button>
        <hr/>
    </div>)}
    </>
  )
}
