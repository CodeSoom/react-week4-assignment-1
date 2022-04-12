import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Page from './Page';

jest.mock('react-redux');

describe('Page', () => {
  const tasks = [
    {
      id: 1,
      title: '배고파요',
    },
    {
      id: 2,
      title: '치킨을 먹어요',
    },
    {
      id: 3,
      title: '피자를 먹어요',
    },
  ];

  const taskTitle = 'hello';
  const handleChangeTitle = jest.fn();
  const handleClickAddTask = jest.fn();

  function renderPage() {
    return render((
      <Page
        taskTitle={taskTitle}
        onChangeTitle={handleChangeTitle}
        onClickAddTask={handleClickAddTask}
      />
    ));
  }

  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      newId: 100,
      taskTitle: '',
      tasks,
    }));
    jest.clearAllMocks();
  });

  it('1. To-do 출력', () => {
    const { container } = renderPage();

    expect(container).toHaveTextContent('To-do');
  });

  context('2. 할일 있을 때', () => {
    it('2-1. 할일 리스트 출력', () => {
      const { container } = renderPage();

      expect(container).toHaveTextContent('배고파요');
      expect(container).toHaveTextContent('치킨을 먹어요');
      expect(container).toHaveTextContent('피자를 먹어요');
    });

    it("2-2. '완료' 버튼 출력", () => {
      const { container } = renderPage();

      expect(container).toHaveTextContent('완료');
    });
  });
});
