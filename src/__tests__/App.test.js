import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import Data from "../components/Data";
import "@testing-library/jest-dom";

describe("Testing App Component", () => {
	beforeEach(() => render(<App />));

	test("Should render App component", () => {
		const divApp = document.querySelector(".App");
		expect(divApp).toBeInTheDocument();
	});

	test("Should show header in web page", () => {
		const header = document.querySelector("header");
		expect(header).toBeInTheDocument();
	});

	describe("Testing the various buttons and the display", () => {
		test("Should show error message if inputs are empty", () => {
			document.querySelector("input").value = "";
			document.querySelector("textarea").value = "";
			const btnCreate = document.querySelector(".create-data");
			fireEvent.click(btnCreate);
			const message = screen.getAllByText("Veuillez remplir tous les champs du formulaire !");
			expect(message).toBeTruthy();
		});

		describe("Testing create-btn", () => {
			beforeEach(() => {
				render(<Data state method message setMessage />);
				const input = document.querySelector("input");
				fireEvent.change(input, { target: { value: "HTML" } });
				const textarea = document.querySelector("textarea");
				fireEvent.change(textarea, { target: { value: "Concevoir des maquettes" } });
				const btnCreate = document.querySelector(".create-data");
				fireEvent.click(btnCreate);
			});

			test("Should show success message if inputs are not empty", () => {
				const message = screen.getAllByText("Carte créée avec succès.");
				expect(message).toBeTruthy();
			});

			test("Should display a new card in the viewport", () => {
				const card = document.querySelector(".card");
				const title = screen.getAllByText("HTML");
				expect(card).toBeInTheDocument();
				expect(title).toBeTruthy();
			});

			test("Should delete card on button click", () => {
				const card = document.querySelector(".card");
				const btnRemove = document.querySelector(".btn-remove");
				fireEvent.click(btnRemove);
				expect(card).not.toBeInTheDocument();
			});

			test("Should show tooltip with hover cursor on card and not show with leave cursor on card", () => {
				const card = document.querySelector(".card");
				fireEvent.mouseEnter(card);
				const tooltip = document.querySelector(".tooltip");
				expect(tooltip).toBeInTheDocument();
				fireEvent.mouseLeave(card);
				expect(tooltip).not.toBeInTheDocument();
			});

			test("Should paste description card in the cover letter", () => {
				const card = document.querySelector(".card");
				fireEvent.click(card);
				const letter = document.querySelector(".contentLetter");
				expect(letter.value).toBe("Concevoir des maquettes");
			});
		});

		describe("Testing save-btn", () => {
			afterEach(() => localStorage.clear());
			test("Should save the data and show a success message", () => {
				const btnSave = document.querySelector(".save-data");
				fireEvent.click(btnSave);
				const message = screen.getAllByText("Les données sont enregistrées.");
				expect(message).toBeTruthy();
			});

			test("Should get data from localStorage", () => {
				render(<Data state method message setMessage />);
				const input = document.querySelector("input");
				fireEvent.change(input, { target: { value: "HTML" } });
				const textarea = document.querySelector("textarea");
				fireEvent.change(textarea, { target: { value: "Concevoir des maquettes" } });
				const createBtn = document.querySelector(".create-data");
				fireEvent.click(createBtn);
				const btnSave = document.querySelector(".save-data");
				fireEvent.click(btnSave);
				const data = localStorage.getItem("Cards");
				expect(data).not.toBeNull();
			});
		});
		test.skip("Should copy content cover letter and show success message", () => {
			// const copyBtn = document.querySelector(".copy-btn");
			// fireEvent.click(copyBtn);
			// const message = screen.getAllByText("Les données sont enregistrées.");
			// expect(message).toBeTruthy();
		});
	});
});
