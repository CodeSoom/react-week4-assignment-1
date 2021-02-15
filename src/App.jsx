import React from 'react';

import { useSelector } from 'react-redux';

import Page from './Page';

export default function App() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  return (
    <Page tasks={tasks} />
  );
}
