import { render, fireEvent, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

import { updateTaskTitle } from './actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  function renderInputContainer() {
    return (
      render(
        <InputContainer />,
      )
    );
  }

  it('InputContainer가 랜더링된다', () => {
    renderInputContainer();

    expect(screen.getByLabelText(/할 일/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '추가' })).toBeInTheDocument();
  });

  it('입력한 값으로 할 일이 랜더링된다.', () => {
    renderInputContainer();

    const input = screen.getByLabelText('할 일');

    fireEvent.change(input, {
      target: {
        value: '쿠키 먹기',
      },
    });

    expect(dispatch).toBeCalledWith(updateTaskTitle('쿠키 먹기'));
  });

  it('"추가" 버튼을 누르면 addTask가 호출된다', () => {
    renderInputContainer();

    fireEvent.click(screen.getByText(/추가/));

    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });
});
