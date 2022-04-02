import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../App";


describe("Testing App component", () => {
    beforeEach(() => render(<App />))

    test("Should render App component", () => {
        const app = document.querySelector(".App")
        expect(app).toBeInTheDocument()
    })

    test("Should render header element", () => {
        const header = document.querySelector("header")
        expect(header).toBeInTheDocument()
    })
})