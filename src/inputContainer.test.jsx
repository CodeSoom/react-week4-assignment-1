import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispathch = jest.fn();

  useDispatch.mockImplementation(() => dispathch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: '할일!',
  }));

  const renderInputContainer = () => render((
    <InputContainer />
  ));

  it('InputContainer-button 을 렌더링한다', () => {
    const { getByText } = renderInputContainer();

    expect(getByText(/추가/)).not.toBeNull();
  });

  it('inputContainer-label 을 렌더링한다', () => {
    const { getByDisplayValue } = renderInputContainer();

    expect(getByDisplayValue(/할일/)).not.toBeNull();
  });

  it('click 이벤트를 listen한다', () => {
    const { getByLabelText } = renderInputContainer();

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: '무언가 하기' },
    });

    expect(dispathch).toBeCalled();
  });

  it('click 이벤트를 listen한다', () => {
    const { getByText } = renderInputContainer();

    fireEvent.click(getByText(/추가/));

    expect(dispathch).toBeCalledWith({
      type: 'addTask',
    });
  });
});
