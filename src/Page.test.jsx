import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import Page from './Page';

jest.mock('react-redux');

describe('Page', () => {
  context('when tasks is empty', () => {
    it('renders <Input> & 할 일이 없어요', () => {
      // page를 위한 샘플 데이터를 작성.
      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
        tasks: [],
      }));
      const { container } = render(<Page />);

      expect(container).toHaveTextContent(/할 일/);
      expect(container).toHaveTextContent(/추가/);
      expect(container).not.toHaveTextContent(/완료/);
      expect(container).toHaveTextContent(/할 일이 없어요/);
    });
  });
  context('when tasks is not empty', () => {
    it('renders <Input> & <Item>s', () => {
      // page를 위한 샘플 데이터를 작성.
      useSelector.mockImplementation((selector) => selector({
        taskTitle: 'New Task',
        tasks: [
          { id: 1, title: 'Task-1' },
          { id: 2, title: 'Task-2' },
        ],
      }));
      const { container, getByText } = render(<Page />);

      expect(container).toHaveTextContent(/할 일/);
      expect(container).toHaveTextContent(/추가/);
      expect(container).toHaveTextContent(/완료/);
      expect(getByText(/Task-1/)).not.toBeNull();
      expect(getByText(/Task-2/)).not.toBeNull();
    });
  });
});
