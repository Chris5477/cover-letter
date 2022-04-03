import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Error from "../pages/Error";

describe("Testing Error page", () => {
	test("Should render Error component", () => {
		render(<Error />);

		const error = document.querySelector(".error");
		expect(error).toBeInTheDocument();
	});
});
