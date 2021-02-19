import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  function renderInputContainer() {
    return render((
      <InputContainer />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
  });

  it(' 할일을 입력하면, 입력함수가 실행된다 . ', () => {
    useSelector.mockImplementation((selector) => selector({ taskTitle: '할일 입력값' }));

    const { getByPlaceholderText } = renderInputContainer();

    fireEvent.change(getByPlaceholderText('할 일을 입력해 주세요'), {
      target: {
        value: '커버리지 채우기',
      },
    });

    expect(dispatch).toBeCalledWith(
      {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: '커버리지 채우기',
        },
      },
    );
  });

  it(' 추가버튼을 누르면, 할일을 추가하는 함수가 실행되고, 할일이 추가된다. ', () => {
    useSelector.mockImplementation((selector) => selector({ taskTitle: '할일 입력' }));

    const { queryByText, getByText, getByDisplayValue } = renderInputContainer();

    expect(queryByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/할일 입력/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });

    expect(getByDisplayValue('할일 입력')).toBeInTheDocument();
  });
});
