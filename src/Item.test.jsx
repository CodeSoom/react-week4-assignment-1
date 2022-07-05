import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const task = {
    id: 1,
    title: '뭐라도 하기',
  };

  const handleClick = jest.fn();

  const renderItem = () => render((
    <Item
      task={task}
      onClickDelete={handleClick}
    />
  ));

  it('item-title 을 렌더링한다', () => {
    const { container } = renderItem();

    expect(container).toHaveTextContent('뭐라도 하기');
  });

  it('item-button 을 렌더링한다', () => {
    const { container } = renderItem();

    expect(container).toHaveTextContent('완료');
  });

  it('click 이벤트를 listen 한다', () => {
    const { container, getByText } = renderItem();

    fireEvent.click(getByText('완료'));

    expect(handleClick).toBeCalledWith(1); expect(container).toHaveTextContent('뭐라도 하기');
  });
});
