import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom"
import CoverLetter from "../components/Application/CoverLetter";

describe("Tesstin CoverLetter component", () => {
    beforeEach(() => render(<CoverLetter />))

    test("Should render CoverLetter Component" , () => {
        const coverLetter = document.querySelector(".cover-letter")
        expect(coverLetter).toBeInTheDocument() 
    })

    test("Should copy the text on the clipBoard", () => {

        Object.defineProperty(navigator, "clipboard", {
            value: {
              writeText: jest.fn().mockReturnValueOnce(Promise.resolve("HELLOOO")),
            },
        })

        const btn = document.querySelector(".copy-btn")
        fireEvent.click(btn)
        expect(navigator.clipboard.writeText).toBeCalledTimes(1)

        
    })

   
})