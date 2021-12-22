import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

describe('ListContainer', () => {
  it('render', () => {
    const { getByText } = render(<ListContainer />);
    expect(getByText('할 일')).not.toBeNull();
  });
});
