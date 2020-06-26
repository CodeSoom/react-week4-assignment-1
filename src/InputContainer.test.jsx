import React from 'react';

import { render } from '@testing-library/react';

import InputContainer from './InputContainer';

describe('InputContainer', () => {
  it('초기화면 로딩', () => {
    const { container } = render((
      <InputContainer />
    ));

    expect(container).toHaveTextContent(/할 일/);
  });
});
