import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

jest.mock('react-redux');

describe('ListContainer', () => {
  context('without any tasks', () => {
    it("doesn't anything", () => {

    });
  });

  context('with tasks', () => {
    it('give tasks List component', () => {
      const testTasks = [
        { id: 1, title: 'Distribute new version' },
        { id: 2, title: 'Fix errors' },
      ];

      useSelector.mockImplementation((selector) => selector({
        tasks: testTasks,
      }));

      const { getByText } = render((
        <ListContainer />
      ));

      expect(getByText(testTasks[0])).not.toBeNull();
    });
  });
});
