import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from '../../container/ListContainer';

jest.mock('react-redux');

describe('<ListContainer />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({}));
  });

  function renderListContainer(tasks) {
    useSelector.mockImplementation((selector) => selector({ tasks }));

    return render(
      <ListContainer />,
    );
  }

  context('with tasks', () => {
    const tasks = [
      { id: 1, title: '아무 것도 하지 않기 #1' },
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ];

    it('renders tasks', () => {
      const { getByText } = renderListContainer(tasks);

      tasks.forEach((task) => expect(getByText(task.title)).toBeInTheDocument());
    });

    it('calls dispatch with "todos/deleteTask" action when click "완료" button', () => {
      const { getAllByRole } = renderListContainer(tasks);

      expect(dispatch).not.toBeCalled();

      tasks.forEach((_, index) => {
        fireEvent.click(getAllByRole('button', { name: '완료' })[index]);

        expect(dispatch).toBeCalledWith({
          type: 'todos/deleteTask',
          payload: { id: tasks[index].id },
        });
      });
    });
  });

  context('without tasks', () => {
    const tasks = [];

    it('renders no task message', () => {
      const { getByText } = renderListContainer(tasks);

      expect(getByText(/할 일이 없어요/)).toBeInTheDocument();
    });
  });
});
