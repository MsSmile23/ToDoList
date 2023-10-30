import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { List } from './component/List';
import { Form } from './component/Form';
import { TodosType } from './types';
import { useAppDispatch } from './redux/hooks';
// import { todosTypes } from './redux/actionTypes';
import { getTodos } from './redux/thunkActions';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodos())}, []
  );
  return (
    <>
      <Link className="todos" to="/form">
        <button type="button">Form</button>
      </Link>
      <Link className="todos" to="/list">
        <button type="button">List</button>
      </Link>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
