import React, {useState, ChangeEvent} from 'react'

import { TodosType } from '../types';
import { useAppDispatch } from '../redux/hooks';
import { addTodo } from '../redux/thunkActions';

export const Form = () => {
    // const { input, submitTask, newTask } = useContext<Partial<IContextValue>>(Context);
    const [input, setInput] = useState<TodosType>({title: '', status: false});
    const dispatch = useAppDispatch()
    const newTask = (event: ChangeEvent<HTMLInputElement>): void => {
      setInput({...input, [event.target.name]: event.target.value});
    }
    const submitTask =  (): void => {
      dispatch(addTodo(input));
      setInput({title: '', status: false});
    }
  return (
    <>
    <input onChange={newTask} type='text' name='title' placeholder='Название задачи' value={input?.title}/>
    <button onClick={submitTask} type='button'>
        Добавить
    </button>
    </>
  )
}
