import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  context('with tasks', () => {
    useSelector.mockImplementationOnce(() => ({
      tasks: [
        { id: 1, title: 'Task-1' },
        { id: 2, title: 'Task-2' },
      ],
    }));

    it('renders tasks', () => {
      const { getByText } = render((
        <ListContainer />
      ));

      expect(getByText(/Task-1/)).not.toBeNull();
      expect(getByText(/Task-2/)).not.toBeNull();
    });
  });

  context('without the task', () => {
    useSelector.mockImplementationOnce(() => ({
      tasks: [],
    }));

    it('renders "할 일이 없어요!"', () => {
      const { container } = render((
        <ListContainer />
      ));

      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });
});
