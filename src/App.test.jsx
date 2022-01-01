import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation(() => ({ tasks: [] }));

  it('할 일이 없는 상태로 초기 랜더링을 하면 비어있는 메세지를 보여줍니다.', () => {
    useSelector.mockImplementation(() => ({ tasks: [] }));
    const sut = render(<App />);

    expect(sut.queryByText('할 일이 없어요!')).not.toBeNull();
  });

  it('할 일을 입력한 후 "추가" 버튼을 클릭하면 dispatch가 { payload: { title } }과 함께 호출됩니다.', () => {
    const taskTitle = 'foo';
    const mock = jest.fn();
    useSelector.mockImplementation(() => ({ tasks: [] }));
    useDispatch.mockImplementation(() => mock);
    const sut = render(<App />);

    fireEvent.change(sut.getByLabelText('할 일'), { target: { value: taskTitle } });
    fireEvent.click(sut.getByRole('button', { name: '추가' }));

    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith(expect.objectContaining({ payload: { title: taskTitle } }));
  });

  it('할 일이 있는 상태에서 "완료" 버튼을 클릭하면 dispatch가 { payload: { id } }와 함께 호출됩니다.', () => {
    const id = 0;
    const mock = jest.fn();
    useSelector.mockImplementation(() => ({ tasks: [{ id, title: 'foo' }] }));
    useDispatch.mockImplementation(() => mock);
    const sut = render(<App />);
    fireEvent.click(sut.getByRole('button', { name: '완료' }));

    expect(mock).toBeCalledTimes(1);
    expect(mock).toHaveBeenLastCalledWith(expect.objectContaining({ payload: { id } }));
  });
});
