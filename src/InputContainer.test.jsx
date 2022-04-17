import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderInputContainer = () => render((
    <InputContainer />
  ));

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Task!',
  }));

  it('renders task title', () => {
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

  it('listens for change evnet on update task title', () => {
    const { getByDisplayValue } = renderInputContainer();

    fireEvent.change(
      getByDisplayValue('New Task!'),
      { target: { value: '새로운 할일!' } },
    );

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: '새로운 할일!',
      },
    });
  });

  it('listens for click evnet on add task', () => {
    const { getByText } = renderInputContainer();

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });
});
