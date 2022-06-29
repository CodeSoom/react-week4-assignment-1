import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImlementation(() => dispatch);

  useSelector.mockImlementation((selector) => selector({
    tasks: [
      { id: 1, title: '숨쉬기' },
      { id: 2, title: '이발' },
    ],
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderList() {
    return render((
      <ListContainer />
    ));
  }

  context('리스트가 렌더링될 때', () => {
    it('tasks에 있는 title이 보여집니다.', () => {
      const { getByText } = renderList();

      expect(getByText(/숨쉬기/)).not.toBeNull();
      expect(getByText(/이발/)).not.toBeNull();
    });
  });

  context('완료 버튼을 누를 때', () => {
    it('dispatch가 deleteTask 액션과 함께 호출됩니다.', () => {
      const { getAllByText } = renderList();

      const buttons = getAllByText('완료');

      fireEvent.click(buttons[0]);

      expect(dispatch).toBeCalledWith({
        payload: {
          id: 1,
        },
        type: 'deleteTask',
      });
    });
  });
});
