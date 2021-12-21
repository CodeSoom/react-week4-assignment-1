import { render } from "@testing-library/react";
import App from "./App";

import { useSelector } from "react-redux";
jest.mock("react-redux");

describe("App", () => {
  it("Check if the useSelector works well", () => {
    const tasks = [
      { id: 100, title: "4주차 인강보기" },
      { id: 101, title: "4주차 1과제하기" },
    ];
    useSelector.mockImplementation((selector) => selector({ tasks }));
    const { getByText } = render(<App />);

    expect(getByText(/추가/)).not.toBeNull();
    expect(getByText(/4주차 인강보기/)).not.toBeNull();
    expect(getByText(/4주차 1과제하기/)).not.toBeNull();

    // TODO: 통합 테스트 코드 작성
    // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
  });
});
