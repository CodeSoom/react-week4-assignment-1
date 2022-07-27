import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
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
    taskTitle: 'new title',
    tasks,
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  function customRender() {
    return render((
      <App />
    ));
  }

  it('renders to do list', () => {
    const { queryByText } = customRender();

    expect(queryByText(/아무 것도 하지 않기/)).not.toBeNull();
    expect(queryByText(/그래도 뭐라도 하기/)).not.toBeNull();
  });

  it('removes completed todo item', () => {
    const { getAllByText } = customRender();
    fireEvent.click(getAllByText(/완료/)[0]);

    expect(dispatch).toBeCalledWith({ type: 'deleteTask', payload: { id: 1 } });
  });

  it('adds todo item', () => {
    const { getByText } = customRender();
    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });

  it('changes title', () => {
    const { getByLabelText } = customRender();
    fireEvent.change(getByLabelText(/할 일/), { target: { value: 'a' } });

    expect(dispatch).toBeCalledWith({ type: 'updateTaskTitle', payload: { taskTitle: 'a' } });
  });
});
