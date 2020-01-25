import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./NavBar";

describe("NavBar Component", () => {
  test("should render without crashing", () => {
    render(<NavBar />);
  });
});
