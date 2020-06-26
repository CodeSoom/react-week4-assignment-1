import React from 'react';

import List from './List';

export default function ListContainer({ tasks, onClickDelete }) {
  return <List tasks={tasks} onClickDelete={onClickDelete} />;
}
