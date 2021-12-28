// 테스트 할 것
// taskTitle값이 있으면 화면에 그려진다.
// 추가 버튼이 있다.
// input입력하면 dispatch 작동한다.
// 추가 버튼 누르면 dispatch 작동한다.
//

import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  // 더미 값을 주자 HOW? 지금 쓰고있는 useSelector를 가짜함수로 쓰면 됨!
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'new Title',
  }));

  it('redner InputContainer', () => {
    const { getByText, getByDisplayValue } = render(<InputContainer />);
    expect(getByText('추가')).not.toBeNull();
    expect(getByDisplayValue('new Title'));
  });

  it('추가해서 dispatch 작동한다.', () => {
    const { getByText } = render(<InputContainer />);
    fireEvent.click(getByText('추가'));
    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });
});
