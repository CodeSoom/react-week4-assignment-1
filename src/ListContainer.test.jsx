import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

const dispatch = jest.fn();

beforeEach(() => {
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무 것도 하지 않기 #1' },
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ],
  }));
});

describe('ListContainer', () => {
  it('should call dispatch when clicked', () => {
    const { getByText, getAllByText } = render(<ListContainer />);

    expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
    expect(getByText(/아무 것도 하지 않기 #2/)).not.toBeNull();

    const deleteButtons = getAllByText(/완료/);

    fireEvent.click(deleteButtons[0]);

    expect(dispatch).toBeCalledWith(
      { type: 'deleteTask', payload: { id: 1 } },
    );
  });
});
