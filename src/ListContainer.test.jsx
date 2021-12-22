import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  const state = {
    tasks: [{
      id: 100,
      title: '숨 쉬기',
    }],
  };
  useSelector.mockImplementation((selector) => selector(state));

  it('render Container', () => {
    const { getByText } = render(<ListContainer />);

    expect(getByText('완료')).not.toBeNull();
    expect(getByText('숨 쉬기')).not.toBeNull();
  });

  it('완료 버튼이 작동한다.', () => {
    const { getByText } = render(<ListContainer />);
    fireEvent.click(getByText('완료'));

    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: {
        id: 100,
      },
    });
  });
});
