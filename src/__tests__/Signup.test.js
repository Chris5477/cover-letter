import { fireEvent, screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../Redux/store";
import Signup from "../pages/Signup";

describe("Testing Signup page", () => {
	beforeEach(() =>
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Signup />
				</BrowserRouter>
			</Provider>
		)
	);
	test("Should render signup compoenent", () => {
		const signup = document.querySelector(".signup");
		expect(signup).toBeInTheDocument();
	});

	describe("Testing FormUser component", () => {
		let inputs;
		beforeEach(() => inputs = [...document.querySelectorAll("input")] )
		

		test("Should render create-user form", () => {
			const formUser = document.querySelector(".signup-form")
			expect(formUser).toBeInTheDocument()
		})

		test("Should return an error message if IDs exist on database", async() => {
			fireEvent.change(inputs[0], {target : { value : "testjest"}})
			fireEvent.change(inputs[1], {target : { value : "testjest"}})
			const createBtn = inputs[2]
			fireEvent.click(createBtn)
			const txt = await screen.findByText("Le pseudo saisi existe déjà")
			expect(txt).toBeTruthy()
		})

		test.skip("Should return a succes message if IDs match", async() => {
			fireEvent.change(inputs[0], {target : { value : "pseudo"}})
			fireEvent.change(inputs[1], {target : { value : "motdepasse"}})
			const createBtn = inputs[2]
			fireEvent.click(createBtn)
			const txt = await screen.findByText("Utilisateur créé avec succès")
			expect(txt).toBeTruthy()
		})
	})
});
