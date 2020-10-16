import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('show tasks', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '아무것도 안 하기',
    }));

    const { getByText, getByDisplayValue } = render((
      <InputContainer />
    ));

    expect(getByDisplayValue(/아무것도 안 하기/)).not.toBeNull();

    expect(getByText(/추가/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });
});
