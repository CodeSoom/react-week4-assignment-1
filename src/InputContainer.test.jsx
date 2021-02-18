import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'New Title',
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  function InputContainerMaker() {
    return render((
      <InputContainer />
    ));
  }

  it('renders tasks', () => {
    const { getByDisplayValue, getByText } = InputContainerMaker();

    expect(getByDisplayValue('New Title')).not.toBeNull();
    expect(getByText('추가')).not.toBeNull();
  });

  it('listens change event', () => {
    const { getByLabelText } = InputContainerMaker();

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: '홈트하기' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: '홈트하기',
      },
    });
  });

  it('listens `추가` button click event', () => {
    const { getByText } = InputContainerMaker();

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });
});
