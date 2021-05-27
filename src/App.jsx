import React from 'react';

import InputContainer from './container/InputContainer';
import ListContainer from './container/ListContainer';

export default function App() {
  return (
    <div>
      <h1>To-do</h1>
      <InputContainer />
      <ListContainer />
    </div>
  );
}
