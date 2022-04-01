import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Working from "../components/Application/Working";
import { act } from "react-dom/test-utils";

describe("Testing Working component", () => {
	test("Should render the component on desktop", () => {
		render(<Working />);
		global.innerWidth >= 1024;
		const divWorking = document.querySelector(".working");
		expect(divWorking).toBeInTheDocument();
	});

	test.skip("Should not render Working component on the desktop version", () => {
		// Voir CYPRESS
	});
});
