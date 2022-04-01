import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import Data from "../components/Application/Data";

describe("Test Data Component", () => {
	beforeEach(() =>
	render(
		<Provider store={store}>
				<Data message="Hello world" setMessage={() => jest.fn().mockResolvedValue("error")} />
			</Provider>


		)
	);

	test("Should render component", () => {
		const element = document.querySelector(".section-form");
		expect(element).toBeInTheDocument()
	});


});
