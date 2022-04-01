import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

import "@testing-library/jest-dom";

describe("Testing App Component", () => {
	beforeEach(() => render(<App />));

	test("Should render App component", () => {
		const divApp = document.querySelector(".App");
		expect(divApp).toBeInTheDocument();
	});

	test("Should render Header component", () => {
		const header = document.querySelector("header");
		expect(header).toBeInTheDocument();
	});
});
