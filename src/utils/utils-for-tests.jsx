import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import reducer from '../reducer';

export default function renderWithProviders(
  ui,
  {
    // Automatically create a store instance if no store was passed in
    store = createStore(reducer),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
