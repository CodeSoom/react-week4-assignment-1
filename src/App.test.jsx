import { render } from "@testing-library/react";
import App from "./App";

import { useSelector } from "react-redux";
jest.mock("react-redux");

describe("App", () => {
  context("useSelector works well", () => {
    it("show me tasks in store", () => {
      //given
      const tasks = [
        { id: 100, title: "4주차 인강보기" },
        { id: 101, title: "4주차 1과제하기" },
      ];
      useSelector.mockImplementation((selector) => selector({ tasks }));
      const { getByText } = render(<App />);

      //then
      expect(getByText(/추가/)).not.toBeNull();
      expect(getByText(/4주차 인강보기/)).not.toBeNull();
      expect(getByText(/4주차 1과제하기/)).not.toBeNull();
    });
  });

  context("useSelector has error", () => {
    it("show me '할 일이 없어요", () => {
      const tasks = [];
      useSelector.mockImplementation((selector) => selector({ tasks }));
      const { getByText } = render(<App />);

      expect(getByText(/추가/)).not.toBeNull();
      expect(getByText(/할 일이/)).not.toBeNull();
    });

    // TODO: 통합 테스트 코드 작성
    // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
  });
});
