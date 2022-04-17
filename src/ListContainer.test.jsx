import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given2 from 'given2';

import ListContainer from './ListContainer';

jest.mock('react-redux');

const dispatch = jest.fn();

beforeEach(() => {
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    tasks: given2.tasks,
  }));
});

afterEach(() => {
  jest.clearAllMocks();
});

const renderListContainer = () => render((
  <ListContainer />
));

describe('ListContainer', () => {
  context('with tasks', () => {
    given2('tasks', () => [
      { id: 1, title: '아무 것도 하지 않기 #1' },
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ]);

    it('renders tasks', () => {
      const { queryByText } = renderListContainer();

      expect(queryByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
      expect(queryByText(/아무 것도 하지 않기 #2/)).not.toBeNull();
    });

    it('deletes task from tasks', () => {
      const { getAllByText } = renderListContainer();

      fireEvent.click(getAllByText(/완료/)[0]);
      expect(dispatch).toBeCalledWith({
        type: 'deleteTask',
        payload: {
          id: 1,
        },
      });
    });
  });

  context('without tasks', () => {
    given2('tasks', () => []);

    it('renders `할 일이 없어요!`', () => {
      const { container } = renderListContainer();

      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });
});
