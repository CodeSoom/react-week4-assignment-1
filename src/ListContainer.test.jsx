import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import ListContainer from './ListContainer';

jest.mock('react-redux');
function mockImplementation(tasks = []) {
  useSelector.mockImplementation((selector) => selector({ tasks }));
}

describe('ListContainer에서', () => {
  const dispatch = jest.fn();

  context('할 일 목록이 없을 때', () => {
    it('할 일이 없다는 것을 보여준다.', () => {
      mockImplementation();

      const { getByText } = render(<ListContainer />);

      expect(getByText('할 일이 없어요!')).toBeInTheDocument();
    });
  });

  context('할 일 목록이 있을 때', () => {
    it('할 일을 보여준다.', () => {
      mockImplementation([
        { id: 100, title: '밥 먹기' },
        { id: 101, title: '누워있기' },
      ]);

      const { queryByText } = render(<ListContainer />);

      expect(queryByText('밥 먹기')).toBeInTheDocument();
      expect(queryByText('누워있기')).toBeInTheDocument();
    });
  });

  it('완료버튼을 클릭하면 완료한 것을 제거하는 함수가 실행된다.', () => {
    useDispatch.mockImplementation(() => (dispatch));

    mockImplementation([{ id: 100, title: '밥 먹기' }]);

    const { getByText } = render(<ListContainer />);

    fireEvent.click(getByText('완료'));

    expect(dispatch).toBeCalled();
  });
});
