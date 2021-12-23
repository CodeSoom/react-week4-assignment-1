import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

describe('InputContainer', () => {
  const handleChangeTitle = jest.fn();
  const handleClickAddTask = jest.fn();

  it('taskTitle should be added', () => {
    const { getByText } = render((
      <InputContainer
        taskTitle="newTitle"
        onChangeTitle={handleChangeTitle}
        onClickAddTask={handleClickAddTask}
      />
    ));

    fireEvent.click(getByText('추가'));

    expect(handleClickAddTask).toBeCalled();
  });
});
