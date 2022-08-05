import { queryByText, findByText, render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import MyRating from "./MyRating";

describe("MyRating test cases", () => {
    test("MyRating component should be rendered", () => {
        render(<MyRating />);
        const ratingEl = screen.queryByTestId("rating__container");
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

    test("MyRating should be disabled if the disabled props is true, should invoke onClick when it is not disabled or readOnly", async () => {
        const mockClickHandler = jest.fn();
        const { rerender } = render(<MyRating onValueChange={mockClickHandler} />);
        let buttonEl = await screen.findByTestId("star-1");
        fireEvent.click(buttonEl);
        expect(mockClickHandler).toBeCalledTimes(1);
        
        rerender(<MyRating onValueChange={mockClickHandler} disabled />);
        fireEvent.click(buttonEl);
        expect(mockClickHandler).toBeCalledTimes(1);

        rerender(<MyRating onValueChange={mockClickHandler} readOnly />);
        fireEvent.click(buttonEl);
        expect(mockClickHandler).toBeCalledTimes(1);
      });

    test("MyRating component should change number of rating stars based on max props", async () => {
        render(<MyRating max={10} />);
        let ratingButtonEls = await screen.findAllByRole("button");
        expect(ratingButtonEls).toHaveLength(10);
    })

    test("MyRating component should render rating value based on value props", async () => {
        render(<MyRating value={3}/>);
        const filledStarEls = screen.getAllByLabelText("filled-star");
        expect(filledStarEls).toHaveLength(3);
    })

    test("MyRating component should render and filled only max number of star based on max props instead of render number passed in by value props", async() =>{
        render(<MyRating max={3} value={5}/>);
        const ratingButtonEls = await screen.findAllByRole("button");
        const filledStarEls = screen.getAllByLabelText("filled-star");
        expect(ratingButtonEls).toHaveLength(3);
        expect(filledStarEls).toHaveLength(3);
    })

    test("MyRating component should change the value of rating star based on user interaction", async () => {
        render(<MyRating />);
        const thirdRatingButton = await screen.findByTestId("star-3");
        fireEvent.click(thirdRatingButton);
        const filledStarEls = screen.getAllByLabelText("filled-star");
        expect(filledStarEls).toHaveLength(3);
    })

    test("MyRating component should change the number of filled star when a mouse move over a button", async () => {
        render(<MyRating />);
        const thirdRatingButton = await screen.findByTestId("star-3");
        fireEvent.mouseMove(thirdRatingButton);
        const filledStarEls = await screen.findAllByTestId("StarRoundedIcon");
        expect(filledStarEls).toHaveLength(3);
    })

    // test("MyRating should render half-filled star when precision=0.5 definied", async () => {
    //     render(<MyRating precision={0.5}/>);
    //     const thirdRatingButton = await screen.findByTestId("star-3");
    //     fireEvent.click(thirdRatingButton);
    //     const filledStarEls = await screen.findAllByTestId("StarRoundedIcon");
    //     const halffilledStarEl = await screen.findAllByTestId("StarHalfRoundedIcon");
    //     const emptyStarEls =  await screen.findAllByTestId("StarBorderRoundedIcon");
    //     expect(filledStarEls).toHaveLength(2);
    //     expect(halffilledStarEl).toHaveLength(1);
    //     expect(emptyStarEls).toHaveLength(2);
    // })

})