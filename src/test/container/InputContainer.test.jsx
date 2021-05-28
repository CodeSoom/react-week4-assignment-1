import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from '../../container/InputContainer';

jest.mock('react-redux');

describe('<InputContainer />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  function renderInput() {
    return render(
      <InputContainer />,
    );
  }

  it('renders input, button', () => {
    useSelector.mockImplementation((selector) => selector({ taskTitle: 'New Title' }));

    const { getByText, getByDisplayValue } = renderInput();

    expect(getByText(/추가/)).toBeInTheDocument();
    expect(getByDisplayValue(/New Title/)).toBeInTheDocument();
  });

  it('calls dispatch with "todo/addTask" action when click "추가" button', () => {
    const { getByText } = renderInput();

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({
      type: 'todos/addTask',
    });
  });
});
