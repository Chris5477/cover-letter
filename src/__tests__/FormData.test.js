import { fireEvent, render, screen } from "@testing-library/react";
import FormData from "../components/FormData";
import "@testing-library/jest-dom";

describe("Testing FormData component", () => {
	test("Should render input and textarea element with an existant value", () => {
		render(<FormData valueName={"test-name"} valueDescription={"description-test"} />);
		const input = document.querySelector("input").value;
		expect(input).toBe("test-name");
		const textarea = document.querySelector("textarea").value;
		expect(textarea).toBe("description-test");
	});
});
