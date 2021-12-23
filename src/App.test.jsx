import { fireEvent, render } from "@testing-library/react";
import App from "./App";

import { useDispatch, useSelector } from "react-redux";
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

import { changeTodo, addTodo, deleteTodo } from "./actions";

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useSelector.mockImplementation((selector) =>
      selector({
        tasks: [{ id: 101, title: "4주차 1과제하기" }],
        taskTitle: "",
      })
    );
    useDispatch.mockImplementation(() => dispatch);
  });
  const dispatch = jest.fn();

  //통합테스트
  it("show me tasks in store", () => {
    //given
    const { getByText } = render(<App />);

    //then
    expect(getByText(/추가/)).not.toBeNull();
    expect(getByText(/4주차 1과제하기/)).not.toBeNull();
  });

  describe("function call", () => {
    it("input change function called", () => {
      const { getByLabelText } = render(<App />);

      fireEvent.change(getByLabelText(/할 일/), {
        target: { value: "4과제 input 변경" },
      });

      expect(dispatch).toBeCalledWith(changeTodo("4과제 input 변경"));
    });

    it("task add function called", () => {
      const { getByRole } = render(<App />);

      fireEvent.click(getByRole("button", { name: "추가" }));

      expect(dispatch).toBeCalledWith(addTodo());
    });

    it("task delete called", () => {
      const { getByRole } = render(<App />);

      fireEvent.click(getByRole("button", { name: "완료" }));

      expect(dispatch).toBeCalledWith(deleteTodo(101));
    });
  });

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
