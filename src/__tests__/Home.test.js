import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from "../pages/Home";
import { store } from "../Redux/store";

describe("Testing Home page", () => {
	beforeEach(() =>
		render(
			<Provider store={store}>
				<Home />
			</Provider>
		)
	);

	test("Should render Home component", () => {
		const home = document.querySelector(".home");
		expect(home).toBeInTheDocument();
	});

	test("Should render the title of Prensentation component", () => {
		const title = screen.getAllByText("Gagnez du temps pour réalisez vos lettres de motivation");
		expect(title).toBeTruthy();
	});

	describe("Testing FormUser component", () => {
		test("Should render FormUser component", () => {
			const formOne = document.getElementById("pseudo-log");
			const formTwo = document.getElementById("pseudo-sign");
			expect(formOne).toBeInTheDocument();
			expect(formTwo).toBeInTheDocument();
		});

		describe("Testing createUser form", () => {
			let inputs;

			beforeEach(() => (inputs = [...document.querySelectorAll("input")]));

			test("Should show error message if submitted data is empty", async () => {
				const createBtn = screen.getByText("Envoyer");
				fireEvent.click(createBtn);
				await screen.findByText("Utilisateur non créé");
				const text = screen.getByText("Utilisateur non créé");
				expect(text).toBeTruthy();
			});

			test.skip("Should show success message if data is filled", async () => {
				const pseudoInput = inputs[3];
				const passwordInput = inputs[4];
				fireEvent.change(pseudoInput, { target: { value: "test" } });
				fireEvent.change(passwordInput, { target: { value: "test" } });
				const createBtn = screen.getByText("Envoyer");
				fireEvent.click(createBtn);
				await screen.findByText("Utilisateur créé avec succès");
				const text = screen.getByText("Utilisateur créé avec succès");
				expect(text).toBeTruthy();
			});
		});

		describe("Testing login form", () => {
			let inputs;

			beforeEach(() => (inputs = [...document.querySelectorAll("input")]));

			test("Should show error message if submitted data is empty", async () => {
				const loginBtn = screen.getByText("Se connecter");
				fireEvent.click(loginBtn);
				await screen.findByText("Identifiants incorrects");
				const text = screen.getByText("Identifiants incorrects");
				expect(text).toBeTruthy();
			});

			test("Should show success message if data is filled", async () => {
				const pseudoInput = inputs[0];
				const passwordInput = inputs[1];
				fireEvent.change(pseudoInput, { target: { value: "test" } });
				fireEvent.change(passwordInput, { target: { value: "test" } });
				const createBtn = screen.getByText("Se connecter");
				fireEvent.click(createBtn);
				await screen.findByText("Connexion en cours");
				const text = screen.getByText("Connexion en cours");
				expect(text).toBeTruthy();
			});
		});
	});
});
