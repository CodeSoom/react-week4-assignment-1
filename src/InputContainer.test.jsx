import React from "react";

import { render, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";

import InputContainer from './InputContainer';

jest.mock("react-redux");

function mockSelector({ tasks }) {
  useSelector.mockImplementation((selector) => selector({
    newId: 1,
    tasks
  }));
}

describe("InputContainer", () => {

  describe('addTask', () => {
    context('with taskTitle', () => {
      it ('append task in Tasks', () => {
        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        mockSelector({
          taskTitle: '와우',
          tasks
        });

        const { getByText } = render((
          <InputContainer/>
        ));

        expect(getByText(/와우/)).toBeNull();

        fireEvent.click(getByText(/추가/));

        expect(dispatch).toBeCalled();
      });
    });

    context('without taskTitle', () => {
      it ('doesnt work', () => {
        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        mockSelector({
          taskTitle: '',
          tasks
        });

        const { getByText } = render((
          <InputContainer/>
        ));

        expect(getByText(/와우/)).toBeNull();

        fireEvent.click(getByText(/추가/));

        expect(getByText(/와우/)).toBeNull();
        expect(dispatch).toBeCalled();
      })
    })
  });
});
