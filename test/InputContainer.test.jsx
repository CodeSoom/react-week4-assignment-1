import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import InputContainer from '../src/InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  const renderComponent = () => render(<InputContainer />);

  it('렌더링 된다.', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'New Title',
    }));

    const { getByRole } = renderComponent();

    expect(getByRole('textbox', { name: /할 일/ })).not.toBeNull();
  });

  it('할 일을 추가시, 할 일이 추가된다.', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'New Title',
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { getByRole } = renderComponent();

    fireEvent.click(getByRole('button', { name: /추가/ }));
    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });
});
