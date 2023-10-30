import React, { } from 'react'
import { Card } from './Card';
import { useAppSelector } from '../redux/hooks';
// import { store } from '../redux/store';
export const List = () => {
  const { todos } = useAppSelector((store) => store.todosSlice);
  
  return (
    <>
    {todos?.map((todo) => (<Card key={todo.id} todo={todo}/>))}
    </>
  )
};
