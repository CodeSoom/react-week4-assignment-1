import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  it(' 할일을 입력한다. ', () => {
    useDispatch.mockImplementation(() => (dispatch));

    useSelector.mockImplementation((selector) => selector({ taskTitle: '할일 입력값' }));

    const { getByPlaceholderText } = render(
      <InputContainer />,
    );

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

  it(' 할일을 추가한다. ', () => {
    useDispatch.mockImplementation(() => (dispatch));

    useSelector.mockImplementation((selector) => selector({ taskTitle: '할일 입력' }));

    const { getByText, getByDisplayValue } = render((
      <InputContainer />
    ));

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/할일 입력/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });

    expect(getByDisplayValue('할일 입력')).toBeInTheDocument();
  });
});
