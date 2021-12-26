import { useDispatch } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  context('추가버튼을 클릭하면', () => {
    it('dispatch가 1회 호출된다', () => {
      const { getByText } = render(<InputContainer />);

      fireEvent.click(getByText('추가'));

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('입력값이 변경되면', () => {
    it('dispatch가 1회 호출된다', () => {
      const expectValue = '테스트2';
      const { getByRole } = render(<InputContainer />);
      const sut = getByRole('textbox');

      fireEvent.change(sut, { target: { value: expectValue } });

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
