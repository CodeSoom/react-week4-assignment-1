import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const { queryByDisplayValue, getByLabelText, getByText } = render((
    <Input
      value="기존 할 일"
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  expect(queryByDisplayValue('기존 할 일')).not.toBeNull();

  fireEvent.change(getByLabelText('할 일'), {
    target: { value: '무언가 하기' },
  });

  expect(handleChange).toBeCalled();

  fireEvent.click(getByText('추가'));

  expect(handleClick).toBeCalled();
});
