import { FC, MouseEvent, useState } from 'react';

type SwitchColor = "primary" | "secondary" | "warning" | "default";

type SwitchSize = "small" | "medium";

interface IMySwitchProps {
    color?: SwitchColor,
    size?: SwitchSize,
    label?: string,
    disabled?: boolean,
    checked?: boolean
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

    const [isChecked , setIsChecked ] = useState(checked);

    const handleClick = (e: MouseEvent) => {
        if (disabled) return;
        setIsChecked(!isChecked);
        onChange?.(e);
    }

    const constructClassName: () => string = () => {
        const disableSwitch = disabled ? `switch-disabled` : "";
        return ["switch", disableSwitch].join(" ")
    }

    return (
        <div className={constructClassName()}onClick={handleClick}>
            <div className={`switch-${color}-${size}-${isChecked ? "on" : "off"}`} >
                <div className='switch-track-wrapper'><div className='switch-track'></div></div>
                <div className='switch-thumb-wrapper'><div className='switch-thumb'></div></div>
            </div>
            {label}
        </div>
    )
}


export default MySwich;