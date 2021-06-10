import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './actions';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  // TODO : useSelector 조작. (mock내용 바꿔치기 하기)
  // tasks값 초기화 해주기
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  context('when tasks is empty', () => {
    it('renders 할 일이 없어요', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
        tasks: [],
      }));
      const { container } = render(<ListContainer />);

      expect(container).not.toHaveTextContent(/완료/);
      expect(container).toHaveTextContent(/할 일이 없어요/);
    });
  });
  context('when tasks is not empty', () => {
    function setup() {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: 'New Task',
        tasks: [
          { id: 1, title: 'Task-1' },
          { id: 2, title: 'Task-2' },
        ],
      }));
    }
    it('renders <Item>s', () => {
      setup();
      const { container, getByText } = render(<ListContainer />);

      expect(container).toHaveTextContent(/완료/);
      expect(getByText(/Task-1/)).not.toBeNull();
      expect(getByText(/Task-2/)).not.toBeNull();
    });

    it('renders “완료” button to delete a task', () => {
      setup();
      const { getAllByText } = render(<ListContainer />);

      const buttons = getAllByText('완료');

      fireEvent.click(buttons[0]);

      expect(dispatch).toBeCalledWith(deleteTask(1));
    });
  });
});
