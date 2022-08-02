import { FC, MouseEvent, useState, useRef } from 'react';

type SwitchColor = "primary" | "secondary" | "warning" | "default";

type SwitchSize = "small" | "medium";

interface IMySwitchProps {
    /**
    * customize the color of the switch
    */
    color?: SwitchColor,
    /**
    * customize the size of the switch
    */
    size?: SwitchSize,
    /**
    * customize the label of switch
    */
    label?: string,
    /**
    * used to disable the switch
    */
    disabled?: boolean,
    /**
    * used to check the button
    */
    checked?: boolean
    /**
    * event handler for the click event of the switch
    */
    onChange?: (event: MouseEvent) => void
}

const MySwich: FC<IMySwitchProps> = ({
    color = "primary",
    size = "medium",
    label,
    disabled = false,
    checked = false,
    onChange
}) => {

    const [isChecked, setIsChecked] = useState(checked);
    const thumbRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: MouseEvent) => {
        if (disabled) return;
        setIsChecked(!isChecked);

        // Add animation after click
        if (thumbRef && thumbRef.current) {
            thumbRef.current.style.animation = !isChecked ? `${color}-${size}-effect 0.3s linear` : `Off-${size}-effect 0.3s linear`;
        }
        onChange?.(e);
    }


    const switchContainer: string = ["switch", disabled ? `switch-disabled` : ""].join(" ");
    const switchStyle: string = isChecked ? `switch-${color}-${size}` : `switch-${size}-off`;

    return (
        <div className={switchContainer} onClick={handleClick}>
            <div className={switchStyle} >
                <div className='switch-track-wrapper'><div className='switch-track'></div></div>
                <div className='switch-thumb-wrapper'><div className='switch-thumb' ref={thumbRef}></div></div>
            </div>
            {label}
        </div>
    )
}


export default MySwich;