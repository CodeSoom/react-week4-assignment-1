import { render } from "@testing-library/react";
import { useSelector } from "react-redux";

import App from "./App";

test("App", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      tasks: [
        { id: 1, title: "운동하기" },
        { id: 2, title: "꿀잠자기" },
      ],
    }),
  );

  const { getByText } = render(<App />);

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/꿀잠자기/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
