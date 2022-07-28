import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
    tasks: [],
  }));

  function customRender() {
    return render((
      <App />
    ));
  }

  it('renders the subject', () => {
    const { queryByText } = customRender();

    expect(queryByText(/To-do/)).not.toBeNull();
  });

  it('renders a input', () => {
    const { queryByRole } = customRender();

    expect(queryByRole('textbox')).not.toBeNull();
  });

  it('redners 추가 button', () => {
    const { queryByText } = customRender();

    expect(queryByText(/추가/)).not.toBeNull();
  });
});
