import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import ListContainer from './ListContainer';

jest.mock('react-redux');

function stubSelector(tasks) {
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));
}

describe('ListContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  context('tasks가 비어있을 경우', () => {
    it('공백 메세지가 출력된다', () => {
      stubSelector([]);

      const { getByText } = render(<ListContainer />);

      expect(getByText('할 일이 없어요!')).toBeDefined();
    });
  });

  context('tasks가 있을 경우', () => {
    it('개수만큼 Item이 노출된다', () => {
      const expectValue1 = '아무 것도 하지 않기 #1';
      const expectValue2 = '아무 것도 하지 않기 #2';

      stubSelector([
        { id: 1, title: expectValue1 },
        { id: 2, title: expectValue2 },
      ]);

      const { getAllByRole } = render(<ListContainer />);

      const result = getAllByRole('listitem');
      expect(result).toHaveLength(2);
      expect(result[0]).toHaveTextContent(expectValue1);
      expect(result[1]).toHaveTextContent(expectValue2);
    });

    it('Item에 완료버튼이 노출된다', () => {
      const expectValue = '완료';
      stubSelector([
        { id: 1, title: 'test' },
      ]);

      const { getAllByRole } = render(<ListContainer />);

      const result = getAllByRole('listitem');
      expect(result).toHaveLength(1);
      expect(result[0]).toHaveTextContent(expectValue);
    });
  });
});
