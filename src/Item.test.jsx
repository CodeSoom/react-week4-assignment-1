import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClick = jest.fn();

  const renderItem = (task = { id: '', title: '' }) => render((
    <Item
      task={task}
      onClickDelete={handleClick}
    />
  ));

  it('완료 버튼이 있는지 확인합니다.', () => {
    const { container } = renderItem();

    expect(container).toHaveTextContent('완료');
  });

  it('완료 버튼을 클릭하면 클릭 함수가 호출됩니다.', () => {
    const { getByText } = renderItem();
    const buttonDone = getByText('완료');

    expect(handleClick).not.toBeCalled();
    fireEvent.click(buttonDone);
    expect(handleClick).toBeCalled();
  })

  context('task가 주어졌을 때,', () => {
    const task = {
      id: 1,
      title: '뭐라도 하기',
    };

    it('주어진 task가 출력됩니다.', () => {
      const { container } = renderItem(task);

      expect(container).toHaveTextContent(task.title);
    });
  });
});