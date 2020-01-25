import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./NavBar";

describe("NavBar Component", () => {
  test("should render without crashing", () => {
    render(<NavBar />);
  });
  test("should have the toggle button for dark mode", () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId("dark-mode-toggle")).toBeInTheDocument();
  });
});
