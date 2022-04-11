import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('renders task title', () => {
    useSelector.mockImplementation(() => ({
      taskTitle: 'New Task!',
    }));

    const { getByDisplayValue } = render((
      <InputContainer />
    ));

    expect(getByDisplayValue('New Task!')).not.toBeNull();
  });
});
