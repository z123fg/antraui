import { fireEvent, render, screen } from "@testing-library/react";
import MySwitch from "./MySwitch";

describe("MySwitch test cases", () => {
    test("snapshot test for MySwitch", () => {
        const view = render(<MySwitch />);
        expect(view.asFragment()).toMatchSnapshot();
    })

    test("MySwitch component should be rendered", () => {
        render(<MySwitch />);
        const switchEl = screen.queryByTestId("MySwitch--container");
        expect(switchEl).toBeInTheDocument();
    })

    test("MySwitch should change its label based on label props", () => {
        render(<MySwitch label="Switch" />)
        const switchEl = screen.queryByText("Switch");
        expect(switchEl).toBeInTheDocument();
    })

    test("MySwitch should change its checked based on checked props", async () => {
        const { rerender } = render(<MySwitch checked={true} />);
        let switchEl = await screen.findByTestId("MySwitch--switch");
        expect(switchEl).toHaveClass("switch-primary-medium");
        rerender(<MySwitch checked={false} />);
        switchEl = await screen.findByTestId("MySwitch--switch");
        expect(switchEl).toHaveClass("switch-medium-off");
    })

    test("MySwitch should change its disabled based on disabled props", async () => {
        render(<MySwitch disabled />);
        let switchEl = await screen.findByTestId("MySwitch--container");
        expect(switchEl).toHaveClass("switch-disabled");
    })

    test("MySwitch should change its color based on color props", async () => {
        const { rerender } = render(<MySwitch color="primary" checked={true} />);
        let switchEl = await screen.findByTestId("MySwitch--switch");
        expect(switchEl).toHaveClass("switch-primary-medium");
        rerender(<MySwitch color="secondary" checked={true} />)
        expect(switchEl).toHaveClass("switch-secondary-medium");
        rerender(<MySwitch color="warning" checked={true} />)
        expect(switchEl).toHaveClass("switch-warning-medium");
        rerender(<MySwitch color="default" checked={true} />)
        expect(switchEl).toHaveClass("switch-default-medium");
    })

    test("MySwitch should change its size based on size props", async () => {
        const { rerender } = render(<MySwitch color="primary" checked={true} />);
        let switchEl = await screen.findByTestId("MySwitch--switch");
        expect(switchEl).toHaveClass("switch-primary-medium");
        rerender(<MySwitch color="primary" checked={true} size="small" />)
        expect(switchEl).toHaveClass("switch-primary-small");
    })

    test("MySwitch should be disabled if the disables props is provided, , should invoke onClick when it is not disabled", async () => {
        const mockClickHandler = jest.fn();
        const { rerender } = render(<MySwitch onChange={mockClickHandler} />);
        let switchEl = await screen.findByTestId("MySwitch--container");
        fireEvent.click(switchEl);
        expect(mockClickHandler).toBeCalledTimes(1);
        rerender(<MySwitch onChange={mockClickHandler} disabled/>);
        fireEvent.click(switchEl);
        expect(mockClickHandler).toBeCalledTimes(1);
    })

    test("MySwitch shuld have ripple animation on change switch", async() => {
        render(<MySwitch />);
        let switchEl = await screen.findByTestId("MySwitch--container");
        let thumbEl = await screen.findByTestId("switch-thumb");
        fireEvent.click(switchEl);
        expect(thumbEl).toHaveStyle("animation: primary-medium-effect 0.3s linear");
        fireEvent.click(switchEl);
        expect(thumbEl).toHaveStyle("animation: Off-medium-effect 0.3s linear");
    })
})
