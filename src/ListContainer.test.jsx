import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

import Tasks from './__fixtures__/tasks.json';

jest.mock('./__mocks__/react-redux');

function renderComponent() {
  return render(<ListContainer />);
}

describe('<ListContainer />', () => {
  context('without tasks', () => {
    it('display empty tasks', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [],
      }));

      const { container } = renderComponent();
      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });

  context('with tasks', () => {
    it('renders tasks', () => {
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

    it('renders “완료” button to delete a task', () => {
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
});
