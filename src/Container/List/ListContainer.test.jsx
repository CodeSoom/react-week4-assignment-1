import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('renders tasks of redux state', () => {
    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 1, title: '아무것도 하지 않기 #1' },
        { id: 2, title: '아무것도 하지 않기 #2' },
      ],
    }));

    const { getByText } = render((
      <ListContainer />
    ));

    expect(getByText(/아무것도 하지 않기 #1/)).not.toBeNull();
    expect(getByText(/아무것도 하지 않기 #2/)).not.toBeNull();
  });

  it('calls deleteTask action when complete button is clicked', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 1, title: '아무것도 하지 않기 #1' },
        { id: 2, title: '아무것도 하지 않기 #2' },
      ],
    }));

    const { getAllByText } = render((
      <ListContainer />
    ));

    const buttons = getAllByText('완료');

    fireEvent.click(buttons[0]);

    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: { id: 1 },
    });
  });
});
