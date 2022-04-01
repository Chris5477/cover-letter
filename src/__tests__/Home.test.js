import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import FormUser from "../components/Home/FormUser";

describe("Testing Home Page", () => {
	let inputs;
	beforeEach(() => {
		render(
			<Provider store={store}>
				<Home />
			</Provider>
		);
		
	});

	test("Should render Home component", () => {
		const home = document.querySelector(".home");
		expect(home).toBeInTheDocument();
	});

});
