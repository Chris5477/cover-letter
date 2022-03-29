import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Working from "../components/Working";

describe("Testing Working component", () => {
	test("Should render the component on desktop", () => {
		render(<Working />);
		global.innerWidth > 1024;
		const divWorking = document.querySelector(".working");
		expect(divWorking).toBeInTheDocument();
	});
});
