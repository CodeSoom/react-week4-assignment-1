import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

import tasks from '../fixtures/tasks';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({ tasks }));

  it('ListContainer를 렌더링한다.', () => {
    const { getByText } = render(<ListContainer />);

    expect(getByText('리덕스 공부하기')).not.toBeNull();
  });

  it('할 일을 삭제하면 해당 할 일이 삭제된다.', () => {
    const { getAllByText } = render(<ListContainer />);

    fireEvent.click(getAllByText('완료')[0]);

    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: {
        id: 1,
      },
    });
  });
});
