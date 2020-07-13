import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

import TASKS from './__fixtures__/tasks.json';

jest.mock('./__mocks__/react-redux');

function renderComponent() {
  return render(<ListContainer />);
}

describe('<ListContainer />', () => {
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
  });

  context('with tasks', () => {
    beforeEach(() => {
      tasks = TASKS;
    });

    it('renders tasks', () => {
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

    it('renders “완료” button to delete a task', () => {
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
