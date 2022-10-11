import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders label text', () => {
    const { getByLabelText } = render(
      <InputContainer />,
    );

    expect(getByLabelText(/할 일/)).not.toBeNull();
  });

  it('renders an input element with a title change event', () => {
    const { getByLabelText, getByDisplayValue } = render(
      <InputContainer />,
    );

    fireEvent.change(getByLabelText(/할 일/), { target: { value: 'New Title' } });

    expect(getByDisplayValue(/New Title/)).not.toBeNull();
  });

  it('renders add task button with click event', () => {
    const { getByText } = render(
      <InputContainer />,
    );

    expect(getByText(/추가/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });
});
