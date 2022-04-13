import {
  render, fireEvent,
} from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function rederInput() {
    return render((
      <Input
        value=""
        onChange={handleChange}
        onClick={handleClick}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders input element', () => {
    const { container } = rederInput();
    expect(container).toBeInTheDocument();
  });

  it('should be able to change in input', () => {
    const { getByRole } = rederInput();
    fireEvent.change(getByRole('textbox'), { target: { value: '코딩을 즐기기' } });
    expect(handleChange).toBeCalled();
  });

  it('has 할 일 text.', () => {
    const { container } = rederInput();
    expect(container).toHaveTextContent('할 일');
  });
});
