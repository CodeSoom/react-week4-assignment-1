import React from 'react';

import { render } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('show input field', () => {
    const { getByLabelText } = render((
      <InputContainer />
    ));

    expect(getByLabelText(/할 일/)).not.toBeNull();
  });
});
