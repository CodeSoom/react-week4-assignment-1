import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import InputContainer from '../src/InputContainer';
import { addTask, updateTaskTitle } from '../src/store/actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  const renderComponent = () => render(<InputContainer />);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'New Title',
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  it('렌더링 된다.', () => {
    const { getByRole } = renderComponent();
    const input = getByRole('textbox', { name: /할 일/ });

    expect(input).not.toBeNull();
    expect(input).toHaveValue('New Title');
  });

  it('할 일 입력시, updateTaskTitle 액션이 dispatch 된다', () => {
    const { getByRole } = renderComponent();
    const input = getByRole('textbox', { name: /할 일/ });

    fireEvent.change(input, { target: { value: 'Change Title' } });

    expect(dispatch).toBeCalledWith(updateTaskTitle('Change Title'));
  });

  it('할 일을 추가시, addTask 액션이 dispatch 된다.', () => {
    const { getByRole } = renderComponent();

    fireEvent.click(getByRole('button', { name: /추가/ }));
    expect(dispatch).toBeCalledWith(addTask());
  });
});
