import { screen, render, fireEvent, findByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../__mocks__/mockStore";
import Application from "../pages/Application";
import { deleteUser } from "../requests/deleteUser";
import Header from "../components/Header";
import App from "../App";

describe("Testing Application page", () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<Application />
			</Provider>
		);
	});

	test("Should render Application page ", () => {
		const application = document.querySelector(".application");
		expect(application).toBeInTheDocument();
	});

	describe("Testing FormData component", () => {
		let createBtn, input, textarea, select;
		beforeEach(() => {
			input = document.querySelector("input");
			textarea = document.querySelector("textarea");
			select = document.querySelector("select");
			createBtn = document.querySelector(".create-data");
		});

		test("Should return an error message if one field is empty", async () => {
			fireEvent.click(createBtn);
			const txt = await screen.findByText("Veuillez remplir tous les champs du formulaire !");
			expect(txt).toBeTruthy();
		});

		test("Should return a succes message if the fields are fill", async () => {
			fireEvent.change(input, { target: { value: "html" } });
			fireEvent.change(textarea, { target: { value: "htmlhtmlhtml" } });
			fireEvent.change(select, { target: { value: "Values" } });
			fireEvent.click(createBtn);
			const txt = await screen.findByText("Carte créée avec succès.");
			expect(txt).toBeTruthy();
		});

		describe("Testing Card component", () => {
			let card;
			beforeEach(() => (card = document.querySelector(".card")));

			test("Sould be render Card component", () => {
				expect(card).toBeInTheDocument();
			});

			test("Should show a tooltip if user hover the card", () => {
				fireEvent.mouseEnter(card);
				const tooltip = document.querySelector(".tooltip");
				expect(tooltip).toBeInTheDocument();
				fireEvent.mouseLeave(card);
				expect(tooltip).not.toBeInTheDocument();
			});

            test("Should write in coverLetter on the click on card", () => {
                fireEvent.click(card)
                const coverletter = document.querySelector(".contentLetter")
                expect(coverletter.value).toBe("Concevoir une maquette")
            })

            test("Should copy the content of cover letter in the clipboard", () => {
                Object.defineProperty(navigator, "clipboard", {
                    value: {
                        writeText: jest.fn().mockReturnValue(Promise.resolve("HELLO WORLD")),
                    },
                });

                const btnCopy = document.querySelector(".copy-btn")
                fireEvent.click(btnCopy)
                expect(navigator.clipboard.writeText).toBeCalledTimes(1)
    
            })

		
		});
	});
});
