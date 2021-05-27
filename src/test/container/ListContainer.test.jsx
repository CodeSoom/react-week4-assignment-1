import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from '../../container/ListContainer';

jest.mock('react-redux');

describe('<ListContainer />', () => {
  function renderListContainer() {
    return render(
      <ListContainer />,
    );
  }

  context('with tasks', () => {
    it('renders tasks', () => {
      const tasks = [
        { id: 1, title: '아무 것도 하지 않기 #1' },
        { id: 2, title: '아무 것도 하지 않기 #2' },
      ];

      useSelector.mockImplementation((selector) => selector({ tasks }));

      const { getByText } = renderListContainer();

      tasks.forEach((task) => expect(getByText(task.title)).toBeInTheDocument());
    });
  });

  context('without tasks', () => {
    it('renders no task message', () => {
      const tasks = [];

      useSelector.mockImplementation((selector) => selector({ tasks }));

      const { getByText } = renderListContainer();

      expect(getByText(/할 일이 없어요/)).toBeInTheDocument();
    });
  });
});
