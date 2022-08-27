import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const setup = (text = '') => render(
    <Input
      value={text}
      onChange={handleChange}
      onClick={handleClick}
    />,
  );

  const text = '코드숨 리액트 11기 화이팅!';

  it('renders input & button', () => {
    const { getByDisplayValue, getByText } = setup(text);

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(text)).toHaveAttribute('type', 'text');
  });

  it('renders input to listen to change event', () => {
    const { getByLabelText } = setup();

    expect(handleChange).not.toBeCalled();

    fireEvent.change(getByLabelText(/할 일/), { target: { value: text } });

    expect(handleChange).toBeCalled();
  });

  it('renders add button to listen to click event', () => {
    const { getByText } = setup();

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByText(/추가/));

    expect(handleClick).toBeCalled();
  });
});
