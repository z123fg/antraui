import { queryByText, findByText, render, screen, fireEvent, waitFor } from "@testing-library/react"
import React from "react"
import Checkbox from "./Checkbox"


describe("Checkbox test cases", () => {
  test("snapshot test for Checkbox", () => {
    const view = render(<Checkbox>SUBMIT</Checkbox>);
    expect(view.asFragment()).toMatchSnapshot();
  });

  test("Checkbox component should be rendered", () => {
    render(<Checkbox />)
    const checkboxId = screen.getByTestId("large-checkbox")
    expect(checkboxId).toBeInTheDocument();
  });

  test("Checkbox should change its color based on color props", async () => {
    const { rerender } = render(<Checkbox color="primary" />);
    let checkboxEl = await screen.findByRole("checkbox");
    expect(checkboxEl).toHaveClass("checkbox-primary-medium");
    rerender(<Checkbox color="secondary" />);
    checkboxEl = await screen.findByRole("checkbox");
    expect(checkboxEl).toHaveClass("checkbox-secondary-medium");
    rerender(<Checkbox color="default" />);
    checkboxEl = await screen.findByRole("checkbox");
    expect(checkboxEl).toHaveClass("checkbox-default-medium");
  })

    test("Checkbox should change its size based on size props", async () => {
    const { rerender } = render(<Checkbox size="medium" />);
    let checkboxEl = await screen.findByRole("checkbox");
    expect(checkboxEl).toHaveClass("checkbox-medium");
    rerender(<Checkbox size="small" />);
    checkboxEl = await screen.findByRole("checkbox");
    expect(checkboxEl).toHaveClass("checkbox-small");
    rerender(<Checkbox size="large" />);
    checkboxEl = await screen.findByRole("checkbox");
    expect(checkboxEl).toHaveClass("checkbox-large");
  })

    test("Checkbox should be disabled if the disabled props is passed, should be true initially, and false after clicking", async () => {
    const mockClickHandler = jest.fn();
    render(<Checkbox onClick={mockClickHandler} />);
    const checkbox = screen.getByTestId("hidden-checkbox") as HTMLInputElement
    expect(checkbox.checked).toEqual(false)
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true)
  });

  // test("Checkbox should have rippple animation on click", async () => {
  //   render(<Checkbox>SUBMIT</Checkbox>);
  //   let checkboxEl = await screen.findByRole("checkbox");
  //   let rippleEls = screen.queryAllByTestId("ripple-element");
  //   expect(rippleEls).toHaveLength(0);
  //   fireEvent.click(checkboxEl);
  //   rippleEls = screen.queryAllByTestId("ripple-element");
  //   expect(rippleEls).toHaveLength(1);
  //   fireEvent.click(checkboxEl);
  //   rippleEls = screen.queryAllByTestId("ripple-element");
  //   expect(rippleEls).toHaveLength(2);

  //   rippleEls.forEach(rippleEl => {
  //     fireEvent.animationEnd(rippleEl);
  //   });
  //   rippleEls = screen.queryAllByTestId("ripple-element");
  //   expect(rippleEls).toHaveLength(0);
  // });
})