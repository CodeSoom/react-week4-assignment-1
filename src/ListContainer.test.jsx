import React from "react";

import { render, fireEvent } from "@testing-library/react";

import { useSelector, useDispatcher } from "react-redux";

import ListContainer from "./ListContainer";

jest.mock("react-redux");

describe("ListContainer", () => {

  context("with tasks", () => {
    it("exist task in tasks", () => {

      useSelector().mockImplementation((selector) => selector({
        newId: 1,
        tasks: [
          {
            id: 1,
            title: "너의 첫번째 임무다! #1"
          }, {
            id: 2,
            title: "너의 첫번째 임무다! #2"
          }
        ]
      }));

      const { getByText } = render((
        <ListContainer/>
      ));

      expect(getByText(/1/)).not.toBeNull();
      expect(getByText(/너의 첫번째 임무다! #1/)).not.toBeNull();
      expect(getByText(/추가/)).not.toBeNull();
    });

    it("event called when '추가' button click", () => {
      const dispatch = jest.fn();

      useDispatcher().mockImplementation(() => dispatch);

      useSelector().mockImplementation((selector) => selector({
        tasks: [
          {
            id: 1,
            title: "너의 첫번째 임무다! #1"
          }
        ]
      }));

      const { getByText } = render((
        <ListContainer/>
      ));

      expect(dispatch).not.toBeCalled();

      fireEvent.click(getByText(/추가/));

      expect(dispatch).toBeCalled();
    });
  });

  context("without tasks", () => {
    it("not exist task", () => {

      useSelector().mockImplementation((selector) => selector({
        tasks: []
      }));

      const { getByText } = render((
        <ListContainer/>
      ));

      expect(getByText(/너의 첫번째 임무다! #1/)).toBeNull();
      expect(getByText(/추가/)).toBeNull();
    });
  });
});
