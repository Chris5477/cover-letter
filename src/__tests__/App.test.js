import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App"

describe("Testing App Component", () => {
    beforeEach(() => render(<App />))

    test("Should render App component", () => {
        const app = document.querySelector(".App")
        expect(app).toBeInTheDocument()
    })

    test("Should render Header component", () => {
        const header = document.querySelector("header")
        expect(header).toBeInTheDocument()
    })

})