import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () => render(
    <Input
      value="기존 할 일"
      onChange={handleChange}
      onClick={handleClick}
    />,
  );

  it('render', () => {
    const { getByLabelText, getByRole } = renderComponent();

    expect(getByLabelText(/할 일/)).toBeInTheDocument();
    expect(getByRole('button', { name: /추가/ })).toBeInTheDocument();
  });

  it('Input value, calls handleChange', () => {
    const { getByLabelText } = renderComponent();

    fireEvent.change(getByLabelText(/할 일/), { target: { value: 'New Task' } });

    expect(handleChange).toBeCalled();
  });

  it('Click "추가" button, calls handleClick', () => {
    const { getByRole } = renderComponent();

    fireEvent.click(getByRole('button', { name: /추가/ }));

    expect(handleClick).toBeCalled();
  });
});
