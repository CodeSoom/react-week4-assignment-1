import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const task = {
    id: 1,
    title: '뭐라도 하기',
  };

  const handleClick = jest.fn();

  const setup = () => render(
    <Item
      task={task}
      onClickDelete={handleClick}
    />,
  );

  it('renders tasks & button', () => {
    const { container } = setup();

    expect(container).toHaveTextContent('뭐라도 하기');

    expect(container).toHaveTextContent('완료');
  });

  it('renders button to listen to click event', () => {
    const { getByText } = setup();

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByText('완료'));

    expect(handleClick).toBeCalledWith(1);
  });
});
