import { render } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

describe("Testing App Component", () => {
	beforeEach(() => render(<App />));

	test("Should render App component", () => {
		const divApp = document.querySelector(".App");
		expect(divApp).toBeInTheDocument();
	});

  test("Should display header in web page", () => {
    const header = document.querySelector("header")

    expect(header).toBeInTheDocument()
  })
});
