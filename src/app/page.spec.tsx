import { render, screen } from "@testing-library/react";

import Home from "./page";

describe("RootLayout", () => {
  it("should create a root layout", () => {
    render(<Home />);

    expect(
      screen.getByText("Docs", { selector: "h2", exact: false })
    ).toBeDefined();
    expect(
      screen.getByText("Learn", { selector: "h2", exact: false })
    ).toBeDefined();
    expect(
      screen.getByText("Templates", { selector: "h2", exact: false })
    ).toBeDefined();
    expect(
      screen.getByText("Deploy", { selector: "h2", exact: false })
    ).toBeDefined();
  });
});
