import { render } from '@testing-library/react';
import Input from './Input';

it('renders input control', () => {
  const { getByPlaceholderText } = render(<Input />);
  expect(getByPlaceholderText('할 일을 입력해 주세요')).toBeInTheDocument();
});

it('renders 추가 button', () => {
  const { getByRole } = render(<Input />);
  expect(getByRole('button', { name: '추가' })).toBeInTheDocument();
});
