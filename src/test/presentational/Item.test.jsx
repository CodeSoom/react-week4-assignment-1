import { render, fireEvent } from '@testing-library/react';

import Item from '../../presentational/Item';

describe('Item', () => {
  const handleClick = jest.fn();

  const task = {
    id: 1,
    title: '뭐라도 하기',
  };

  function renderItem() {
    return render(
      <Item
        task={task}
        onClickDeleteTask={handleClick}
      />,
    );
  }

  it('renders task', () => {
    const { getByText, getByRole } = renderItem();

    expect(getByText('뭐라도 하기')).toBeInTheDocument();
    expect(getByRole('button', { name: '완료' })).toBeInTheDocument();
  });

  it('listens click event when click "완료" button', () => {
    const { getByRole } = renderItem();

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByRole('button', { name: '완료' }));

    expect(handleClick).toBeCalledWith(1);
  });
});
