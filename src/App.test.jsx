import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('초기 화면에는 추가 버튼만 존재한다', () => {
    useSelector.mockImplementation((selector) => selector({
      tasks: [],
    }));

    const { getByText } = render((
      <App />
    ));

    expect(getByText(/추가/)).not.toBeNull();
  });

  it('task가 추가되면 목록에 나열된다', () => {
    const expectValue1 = '아무 것도 하지 않기 #1';
    const expectValue2 = '아무 것도 하지 않기 #2';

    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 1, title: expectValue1 },
        { id: 2, title: expectValue2 },
      ],
    }));

    const { getAllByRole } = render((
      <App />
    ));

    const result = getAllByRole('listitem');
    expect(result).toHaveLength(2);
    expect(result[0]).toHaveTextContent(expectValue1);
    expect(result[1]).toHaveTextContent(expectValue2);
  });
});
