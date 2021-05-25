import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('renders tasks', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector(
      {
        taskTitle: '',
        tasks: [{ id: 1, title: 'codesoom' }],
      },
    ));
    const { getByText } = render(<App />);
    expect(getByText('codesoom')).toBeInTheDocument();
  });
});
