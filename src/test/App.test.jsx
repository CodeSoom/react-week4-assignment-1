import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from '../App';

jest.mock('react-redux');

test('App', () => {
  const tasks = [
    { id: 1, title: '아무 것도 하지 않기 #1' },
    { id: 2, title: '아무 것도 하지 않기 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({ tasks }));

  const {
    getByText,
    getByRole, getAllByRole,
    getByLabelText,
  } = render((
    <App />
  ));

  expect(getByRole('heading', { name: 'To-do' })).toBeInTheDocument();

  // 프로젝트가 커진다면 이 부분은 이렇게 전부 테스트를 할 수가 없을 것 같은데 빼는게 맞을까?
  expect(getByLabelText('할 일')).toBeInTheDocument();
  expect(getByRole('button', { name: '추가' })).toBeInTheDocument();

  tasks.forEach((task, index) => {
    expect(getByText(task.title)).toBeInTheDocument();
    expect(getAllByRole('button', { name: '완료' })[index]).toBeInTheDocument();
  });
});
