import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/actions';
import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with taskTitle', () => {
    it('input에 New Title 출력', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: 'New Title',
      }));

      const { getByPlaceholderText } = render(<InputContainer />);

      expect(getByPlaceholderText('할 일을 입력해 주세요').value).toBe('New Title');
    });

    it('추가 버튼 클릭', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: 'New Title',
      }));

      const { queryByText } = render(<InputContainer />);

      fireEvent.click(queryByText('추가'));

      expect(dispatch).toBeCalledWith(addTask());
    });
  });
});
