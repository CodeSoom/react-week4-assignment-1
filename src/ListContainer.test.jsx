import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

const dispatch = jest.fn();

beforeEach(() => {
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무 것도 하지 않기 #1' },
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ],
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
    it('renders tasks', () => {
      const { queryByText } = renderListContainer();

      expect(queryByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
      expect(queryByText(/아무 것도 하지 않기 #2/)).not.toBeNull();
    });
  });
});
