import { render, queryByRole, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

const renderListContainer = () => render((
  <ListContainer />
));

const dispatch = jest.fn();

beforeEach(() => {
  useSelector.mockImplementation(() => ({
    tasks: [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ],
  }));

  useDispatch.mockImplementation(() => dispatch);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('ListContainer', () => {
  context('with tasks', () => {
    it('renders tasks', () => {
      const { queryByText } = renderListContainer();

      expect(queryByText(/Task-1/)).not.toBeNull();
      expect(queryByText(/Task-2/)).not.toBeNull();
    });

    it('renders button each task', () => {
      const { getByText } = renderListContainer();

      expect(queryByRole(getByText(/Task-1/), 'button')).toHaveTextContent('완료');
      expect(queryByRole(getByText(/Task-2/), 'button')).toHaveTextContent('완료');
    });
  });

  context('without the task', () => {
    beforeEach(() => {
      useSelector.mockImplementationOnce(() => ({
        tasks: [],
      }));
    });

    it('renders "할 일이 없어요!"', () => {
      const { container } = renderListContainer();

      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });

  it('listens for click event on delete task', () => {
    const { getByText } = renderListContainer();

    expect(dispatch).not.toBeCalled();

    fireEvent.click(queryByRole(getByText(/Task-1/), 'button'));

    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: {
        id: 1,
      },
    });
  });
});
