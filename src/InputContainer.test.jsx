import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import InputContainer from './InputContainer';

import { addTask, updateTaskTitle } from './actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  given('taskTitle', () => '');

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: given.taskTitle,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Input이 보인다.', () => {
    const { getByLabelText, getByText } = render((
      <InputContainer />
    ));

    expect(getByLabelText('할 일')).toBeInTheDocument();
    expect(getByText('추가')).toBeInTheDocument();
  });

  describe('할 일 입력', () => {
    it('할 일이 입력된다.', () => {
      const { getByLabelText } = render((
        <InputContainer />
      ));

      const input = getByLabelText('할 일');

      fireEvent.change(input, {
        target: {
          value: 'New Task',
        },
      });

      expect(dispatch).toBeCalledWith(updateTaskTitle('New Task'));
    });
  });

  describe('추가 버튼 클릭', () => {
    context('입력 중인 할 일이 있을 경우', () => {
      it('할 일이 추가된다.', () => {
        given('taskTitle', () => 'New Task');

        const { getByText } = render((
          <InputContainer />
        ));

        const button = getByText('추가');

        fireEvent.click(button);

        expect(dispatch).toBeCalledWith(addTask());
      });
    });
  });
});
