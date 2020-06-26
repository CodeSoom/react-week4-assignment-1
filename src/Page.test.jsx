import React from "react";

import { render } from "@testing-library/react";

import { useSelector } from "react-redux";

import Page from "./Page";

jest.mock('react-redux');
test('Page', () => {

  useSelector.mockImplementation((selector) => selector({
    newId: 1,
    taskTitle: '',
    tasks: [],
  }));

  const { getByText } = render((
    <Page/>
  ));

});
