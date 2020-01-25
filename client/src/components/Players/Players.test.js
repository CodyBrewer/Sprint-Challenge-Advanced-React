import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Players from "./Players";

describe("Players Component", () => {
  test("should render without crashing", () => {
    render(<Players />);
  });
  test("should display the Player Chart Component", () => {
    const { getByTestId } = render(<Players />);
    expect(getByTestId("players-chart")).toBeInTheDocument();
  });
  // Not sure how to get the these values by text. Doing a bad and grabbing them by testId.
  xtest("Players label should be in the document", () => {
    const { queryByText } = render(<Players />);
    expect(queryByText(/Players/i)).toBeInTheDocument();
  });

  xtest("Searches label should be in the document", () => {
    const { queryByText } = render(<Players />);
    expect(queryByText(/Searches/i)).toBeInTheDocument();
  });
  // yeah really not sure how to test recharts.
  test("Should display Player label", () => {
    const { getByTestId } = render(<Players />);
    expect(getByTestId("players")).toBeInTheDocument();
  });
  test("Should display searches label", () => {
    const { getByTestId } = render(<Players />);
    expect(getByTestId("searches")).toBeInTheDocument();
  });
});
