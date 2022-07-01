import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './actions';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  context('with tasks', () => {
    it('renders tasks', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [
          { id: 1, title: '아무 것도 하지 않기 #1' },
          { id: 2, title: '아무 것도 하지 않기 #2' },
        ],
      }));

      const { getByText } = render((
        <ListContainer />
      ));

      expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
      expect(getByText(/아무 것도 하지 않기 #2/)).not.toBeNull();
    });
  });

  context('without tasks', () => {
    it('renders no task message', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [],
      }));

      const { getByText } = render((
        <ListContainer />
      ));

      expect(getByText(/할 일이 없어요/)).not.toBeNull();
    });
  });

  context('button click', () => {
    it('delete task', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        tasks: [
          { id: 1, title: '아무 것도 하지 않기 #1' },
        ],
      }));

      const { getByText } = render((
        <ListContainer />
      ));

      fireEvent.click(getByText('완료'));

      expect(dispatch).toBeCalledWith(deleteTask(1));
    });
  });
});
