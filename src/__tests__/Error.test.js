import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Error from "../pages/Error";

describe("Testing Error page", () => {
	test("Should render Error compoenent", () => {
		render(
			<BrowserRouter>
				<Error />
			</BrowserRouter>
		);
		const error = document.querySelector(".error");
		expect(error).toBeInTheDocument();
	});
});
