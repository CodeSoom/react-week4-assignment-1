import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

import tasks from '../__fixture__/data';

jest.mock('react-redux');

describe('<ListContainer />', () => {
  describe('Initial rendering', () => {
    context('When tasks are empty', () => {
      it('shows "할 일이 없어요!"', () => {
        useSelector.mockImplementation((selector) => selector({
          tasks: [],
        }));

        const { container } = render(<ListContainer />);

        expect(container).toHaveTextContent('할 일이 없어요!');
      });
    });

    context('When tasks are not empty', () => {
      it('shows tasks', () => {
        useSelector.mockImplementation((selector) => selector({
          tasks,
        }));

        const { container } = render(<ListContainer />);

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
          useSelector.mockImplementation((selector) => selector({
            tasks,
          }));

          const dispatch = jest.fn();

          useDispatch.mockImplementation(() => dispatch);

          const { getByText } = render(<ListContainer />);

          fireEvent.click(getByText(/할 일2/i).lastChild);

          expect(dispatch).toHaveBeenCalledWith(deleteTask(2));

          expect(dispatch).toHaveBeenCalledTimes(1);
        });
      },
    );
  });
});
