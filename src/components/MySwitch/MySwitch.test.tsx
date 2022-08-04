import { fireEvent, render, screen } from "@testing-library/react";
import MySwitch from "./MySwitch";

describe("MySwitch test cases", () => {
    test("snapshot test for MySwitch", () => {
        const view = render(<MySwitch />);
        expect(view.asFragment()).toMatchSnapshot();
    })

    test("MySwitch component should be rendered", () => {
        render(<MySwitch />);
        const switchEl = screen.queryByTestId("AntraUI-Switch-Container");
        expect(switchEl).toBeInTheDocument();
    })
 
    test("MySwitch should change its label based on label props", () => {
        render(<MySwitch label="Switch" />)
        const switchEl = screen.queryByText("Switch");
        expect(switchEl).toBeInTheDocument();
    })

    test("MySwitch should change its checked based on checked props", async () => {
        const { rerender } = render(<MySwitch checked={true} />);
        let switchEl = await screen.findByTestId("AntraUI-Switch-Container");
        expect(switchEl).toHaveClass("AntraUI-Switch-isChecked");
        rerender(<MySwitch checked={false} />);
        switchEl = await screen.findByTestId("AntraUI-Switch-Container");
        expect(switchEl).toHaveClass("AntraUI-Switch-notChecked");
    })

    test("MySwitch should change its disabled based on disabled props", async () => {
        render(<MySwitch disabled />);
        let switchEl = await screen.findByTestId("AntraUI-Switch-Container");
        expect(switchEl).toHaveClass("AntraUI-Switch-isDisabled");
    })

    test("MySwitch should change its color based on color props", async () => {
        const { rerender } = render(<MySwitch color="primary" checked={true} />);
        let switchEl = await screen.findByTestId("AntraUI-Switch-Container");
        expect(switchEl).toHaveClass("AntraUI-Switch-primary");
        rerender(<MySwitch color="secondary" checked={true} />)
        expect(switchEl).toHaveClass("AntraUI-Switch-secondary");
        rerender(<MySwitch color="default" checked={true} />)
        expect(switchEl).toHaveClass("AntraUI-Switch-default");
    })

    test("MySwitch should change its size based on size props", async () => {
        const { rerender } = render(<MySwitch color="primary" checked={true} />);
        let switchEl = await screen.findByTestId("AntraUI-Switch-Container");
        expect(switchEl).toHaveClass("AntraUI-Switch-medium");
        rerender(<MySwitch color="primary" checked={true} size="small" />)
        expect(switchEl).toHaveClass("AntraUI-Switch-small");
    })

    test("MySwitch should be disabled if the disables props is provided, , should invoke onClick when it is not disabled", async () => {
        const mockClickHandler = jest.fn();
        const { rerender } = render(<MySwitch onChange={mockClickHandler} />);
        let switchEl = await screen.findByTestId("AntraUI-Switch-Container");
        fireEvent.click(switchEl);
        expect(mockClickHandler).toBeCalledTimes(1);
        rerender(<MySwitch onChange={mockClickHandler} disabled/>);
        fireEvent.click(switchEl);
        expect(mockClickHandler).toBeCalledTimes(1);
    })

    test("MySwitch shuld have ripple animation on change switch", async() => {
        render(<MySwitch />);
        let thumbEl = await screen.findByTestId("AntraUI-Switch-Head");
        fireEvent.click(thumbEl);
        let children = await screen.findByTestId("AntraUI-Switch-Ripple");
        expect(children).toBeDefined()
    })
})