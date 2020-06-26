import React from 'react';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

describe('ListContainer', () => {
  it('초기화면 로딩', () => {
    const { container } = render((
      <ListContainer />
    ));

    expect(container).toHaveTextContent(/할 일이 없어요/);
  });
});
