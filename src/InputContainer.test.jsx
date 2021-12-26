import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import InputContainer from './InputContainer';
import { addTask, changeTitle } from './actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  it('새로운 todo를 store에 추가', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'new Title',
    }));

    const { getByText } = render(<InputContainer />);
    expect(getByText(/추가/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));
    expect(dispatch).toBeCalledWith(addTask('new Title'));
  });

  it('할 일 작성시 taskTitle 변경', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '',
    }));

    const { getByLabelText } = render(<InputContainer />);
    fireEvent.change(getByLabelText('할 일'), {
      target: {
        value: 'new Title',
      },
    });
    expect(dispatch).toBeCalledWith(changeTitle('new Title'));
  });
});
