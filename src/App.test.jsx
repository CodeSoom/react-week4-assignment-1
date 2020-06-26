import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import App from './App';
import reducer from './reducer';

jest.mock('react-redux');

describe('App', () => {
  it('task를 추가할 수 있는 버튼이 있다.', () => {
    const { getByText } = render(<App />);

    expect(getByText(/추가/)).not.toBeNull();
  });

  it('기존에 등록되어있는 task가 있다.', () => {
    useSelector.mockImplementation((selector) =>
      selector({
        tasks: [
          { id: 1, title: 'Task-1' },
          { id: 2, title: 'Task-2' },
        ],
      }),
    );
    const { getByText } = render(<App />);

    expect(getByText('Task-1')).not.toBeNull();
    expect(getByText('Task-2')).not.toBeNull();
  });

  it("task가 없을 경우 '할 일이 없어요' 텍스트가 노출된다.", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        tasks: [],
      }),
    );
    const { getByText } = render(<App />);
    expect(getByText('할 일이 없어요!')).not.toBeNull();
  });

  it('추가 버튼을 클릭하면 task를 추가 한다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        taskTitle: 'new Title',
        tasks: [],
      }),
    );
    const { getByText } = render(<App />);

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: 'ADD_TASK',
    });
  });
  it('taskTitle을 변경한다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        taskTitle: '',
        tasks: [],
      }),
    );
    const { getByPlaceholderText } = render(<App />);

    expect(getByPlaceholderText('할 일을 입력해 주세요')).not.toBeNull();

    fireEvent.change(getByPlaceholderText('할 일을 입력해 주세요'), {
      target: { value: 'new task' },
    });

    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: 'CHANGE_TITLE',
      payload: {
        title: 'new task',
      },
    });
  });
});
