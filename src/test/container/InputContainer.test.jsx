import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from '../../container/InputContainer';

jest.mock('react-redux');

describe('<InputContainer />', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('renders input, button', () => {
    useSelector.mockImplementation((selector) => selector({ taskTitle: 'New Title' }));

    const { getByText, getByDisplayValue } = render((
      <InputContainer />
    ));

    expect(getByText(/추가/)).toBeInTheDocument();
    expect(getByDisplayValue(/New Title/)).toBeInTheDocument();
  });

  it('called dispatch with "todo/addTask" action', () => {
    const { getByText } = render((
      <InputContainer />
    ));

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({
      type: 'todos/addTask',
    });
  });
});
