import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../components/Application/Card";

describe("Testing Card Components", () => {
    beforeEach(() => render(<Card />))

    test("Should render Card component", () => {
        const card = document.querySelector(".card")
        expect(card).toBeInTheDocument()
    })

    test("Should display a tooltip on hover card", () => {
        const card = document.querySelector(".card")
        fireEvent.mouseEnter(card)
        const tooltip = document.querySelector(".tooltip")
        expect(tooltip).toBeInTheDocument()
    })

    test("Should not display a tooltip on unhover card", () => {
        const card = document.querySelector(".card")
        fireEvent.mouseLeave(card)
        const tooltip = document.querySelector(".tooltip")
        expect(tooltip).toBeNull()
    })
})