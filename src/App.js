import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Application from "./pages/Application";
import Error from "./pages/Error";
import Header from "./components/Utils/Header";
import { store, persistor } from "./Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<div className="App">
					<Header />
					<BrowserRouter>
						<Routes>
							<Route exact path={"cover-letter/"} element={<Home />} />
							<Route path={"/application"} element={<Application />} />
							<Route element={<Error />} />
						</Routes>
					</BrowserRouter>
				</div>
			</PersistGate>
		</Provider>
	);
}

export default App;
