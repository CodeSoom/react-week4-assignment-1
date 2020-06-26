import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

import tasks from '../__fixture__/data';

import { deleteTask } from './action';

jest.mock('react-redux');

const initState = {
  tasks: [],
};

function mockUseSelector(state = initState) {
  useSelector.mockImplementation((selector) => selector({
    tasks: state.tasks,
  }));
}

function renderListContainer() {
  return render(<ListContainer />);
}

describe('<ListContainer />', () => {
  describe('Initial rendering', () => {
    context('When tasks are empty', () => {
      it('shows "할 일이 없어요!"', () => {
        mockUseSelector();

        const { container } = renderListContainer();

        expect(container).toHaveTextContent('할 일이 없어요!');
      });
    });

    context('When tasks are not empty', () => {
      it('shows tasks', () => {
        useSelector.mockImplementation((selector) => selector({
          ...initState,
          tasks,
        }));

        const { container } = renderListContainer();

        expect(container).toHaveTextContent(/할 일1/i);
        expect(container).toHaveTextContent(/할 일2/i);
        expect(container).toHaveTextContent(/할 일3/i);
      });
    });
  });

  describe('User interaction', () => {
    context(
      'when a user click the "완료" button for a task called "할 일2"',
      () => {
        it('occurs a deleteTask action', () => {
          mockUseSelector({
            ...initState,
            tasks,
          });

          const dispatch = jest.fn();

          useDispatch.mockImplementation(() => dispatch);

          const { getByText } = renderListContainer();

          fireEvent.click(getByText(/할 일2/i).lastChild);

          expect(dispatch).toHaveBeenCalledWith(deleteTask(2));

          expect(dispatch).toHaveBeenCalledTimes(1);
        });
      },
    );
  });
});
