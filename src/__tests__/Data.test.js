import { fireEvent,screen, render } from "@testing-library/react";
import Data from "../components/Data";
import "@testing-library/jest-dom";

describe("Testing Data component", () => {
    beforeEach(() => render(<Data state method />));
    
	test("Should fill input and textarea with input user", () => {
        const input = document.querySelector("input");
		fireEvent.change(input, { target: { value: "HTML" } });
		expect(input.value).toBe("HTML");
        
		const textarea = document.querySelector("textarea");
		fireEvent.change(textarea, { target: { value: "Concevoir des maquettes" } });
		expect(textarea.value).toBe("Concevoir des maquettes");
	});
    
	test("Should display an alert if the inputs are empty", () => {
      //
    });
});
