import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import App from './App';
import { mockComponent } from 'react-dom/test-utils';

describe('App', () => {
  context('with initial state', () => {
    const initialState = ({
      tasks: [
        { id: 101, title: 'TASK-01' },
      ],
    });

    useSelector.mockImplementation((selector) => selector(initialState));

    it('renders elements correctly', () => {
      const { getByText, getByLabelText } = render((
        <App />
      ));

      expect(getByText(/TASK-01/)).not.toBeNull();
      expect(getByText(/추가/)).not.toBeNull();
      expect(getByLabelText(/할 일/)).not.toBeNull();
    });
  });

  context('when user change task title', () => {
    const newTitle = 'New Task';
    it('input has the title', () => {
      const { getByLabelText } = render(<App />);
      const input = getByLabelText(/할 일/);

      expect(input).not.toHaveValue(newTitle);

      fireEvent.change(input, { target: { value: newTitle } });

      expect(input).toHaveValue(newTitle);
    });
  });

  context('when user click addButton', () => {
    it('added task appears on the screen', () => {
      const newTitle = 'New Task';
      const { getByText, getByLabelText, queryByText } = render(<App />);
      const input = getByLabelText(/할 일/);
      const addButton = getByText(/추가/);

      fireEvent.change(input, { target: { value: newTitle } });

      expect(queryByText(newTitle)).toBeNull();
      expect(queryByText(/완료/)).toBeNull();

      fireEvent.click(addButton);

      expect(queryByText(newTitle)).not.toBeNull();
      expect(queryByText(/완료/)).not.toBeNull();
    });
  });

  context('when user click deleteButton', () => {
    it('deleted task disappears out of screen', () => {
      const taskTitle = 'TASK-01';
      const { queryByText, getByText, getByLabelText } = render(<App />);
      const input = getByLabelText(/할 일/);
      const addButton = getByText(/추가/);

      fireEvent.change(input, { target: { value: taskTitle } });
      fireEvent.click(addButton);

      expect(queryByText(taskTitle)).not.toBeNull();

      fireEvent.click(getByText(/완료/));

      expect(queryByText(taskTitle)).toBeNull();
    });
  });
});
