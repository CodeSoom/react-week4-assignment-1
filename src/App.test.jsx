import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  context('When a user first launches the to-do app', () => {
    it('shows "To-do" ', () => {
      const { container } = render(<App />);
      expect(container).toHaveTextContent('To-do');
    });

    it('shows "할 일"', () => {
      const { container } = render(<App />);
      expect(container).toHaveTextContent('할 일');
    });

    it('shows "추가"', () => {
      const { container } = render(<App />);
      expect(container).toHaveTextContent('추가');
    });

    it('shows "할 일이 없어요!"', () => {
      const { container } = render(<App />);
      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });

  context('When a user enters a task called "바뀐다"', () => {
    it('shows "바뀐다" in the input', () => {
      const { getByLabelText } = render(<App />);

      fireEvent.change(getByLabelText('할 일'), {
        target: {
          value: '바뀐다',
        },
      });

      expect(getByLabelText('할 일').value).toBe('바뀐다');

    });
  });

  context('when a user add a task called "할 일4"', () => {
    it('appends a new task into tasks', () => {});
  });

  context(
    'when a user click the "완료" button for a task called "할 일2"',
    () => {
      it('does not show "할 일2"', () => {});
    },
  );
});
