import React from 'react';
import { useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const { tasks } = useSelector((state) => state);
  return <List tasks={tasks} onClickDelete={null} />;
}
