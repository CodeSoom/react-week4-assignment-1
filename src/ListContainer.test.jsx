import { render } from "@testing-library/react";
import { useSelector } from "react-redux";

import ListContainer from "./ListContainer";

jest.mock("react-redux");

test("ListContainer", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      tasks: [
        { id: 1, title: "운동하기" },
        { id: 2, title: "꿀잠자기" },
      ],
    }),
  );

  const { getByText } = render(<ListContainer />);

  expect(getByText(/꿀잠자기/)).not.toBeNull();
});
