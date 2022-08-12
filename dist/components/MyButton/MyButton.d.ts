import { FC, MouseEvent, ReactNode } from "react";
declare type ButtonColor = "primary" | "secondary" | "default";
declare type ButtonSize = "small" | "medium" | "large";
declare type ButtonVariant = "contained" | "outlined" | "text";
interface IMyButtonProps {
    /**
     * customize the color of the button
     */
    color?: ButtonColor;
    /**
     * customize the size of the button
     */
    size?: ButtonSize;
    /**
     * customize the variant style of the button
     */
    variant?: ButtonVariant;
    /**
     * used to disable the button
     */
    disabled?: boolean;
    /**
     * the inner text of the button
     */
    children?: ReactNode;
    /**
     * event handler for the click event of the button
     */
    onClick?: (event: MouseEvent) => void;
}
declare const MyButton: FC<IMyButtonProps>;
export default MyButton;
