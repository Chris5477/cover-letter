import Application from "../pages/Application";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import configureStore from 'redux-mock-store'

describe("Testing Application page component", () => {
	beforeEach(() =>{

		const middlewares = [];
		const mockStore = configureStore(middlewares)

		const initialState = {
			pseudo : "test",
				password: "azerty"
		}
		const store = mockStore(initialState)
		

		render(
			<Provider store={store}>
				<Application />
			</Provider>
		)
	}
	);

	test("Should render Application component", () => {
		const div = document.querySelector(".application");
		expect(div).toBeInTheDocument();
	});
});

// test.only("Should create a new card", async () => {
	
// 	console.log(document.body.innerHTML);
// 	const btnCreate = document.querySelector(".create-data");
// 	fireEvent.click(btnCreate);
// });
