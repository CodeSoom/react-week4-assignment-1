import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import tasks from '../fixtures/tasks';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks,
  }));

  it('App 컴포넌트 랜더링이 된다', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByText(/넷플릭스 보기/)).not.toBeNull();
  });
});
