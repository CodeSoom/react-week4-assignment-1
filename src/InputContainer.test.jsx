import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('<InputContainer />', () => {
  it('renders tasks', () => {
    useSelector.mockImplementation((selector) => selector({ taskTitle: 'New Title' }));

    const { getByText } = render((
      <InputContainer />
    ));

    expect(getByText(/New Title/)).not.toBeNull();
  });
});
