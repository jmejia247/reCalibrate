import { redner, render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import '@testing-library/jest-dom';

import App from '../App';

describe("something truthy and falsy", () => {
    it("true should be truthy", () => {
        expect(true).toBe(true)
    })

    it("false should be falsy", () => {
        expect(false).toBe(false)
    })
})

describe("App", () => {
    it("should render app component to the screen", () => {
        render(<App />)

        // screen.debug()
    })

    it("should have child components", () => {
        render(<App />)
        const item = screen.getByRole("section")

        screen.debug()
    })
})
