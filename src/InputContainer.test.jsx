import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New task',
  }));

  const { getByText } = render((
    <InputContainer />
  ));

  expect(getByText(/추가/)).not.toBeNull();
});
