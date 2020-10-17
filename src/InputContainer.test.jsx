import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: '아무것도 하지 않기 3',
  }));

  const renderInputContainer = () => render((
    <InputContainer />
  ));

  it('할 일을 추가한다.', () => {
    const { getByDisplayValue, getByText } = renderInputContainer();
    const addButton = getByText(/추가/);

    expect(getByDisplayValue(/아무것도 하지 않기 3/)).not.toBeNull();
    expect(addButton).not.toBeNull();

    fireEvent.click(addButton);

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });

  it('할 일을 입력한다.', () => {
    const { getByLabelText } = renderInputContainer();

    const taskTitle = '아무것도 하지 않기 4';

    fireEvent.change(getByLabelText('할 일'), { target: { value: taskTitle } });

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle,
      },
    });
  });
});
