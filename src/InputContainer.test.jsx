import React from "react";

import { render, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";

import InputContainer from './InputContainer';

jest.mock("react-redux");

describe("InputContainer", () => {

  describe('addTask', () => {
    context('with taskTitle', () => {
      it ('append task in Tasks', () => {
        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        useSelector.mockImplementation((selector) => selector({
          newId: 1,
          taskTitle: '와우',
          tasks: [],
        }));

        const { getByText, getByDisplayValue } = render((
          <InputContainer/>
        ));

        expect(getByDisplayValue(/와우/)).not.toBeNull();

        fireEvent.click(getByText(/추가/));

        expect(dispatch).toBeCalled();
      });
    });

    context('without taskTitle', () => {
      it ('doesnt work', () => {
        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        useSelector.mockImplementation((selector) => selector({
          newId: 1,
          taskTitle: '',
          tasks: [],
        }));

        const { getByText, queryByDisplayValue} = render((
          <InputContainer/>
        ));

        expect(queryByDisplayValue(/와우/)).toBeNull();

        fireEvent.click(getByText(/추가/));

        expect(queryByDisplayValue(/와우/)).toBeNull();
        expect(dispatch).toBeCalled();
      })
    })
  });
});
