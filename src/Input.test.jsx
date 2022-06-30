import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const renderInput = () => render((
    <Input
      value="기존 할 일"
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  it('value를 렌더링한다', () => {
    const { getByDisplayValue } = renderInput();

    expect(getByDisplayValue('기존 할 일')).not.toBeNull();
  });

  it('change 이벤트를 listen한다', () => {
    const { getByLabelText } = renderInput();

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: '무언가 하기' },
    });

    expect(handleChange).toBeCalled();
  });

  it('click 이벤트를 listen한다', () => {
    const { getByText } = renderInput();

    fireEvent.click(getByText('추가'));

    expect(handleClick).toBeCalled();
  });
});
