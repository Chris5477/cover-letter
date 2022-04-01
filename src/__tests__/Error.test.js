import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Error from "../pages/Error";

describe("Testing Error page", () => {
	test("Should render Error page if url is unknown", () => {
		render(<Error />);
		const div = document.querySelector(".error");
		expect(div).toBeInTheDocument();
	});
});
