import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { updateTaskTitle, addTask } from './action/action-creators';

import App from './App';

import TASKS from './__fixtures__/tasks.json';

jest.mock('react-redux');

function renderComponent() {
  return render(<App />);
}

describe('<App />', () => {
  let dispatch;
  let tasks;

  beforeEach(() => {
    dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('without tasks', () => {
    beforeEach(() => {
      tasks = [];
    });

    it('display empty tasks', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks,
      }));

      const { container } = renderComponent();

      expect(container).toHaveTextContent('할 일이 없어요!');
    });

    it('input task-title', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
        tasks,
      }));

      const { getByRole } = renderComponent();

      const newTaskTitle = 'some task';
      const taskInput = getByRole('textbox');
      fireEvent.change(taskInput, { target: { value: newTaskTitle } });
      expect(dispatch).toBeCalledWith(updateTaskTitle(newTaskTitle));
    });

    it('add new task', () => {
      useSelector.mockImplementation((selector) => selector({
        taskId: 0,
        taskTitle: 'some task',
        tasks,
      }));

      const { getByRole } = renderComponent();

      const addTaskButton = getByRole('button', { name: '추가' });
      fireEvent.click(addTaskButton);
      expect(dispatch).toBeCalledTimes(1);
      expect(dispatch).toBeCalledWith(addTask());
    });
  });

  context('with tasks', () => {
    beforeEach(() => {
      tasks = TASKS;
    });

    it('display task-list', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks,
      }));

      const { getAllByRole } = renderComponent();

      const taskListItems = getAllByRole('listitem');
      expect(taskListItems).toHaveLength(TASKS.length);
      taskListItems.forEach((item, itemIndex) => {
        expect(item.firstChild.nodeValue).toBe(TASKS[itemIndex].title);
      });
    });

    it('confirm added task', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks,
      }));

      const { getAllByRole } = renderComponent();

      const confirmButtons = getAllByRole('button', { name: '완료' });
      expect(confirmButtons).toHaveLength(TASKS.length);

      confirmButtons.forEach((button) => fireEvent.click(button));
      expect(dispatch).toBeCalledTimes(confirmButtons.length);
    });
  });
});
