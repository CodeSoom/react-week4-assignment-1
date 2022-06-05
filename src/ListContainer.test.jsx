import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '코드숨 과제하기1' },
      { id: 2, title: '코드숨 과제하기2' },
    ],
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/코드숨 과제하기2/)).not.toBeNull();
});
