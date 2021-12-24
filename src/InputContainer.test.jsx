import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import InputContainer from './InputContainer';
import { addTask } from './actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('새로운 todo를 store에 추가', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      title: 'new Title',
    }));

    const { getByText } = render(<InputContainer />);

    expect(getByText(/추가/).not.toBeNull());

    fireEvent.click(getByText(/추가/));
    expect(dispatch).toBeCalledWith(addTask('new Title'));
  });
});
