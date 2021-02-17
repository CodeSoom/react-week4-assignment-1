import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import InputContainer from './InputContainer';

jest.mock('react-redux');

beforeEach(() => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  jest.clearAllMocks();
});

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('renders tasks', () => {
    const { getByDisplayValue, getByText } = render((
      <InputContainer />
    ));

    expect(getByDisplayValue('New Title')).not.toBeNull();
    expect(getByText('추가')).not.toBeNull();
  });

  it('listens `추가` button click event', () => {
    const { getByText } = render((
      <InputContainer />
    ));

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });

    expect(getByText('New Title')).not.toBeNull();
  });
});
