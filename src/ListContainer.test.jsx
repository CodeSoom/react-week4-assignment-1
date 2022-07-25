import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './actions';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무 것도 하지 않기 #1' },
    ],
  }));
  useDispatch.mockImplementation(() => dispatch);

  function renderElement() {
    return render((
      <ListContainer />
    ));
  }

  context('with tasks', () => {
    it('renders tasks', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [
          { id: 1, title: '아무 것도 하지 않기 #1' },
          { id: 2, title: '아무 것도 하지 않기 #2' },
        ],
      }));

      const { getByText } = renderElement();

      expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
      expect(getByText(/아무 것도 하지 않기 #2/)).not.toBeNull();
    });
  });

  context('without tasks', () => {
    it('renders no task message', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [],
      }));

      const { getByText } = renderElement();

      expect(getByText(/할 일이 없어요/)).not.toBeNull();
    });
  });

  context('button click', () => {
    it('delete task', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [
          { id: 1, title: '아무 것도 하지 않기 #1' },
        ],
      }));

      const { getByText } = renderElement();

      fireEvent.click(getByText('완료'));

      expect(dispatch).toBeCalledWith(deleteTask(1));
    });
  });
});
