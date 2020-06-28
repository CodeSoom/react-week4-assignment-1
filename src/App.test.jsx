import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { updateTaskTitle, addTask } from './action/action-creators';

import App from './App';

import Tasks from './__fixtures__/tasks.json';

jest.mock('react-redux');

function renderComponent() {
  return render(<App />);
}

describe('<App />', () => {
  it('display empty tasks', () => {
    useSelector.mockImplementation((selector) => selector({
      tasks: [],
    }));

    const { container } = renderComponent();
    expect(container).toHaveTextContent('할 일이 없어요!');
  });

  it('display tasks', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      tasks: Tasks,
    }));

    const { getAllByRole } = renderComponent();

    const tasks = getAllByRole('listitem');
    expect(tasks).toHaveLength(Tasks.length);
    tasks.forEach((task, taskIndex) => {
      expect(task.firstChild.nodeValue).toBe(Tasks[taskIndex].title);
    });
  });

  it('input task', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '',
      tasks: [],
    }));

    const { getByRole } = renderComponent();

    const newTaskTitle = 'some task';
    const taskInput = getByRole('textbox');
    fireEvent.change(taskInput, { target: { value: newTaskTitle } });
    expect(dispatch).toBeCalledWith(updateTaskTitle(newTaskTitle));
  });

  it('add task', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      taskId: 0,
      taskTitle: 'some task',
      tasks: [],
    }));

    const { getByRole } = renderComponent();

    const addTaskButton = getByRole('button', { name: '추가' });
    fireEvent.click(addTaskButton);
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith(addTask());
  });

  it('confirm added task', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      tasks: Tasks,
    }));

    const { getAllByRole } = renderComponent();

    const confirmButtons = getAllByRole('button', { name: '완료' });
    expect(confirmButtons).toHaveLength(Tasks.length);

    confirmButtons.forEach((button) => {
      fireEvent.click(button);
    });
    expect(dispatch).toBeCalledTimes(confirmButtons.length);
  });
});
