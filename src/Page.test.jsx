import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

jest.mock('react-redux');

test('Page', () => {
  const dispatch = jest.fn();

  const tasks = [
    { id: 1, title: 'Task-1' },
    { id: 2, title: 'Task-2' },
  ];

  // ListContainer가 화면에 재대로 출력되는지 테스트하기 때문에 필요
  useSelector.mockImplementation((selector) => selector({ tasks }));
  useDispatch.mockImplementation(() => dispatch);

  const { getByText } = render((
    <Page />
  ));

  expect(getByText(/Task-1/)).not.toBeNull();
  expect(getByText(/Task-2/)).not.toBeNull();

  fireEvent.click(getByText('추가'));
});
