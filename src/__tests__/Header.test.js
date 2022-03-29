
import { render } from "@testing-library/react";
import Header from "../components/Header"

describe("Testing Header component", () => {  
    test("Should show header in web page", () => {
        render(<Header />)
        const header = document.querySelector("header");
        expect(header).toBeInTheDocument();
    });
})