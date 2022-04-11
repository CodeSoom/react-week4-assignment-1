import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

const renderInputContainer = () => render((
  <InputContainer />
));

describe('InputContainer', () => {
  it('renders task title', () => {
    useSelector.mockImplementation(() => ({
      taskTitle: 'New Task!',
    }));

    const { queryByDisplayValue } = renderInputContainer();

    expect(queryByDisplayValue('New Task!')).not.toBeNull();
  });

  it('renders add task button', () => {
    const { queryByRole } = renderInputContainer();

    expect(queryByRole('button')).toHaveTextContent('추가');
  });

  it('renders placeholder', () => {
    const { queryByPlaceholderText } = renderInputContainer();

    expect(queryByPlaceholderText('할 일을 입력해 주세요')).not.toBeNull();
  });

  it('listens for click evnet on add task', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = renderInputContainer();

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });
});
