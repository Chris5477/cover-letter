import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../Redux/store";
import Home from "../pages/Home";
import Header from "../components/Header";

describe("Testing Home page", () => {
	beforeEach(() =>
		render(
			<BrowserRouter>
				<Provider store={store}>
					<Header />
					<Home />
				</Provider>
			</BrowserRouter>
		)
	);

	test("Should render Home component", () => {
		const home = document.querySelector(".home");
		expect(home).toBeInTheDocument();
	});

	describe("Testing FormUser component", () => {
		let inputs;
		beforeEach(() => inputs = [...document.querySelectorAll("input")] )
		 

		test("Should render form-login component", () => {
			const formUser = document.querySelector(".login-form")
			expect(formUser).toBeInTheDocument()
		})

		test("Should return an error message if IDs not match", async() => {
			fireEvent.change(inputs[0], {target : { value : "pseudo"}})
			fireEvent.change(inputs[1], {target : { value : "mdp"}})
			const createBtn = inputs[2]
			fireEvent.click(createBtn)
			const txt = await screen.findByText("Identifiants incorrects")
			expect(txt).toBeTruthy()
		})

		test("Should return a succes message if IDs match", async() => {
			fireEvent.change(inputs[0], {target : { value : "testjest"}})
			fireEvent.change(inputs[1], {target : { value : "testjest"}})
			const createBtn = inputs[2]
			fireEvent.click(createBtn)
			const txt = await screen.findByText("Connexion en cours")
			expect(txt).toBeTruthy()
		})
	})
});
