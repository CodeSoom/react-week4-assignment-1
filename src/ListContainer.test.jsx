import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('deleteTask', () => {
  it(' 할일을 보여준다. ', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => (dispatch));

    const tasks = [
      { id: 1, title: '뭐라도 하기 #1' },
      { id: 2, title: '뭐라도 하기 #2' },
    ];

    useSelector.mockImplementation((selector) => selector({
      tasks,
    }));

    const { getByText } = render((
      <ListContainer />
    ));

    expect(getByText(/뭐라도 하기 #1/)).not.toBeNull();
  });

  // it(' 할일을 삭제한다. ', () => {
  //   const dispatch = jest.fn();
  //   useDispatch.mockImplementationOnce(() => dispatch);
  //   useSelector.mockImplementation((selector) => selector({ 
  //     tasks: [{ id: 1, taskTitle: '할일' }],
  //   }));

  //   const { getByText } = render(<ListContainer />);

  //   fireEvent.click(getByText('완료'));

  //   expect(dispatch).toBeCalled();
  // });
});
