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

  // test("Checkbox should change its variant based on variant props", async () => {
  //   const { rerender } = render(<Checkbox variant="contained">SUBMIT</Checkbox>);
  //   let checkboxEl = await screen.findByRole("checkbox");
  //   expect(checkboxEl).toHaveClass("btn-primary-contained");
  //   rerender(<Checkbox variant="outlined">SUBMIT</Checkbox>);
  //   checkboxEl = await screen.findByRole("checkbox");
  //   expect(checkboxEl).toHaveClass("btn-primary-outlined");
  //   rerender(<Checkbox variant="text">SUBMIT</Checkbox>);
  //   checkboxEl = await screen.findByRole("checkbox");
  //   expect(checkboxEl).toHaveClass("btn-primary-text");
  // })

  // test("Checkbox should change its size based on size props", async () => {
  //   const { rerender } = render(<Checkbox size="medium">SUBMIT</Checkbox>);
  //   let checkboxEl = await screen.findByRole("checkbox");
  //   expect(checkboxEl).toHaveClass("btn-medium");
  //   rerender(<Checkbox size="small">SUBMIT</Checkbox>);
  //   checkboxEl = await screen.findByRole("checkbox");
  //   expect(checkboxEl).toHaveClass("btn-small");
  //   rerender(<Checkbox size="large">SUBMIT</Checkbox>);
  //   checkboxEl = await screen.findByRole("checkbox");
  //   expect(checkboxEl).toHaveClass("btn-large");
  // })

  // test("Checkbox should be disabled if the disabled props is true, should invoke onClick when it is not disabled", async () => {
  //   const mockClickHandler = jest.fn();
  //   const { rerender } = render(<Checkbox onClick={mockClickHandler}>SUBMIT</Checkbox>);
  //   let checkboxEl = await screen.findByRole("checkbox");
  //   fireEvent.click(checkboxEl);
  //   expect(mockClickHandler).toBeCalledTimes(1);
  //   rerender(<Checkbox onClick={mockClickHandler} disabled>SUBMIT</Checkbox>);
  //   fireEvent.click(checkboxEl);
  //   expect(mockClickHandler).toBeCalledTimes(1);
  // });

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