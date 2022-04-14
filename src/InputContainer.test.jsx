import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  function renderInput() {
    return render((
      <InputContainer />
    ));
  }

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  it('입력값 변경', () => {
    const { getByLabelText, getByDisplayValue } = renderInput();

    expect(getByDisplayValue('New Title')).not.toBeNull();

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: '무언가 하기' },
    });

    expect(dispatch).toBeCalled();
  });

  it('추가 버튼 클릭', () => {
    const { getByText, getByDisplayValue } = renderInput();

    expect(getByText(/추가/)).not.toBeNull();

    expect(getByDisplayValue(/New Title/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });
});
