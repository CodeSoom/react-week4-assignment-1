import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';
import { deleteTask } from './actions';

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

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders tasks', () => {
    const { getByText } = render((
      <ListContainer />
    ));

    expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
    expect(getByText(/아무 것도 하지 않기 #2/)).not.toBeNull();
  });

  it('deletes the task', () => {
    const { getAllByText } = render((
      <ListContainer />
    ));

    fireEvent.click(getAllByText(/완료/)[0]);

    // TODO: 에러 해결
    // 아래 코드에서 나는 에러,
    // TypeError: onClickDelete is not a function ????
    // ...
    // expect(jest.fn()).toBeCalledWith(...expected)
    // Expected: {"payload": {"id": 1}, "type": "deleteTask"}
    // Number of calls: 0

    expect(dispatch).toBeCalledWith(deleteTask(1));
  });
});
