import { render, fireEvent } from '@testing-library/react';

import Input from '../../presentational/Input';

describe('<Input />', () => {
  const onChange = jest.fn();

  const onClick = jest.fn();

  function renderInput(value) {
    return render(
      <Input
        value={value}
        onChange={onChange}
        onClick={onClick}
      />,
    );
  }

  it('renders label, input, button', () => {
    const { getByLabelText, getByRole } = renderInput();

    expect(getByLabelText('할 일')).toBeInTheDocument();
    expect(getByRole('button', { name: '추가' })).toBeInTheDocument();
  });

  it('calls onChange when change value', () => {
    const { getByLabelText } = renderInput();

    const input = getByLabelText('할 일');

    fireEvent.change(input, { target: { value: '뭐라도 하기' } });

    expect(onChange).toBeCalled();
  });

  it('calls onClick when click button', () => {
    const { getByRole } = renderInput();

    expect(getByRole('button', { name: '추가' })).toBeInTheDocument();

    fireEvent.click(getByRole('button', { name: '추가' }));

    expect(onClick).toBeCalled();
  });
});
