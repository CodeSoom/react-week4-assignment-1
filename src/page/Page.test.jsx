import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import Page from './Page';

function mockSelector(tasks) {
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));
}

describe('Page', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  context('tasks에 값이 있는 경우', () => {
    it('해당 값들이 노출된다', () => {
      mockSelector([{ id: 1, title: 'Task-1' }, { id: 2, title: 'Task-2' }]);

      const { getByText } = render((
        <Page />
      ));

      expect(getByText(/Task-1/)).not.toBeNull();
      expect(getByText(/Task-2/)).not.toBeNull();
    });
  });
});
