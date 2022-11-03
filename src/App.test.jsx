import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import tasks from '../fixtures/tasks';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({ tasks }));

  it('App을 렌더링한다.', () => {
    const { getByText } = render((<App />));

    expect(getByText('추가')).not.toBeNull();
  });
});
