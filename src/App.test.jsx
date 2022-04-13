import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import reducer from './reducer';

jest.mock('react-redux');

const dispatch = jest.fn();

const renderApp = () => render((
  <App />
));

afterEach(() => {
  jest.clearAllMocks();
});

describe('App', () => {
  const initialState = {
    newId: 100,
    taskTitle: '',
    tasks: [],
  };

  beforeEach(() => {
    useSelector.mockImplementation(() => initialState);
  });

  useDispatch.mockImplementation(() => dispatch);

  context('without the task', () => {
    it('renders 할 일이 없어요!', () => {
      const { queryByText } = renderApp();

      expect(queryByText('할 일이 없어요!')).not.toBeNull();
    });
  });

  it('returns task list', () => {
    const { getByPlaceholderText, getByText } = renderApp();

    fireEvent.change(
      getByPlaceholderText('할 일을 입력해 주세요'),
      { target: { value: 'App 통합 테스트 하기' } },
    );

    fireEvent.click(getByText('추가'));

    const state = dispatch.mock.calls.reduce((accState, [curDispatch]) => (
      reducer(accState, curDispatch)
    ), initialState);

    expect(state).toMatchObject({
      newId: 101,
      taskTitle: '',
      tasks: [{
        id: 100,
        title: 'App 통합 테스트 하기',
      }],
    });
  });
});

// TODO: 통합 테스트 코드 작성
// CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
