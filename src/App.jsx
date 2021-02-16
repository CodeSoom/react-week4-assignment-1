import React from 'react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';
import ListContainer from './ListContainer';

export default function App() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  return (
    <div>
      <h1>To-do</h1>
      <InputContainer />
      <ListContainer />
    </div>
  );
}
