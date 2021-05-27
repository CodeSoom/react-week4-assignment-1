import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('<InputContainer />', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('renders input, button', () => {
    useSelector.mockImplementation((selector) => selector({ taskTitle: 'New Title' }));

    const { getByText, getByDisplayValue } = render((
      <InputContainer />
    ));

    expect(getByText(/추가/)).not.toBeNull();
    // input의 value는 무시하거나 getByText대신 getByDisplayValue같은 것을 이용
    expect(getByDisplayValue(/New Title/)).not.toBeNull();
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
