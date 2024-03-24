import { fireEvent, redner, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";


import App from '../App';
import ReCalibrate from "../Components/reCalibrate";

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
    })

    it("should render reCalibrate component to the screen", () => {
        render(<ReCalibrate />)
    })

    it("should adjust the p tag element", () => {
        const { getByTestId } = render(
            <div data-testid="container">
                <ReCalibrate>
                    <p data-testid="test-subject">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </ReCalibrate>
            </div>
        )

        const container = getByTestId("container")
        const wrapper = container.querySelector(".parent")
        const div = wrapper.querySelector('.reCalibrateButton')

        const testSubject = getByTestId("test-subject")

        fireEvent.mouseDown(div)
        fireEvent.mouseMove(div, {clientX: 200, clientY: 200})
        fireEvent.mouseUp(div)


        expect(testSubject).toHaveStyle(`
            width: "1096px",
            height: "224px"
        `)
    })



    it("should adjust the div tag element", () => {
        const { getByTestId } = render(
            <div data-testid="container">
                <ReCalibrate>
                    <div  data-testid="test-subject">
                        Another test
                    </div>
                </ReCalibrate>
            </div>
        )

        const container = getByTestId("container")
        const wrapper = container.querySelector(".parent")
        const div = wrapper.querySelector('.reCalibrateButton')

        const testSubject = getByTestId("test-subject")

        fireEvent.mouseDown(div)
        fireEvent.mouseMove(div, {clientX: 200, clientY: 200})
        fireEvent.mouseUp(div)


        expect(testSubject).toHaveStyle(`
            width: "220px",
            height: "224px"
        `)
    })



    it("should adjust the button tag element", () => {
        const { getByTestId } = render(
            <div data-testid="container">
                <ReCalibrate>
                  <button data-testid="test-subject">
                    Click me
                  </button>
                </ReCalibrate>
            </div>
        )

        const container = getByTestId("container")
        const wrapper = container.querySelector(".parent")
        const div = wrapper.querySelector('.reCalibrateButton')

        const testSubject = getByTestId("test-subject")

        fireEvent.mouseDown(div)
        fireEvent.mouseMove(div, {clientX: 200, clientY: 200})
        fireEvent.mouseUp(div)


        expect(testSubject).toHaveStyle(`width: "303px", height: "234px"`)
    })
})
