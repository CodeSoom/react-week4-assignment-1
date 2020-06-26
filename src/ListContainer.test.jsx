import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';
import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  describe('when tasks', () => {
    context('with exist tasks', () => {
      it('renders tasks', () => {
        const tasks = [
          {
            id: 1,
            title: '너의 첫번째 임무다! #1',
          }, {
            id: 2,
            title: '너의 첫번째 임무다! #2',
          },
        ];

        useSelector.mockImplementation((selector) => selector({
          newId: 1,
          tasks,
        }));

        const { getByText, getAllByText } = render((
          <ListContainer />
        ));

        expect(getAllByText(/완료/)).toHaveLength(2);
        expect(getByText(/1/)).not.toBeNull();
        expect(getByText(/너의 첫번째 임무다! #1/)).not.toBeNull();
      });

      it('event called when \'완료\' button click', () => {
        const dispatch = jest.fn();
        const tasks = [
          {
            id: 1,
            title: '너의 첫번째 임무다! #1',
          },
        ];

        useDispatch.mockImplementation(() => dispatch);

        useSelector.mockImplementation((selector) => selector({
          newId: 1,
          tasks,
        }));

        const { getByText } = render((
          <ListContainer />
        ));

        expect(dispatch).not.toBeCalled();

        fireEvent.click(getByText(/완료/));

        expect(dispatch).toBeCalled();
      });
    });

    context('with empty tasks', () => {
      it('returns empty message', () => {
        useSelector.mockImplementation((selector) => selector({
          newId: 1,
          tasks: [],
        }));

        const { getByText } = render((
          <ListContainer />
        ));

        expect(getByText(/할 일이 없어요!/)).not.toBeNull();
      });
    });
  });

  describe('when taskTitle', () => {
    context('with exist taskTitle', () => {
      it('append task in Tasks', () => {
        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        useSelector.mockImplementation((selector) => selector({
          newId: 1,
          taskTitle: '와우',
          tasks: [],
        }));

        const { getByText, getByDisplayValue } = render((
          <InputContainer />
        ));

        expect(getByDisplayValue(/와우/)).not.toBeNull();

        fireEvent.click(getByText(/추가/));

        expect(dispatch).toBeCalled();
      });

      it('changed taskTitle', () => {
        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        useSelector.mockImplementation((selector) => selector({
          newId: 1,
          taskTitle: '',
          tasks: [],
        }));

        const { getByLabelText } = render((
          <InputContainer />
        ));

        fireEvent.change(getByLabelText('할 일'), {
          target: { value: '무언가 하기' },
        });

        expect(dispatch).toBeCalled();
      });
    });

    context('with blank taskTitle', () => {
      it('doesnt work', () => {
        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        useSelector.mockImplementation((selector) => selector({
          newId: 1,
          taskTitle: '',
          tasks: [],
        }));

        const { getByText, queryByDisplayValue } = render((
          <InputContainer />
        ));

        expect(queryByDisplayValue(/와우/)).toBeNull();

        fireEvent.click(getByText(/추가/));

        expect(queryByDisplayValue(/와우/)).toBeNull();
        expect(dispatch).toBeCalled();
      });
    });
  });
});
