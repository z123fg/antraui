import { queryByTestId, findByText, findByRole, render, screen, fireEvent, waitFor } from "@testing-library/react"
import React from "react"
import MyRating from './MyRating';

describe("MyRating test cases", () => {
    test("snapshot test for MyRating", () => {
        const view = render(<MyRating />)
        expect(view.asFragment()).toMatchSnapshot();
    });

    test("MyRating component should be rendered", () => {
        render(<MyRating />);
        let ratingEl = screen.queryByTestId("rating__container");
        expect(ratingEl).toBeInTheDocument();

    });

    test("MyRating component should change its disabled based on disabled props", async () => {
        render(<MyRating disabled />);
        let ratingEl = await screen.findByTestId("rating__container");
        expect(ratingEl).toHaveClass("disabled");
    });

    test("MyRating should change its size based on size props", async () => {
        const { rerender } = render(<MyRating size="small" />);
        let ratingEl = await screen.findByTestId("rating__container");
        expect(ratingEl).toHaveClass("size-small");
        rerender(<MyRating size="medium" />)
        expect(ratingEl).toHaveClass("size-medium");
        rerender(<MyRating size="large" />)
        expect(ratingEl).toHaveClass("size-large");
    });

    test("MyRating should change its readonly based on readonly props", async () => {
        render(<MyRating readOnly />);
        let ratingEl = await screen.findByTestId("rating__container");
        expect(ratingEl).toHaveClass("read-only");
    });


    // this one doesn't work
    test("MyRating should be disabled if the disabled props is true, should invoke onClick when it is not disabled or readOnly", async () => {
        const mockClickHandler = jest.fn();
        const { rerender } = render(<MyRating onClick={mockClickHandler} />);
        let buttonEl = await screen.findByTestId(1);
        console.log(buttonEl);
        fireEvent.click(buttonEl);
        expect(mockClickHandler).toBeCalledTimes(1);
        
        rerender(<MyRating onClick={mockClickHandler} disabled />);
        fireEvent.click(buttonEl);
        expect(mockClickHandler).toBeCalledTimes(1);

        rerender(<MyRating onClick={mockClickHandler} readOnly />);
        fireEvent.click(buttonEl);
        expect(mockClickHandler).toBeCalledTimes(1);
      });




    });

    