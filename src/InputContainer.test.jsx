import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  function renderInput() {
    return render((
      <InputContainer />
    ));
  }

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  it('changes the task title', () => {
    const { getByLabelText, queryByDisplayValue } = renderInput();

    expect(queryByDisplayValue('New Title')).not.toBeNull();

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: '무언가 하기' },
    });

    expect(dispatch).toBeCalled();
  });

  it('adds a new task', () => {
    const { getByText, queryByText, queryByDisplayValue } = renderInput();

    expect(queryByText(/추가/)).not.toBeNull();

    expect(queryByDisplayValue(/New Title/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });
});
