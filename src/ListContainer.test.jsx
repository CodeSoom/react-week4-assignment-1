import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

function renderListContainer() {
  return render((
    <ListContainer />
  ));
}

describe('ListContainer', () => {
  const dispatch = jest.fn();

  const tasks = [
    { id: 1, title: '아무 것도 하지 않기 #1' },
    { id: 2, title: '아무 것도 하지 않기 #2' },
  ];

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders task', () => {
    const { queryByText } = renderListContainer();

    expect(queryByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
  });

  it('clicks done button', () => {
    const { getAllByText } = renderListContainer();

    fireEvent.click(getAllByText(/완료/)[0]);

    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: {
        id: 1,
      },
    });
  });
});
