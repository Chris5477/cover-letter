import "@testing-library/jest-dom";
import { findByText, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Application from "../pages/Application";
import { store } from "../__mocks__/mockStore";

describe("Testing Application page", () => {
	beforeEach(() =>
		render(
			<Provider store={store}>
				<Application />
			</Provider>
		)
	);

	test("Should render Application Component", () => {
		const application = document.querySelector(".application");
		expect(application).toBeInTheDocument();
	});

	describe("Testing Modal component", () => {
		let showBtn;
		beforeEach(() => {
			showBtn = screen.getByText("Afficher");
			fireEvent.click(showBtn);
		});
		test("Should render Modal component", () => {
			const modal = document.querySelector(".modal");
			expect(modal).toBeInTheDocument();
		});

		test("Should close the modal on the click of button", () => {
			const modal = document.querySelector(".modal");
			const closeBtn = document.querySelector(".close-modal");
			fireEvent.click(closeBtn);
			expect(modal).not.toBeInTheDocument();
		});
	});

	describe("Testing FormData component", () => {
		let input, textarea;
		beforeEach(() => {
			input = document.getElementById("name");
			textarea = document.getElementById("description");
		});

		test("Should show error message if submitted data is empty", async () => {
			const createBtn = document.querySelector(".create-data");
			fireEvent.click(createBtn);
			await screen.findByText("Veuillez remplir tous les champs du formulaire !");
			const msg = screen.getAllByText("Veuillez remplir tous les champs du formulaire !");
			expect(msg).toBeTruthy();
		});

		test("Should show success message if data is filled", async () => {
			fireEvent.change(input, { target: { value: "HTML" } });
			fireEvent.change(textarea, { target: { value: "TEST HTML" } });
			const createBtn = document.querySelector(".create-data");
			fireEvent.click(createBtn);
			await screen.findByText("Carte créée avec succès.");
			const msg = screen.getAllByText("Carte créée avec succès.");
			expect(msg).toBeTruthy();
		});

		test.skip("Should create a new card ", async () => {
			fireEvent.change(input, { target: { value: "CSS" } });
			fireEvent.change(textarea, { target: { value: "TEST CSS" } });
			const createBtn = document.querySelector(".create-data");
			fireEvent.click(createBtn);
			await screen.findByText("CSS");
			const newCard = screen.getAllByText("CSS");
			expect(newCard).toBeTruthy();
		});
	});

	describe("Testing CoverLetter component", () => {
		test("Should render CoverLetter component", () => {
			const coverletter = document.querySelector(".cover-letter");
			expect(coverletter).toBeInTheDocument();
		});

		test("Should copy the text inside coverletter", async () => {
			Object.defineProperty(navigator, "clipboard", {
				value: {
					writeText: jest.fn().mockReturnValue(Promise.resolve("HELLO wORLD")),
				},
			});

			const copyBtn = document.querySelector(".copy-btn");
			fireEvent.click(copyBtn);
			expect(navigator.clipboard.writeText).toBeCalledTimes(1);
		});
	});

	describe("Testing Card component", () => {
		let card;
		beforeEach(() => (card = document.querySelector(".card")));

		test("Should render Card component", () => {
			expect(card).toBeInTheDocument();
		});

		test("Should write in the cover letter by clicking on the card", () => {
			fireEvent.click(card);
			const coverletter = document.querySelector(".contentLetter");
			expect(coverletter.value).toBe("TEST HTML");
		});

		test("Should show a tooltip when hovering over the card", () => {
			fireEvent.mouseEnter(card);
			const tooltip = document.querySelector(".tooltip");
			expect(tooltip).toBeInTheDocument();
		});

		test("Should not display a tooltip when no longer hovering over the card", () => {
			fireEvent.mouseLeave(card);
			const tooltip = document.querySelector(".tooltip");
			expect(tooltip).toBeNull();
		});

		test("Should remove card by  clicking on the button", () => {
			const removeBtn = document.querySelector(".btn-remove");
			fireEvent.click(removeBtn);
			expect(card).not.toBeInTheDocument();
		});
	});
});
