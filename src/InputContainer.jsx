import React from 'react';

import Input from './Input';

export default function InputContainer({ value, onChange, onClick }) {
  return <Input value={value} onChange={onChange} onClick={onClick} />;
}
