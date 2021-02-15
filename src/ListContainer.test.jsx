import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer에서', () => {
  context('할 일 목록이 없을 때', () => {
    it('할 일이 없다는 것을 보여준다.', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [],
      }));

      const { getByText } = render(<ListContainer />);

      expect(getByText('할 일이 없어요!')).toBeInTheDocument();
    });
  });

  context('할 일 목록이 있을 때', () => {
    it('할 일을 보여준다.', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [
          { id: 100, title: '밥 먹기' },
          { id: 101, title: '누워있기' },
        ],
      }));

      const { getByText } = render(<ListContainer />);

      expect(getByText('밥 먹기')).toBeInTheDocument();
      expect(getByText('밥 먹기')).toBeInTheDocument();
    });
  });

  it('완료버튼을 클릭하면 dispatch가 실행된다.', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => (dispatch));
    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 100, title: '밥 먹기' },
      ],
    }));

    const { getByText } = render(<ListContainer />);

    fireEvent.click(getByText('완료'));

    expect(dispatch).toBeCalled();
  });
});
