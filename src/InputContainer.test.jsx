import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    taskTitle: '',
    tasks: [],
  }));

  const { getByPlaceholderText } = render((
    <InputContainer />
  ));

  expect(getByPlaceholderText(/할 일을 입력해 주세요/)).toBeInTheDocument();
});
