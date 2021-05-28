import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

import { addTask, updateTaskTitle } from './actions';

jest.mock('react-redux');

describe('InputContainer 관련 테스트', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  it('handleClickAddTask가 호출되는지 확인하는 테스트입니다', () => {
    const { getByText, getByDisplayValue } = render(<InputContainer />);

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/New Title/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith(addTask());
  });

  it('handleChangeTitle이 호출되는지 확인하는 테스트입니다', () => {
    const { getByPlaceholderText } = render(<InputContainer />);

    fireEvent.change(
      getByPlaceholderText('할 일을 입력해 주세요'),
      { target: { value: '할일1' } },
    );

    expect(dispatch).toBeCalledWith(updateTaskTitle('할일1'));
  });
});
