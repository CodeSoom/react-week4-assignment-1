import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const tasks = [
    {
      id: 1,
      title: '아무 것도 하지 않기',
    },
    {
      id: 2,
      title: '그래도 뭐라도 하기',
    },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  function customRender() {
    return render((
      <ListContainer />
    ));
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders to do list', () => {
    const { queryByText } = customRender();

    expect(queryByText(/아무 것도 하지 않기/)).not.toBeNull();
    expect(queryByText(/그래도 뭐라도 하기/)).not.toBeNull();
  });

  it('listens for click event on deleteTask', () => {
    const { getAllByText } = customRender();

    fireEvent.click(getAllByText(/완료/)[0]);

    expect(dispatch).toBeCalledWith({ type: 'deleteTask', payload: { id: 1 } });
  });
});
