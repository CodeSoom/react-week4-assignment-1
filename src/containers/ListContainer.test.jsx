import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무 것도 하지 않기 #1' },
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ],
  }));

  const renderListContainer = () => render(<ListContainer />);

  context('with tasks', () => {
    it('render task', () => {
      const { container } = renderListContainer();

      expect(container).toHaveTextContent('아무 것도 하지 않기 #1');
      expect(container).toHaveTextContent('완료');
    });

    it("clicks '완료' button", () => {
      const { getAllByText } = renderListContainer();

      fireEvent.click(getAllByText('완료')[0]);
      expect(dispatch).toBeCalledWith({
        type: 'deleteTaskTitle',
        payload: { id: 1 },
      });
    });
  });
});
