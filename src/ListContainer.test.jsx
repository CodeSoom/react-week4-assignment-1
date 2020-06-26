import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {

  context('tasks가 있을 경우,', () => {
    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 1, title: 'Task-1' },
        { id: 2, title: 'Task-2' },
      ],
    }));

    it('기존에 등록되어있는 task가 있다.', () => {
      const { getByText } = render(<ListContainer />);

      expect(getByText('Task-1')).not.toBeNull();
      expect(getByText('Task-2')).not.toBeNull();
    });

    it("'완료'버튼 2개가 있다.", () => {
      const { getAllByText } = render(<ListContainer />);

      expect(getAllByText('완료')).toHaveLength(2);
    });

    it("'완료' 버튼을 클릭하면 task가 사라진다.", () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      const { getAllByText } = render(<ListContainer />);

      fireEvent.click(getAllByText('완료')[0]);

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('tasks가 없을 경우, ', () => {
    it("'할 일이 없어요!' 텍스트가 보인다.", () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [],
      }));

      const { getByText } = render(<ListContainer />);

      expect(getByText('할 일이 없어요!')).not.toBeNull();
    });
  });
});
