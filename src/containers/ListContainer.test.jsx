import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/actions';
import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const tasks = [
    { id: 1, title: '안녕하세요 반가워요' },
  ];

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    taskTitle: '',
    tasks,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with Tasks', () => {
    it('List 배열 텍스트 출력', () => {
      const { getByText } = render(<ListContainer />);

      expect(getByText(/안녕하세요 반가워요/)).not.toBeNull();
    });

    it('clicks delete button', () => {
      const { queryAllByText } = render(<ListContainer />);

      fireEvent.click(queryAllByText('완료')[0]);

      expect(dispatch).toBeCalledWith(deleteTask({ id: 1 }));
    });
  });

  context('without Tasks', () => {
    it('List 초기 빈배열 텍스트 출력', () => {
      useSelector.mockImplementation((selector) => selector({
        newId: 100,
        taskTitle: '',
        tasks: [],
      }));

      const { container } = render(<ListContainer />);

      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });
});
