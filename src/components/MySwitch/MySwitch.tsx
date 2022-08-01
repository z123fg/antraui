import { FC, MouseEvent, ReactNode, useEffect, useState } from "react";

type SwitchColor = "primary" | "secondary" | "default";
type SwitchSize = "small" | "medium";

interface IMySwitchProps {
    label?: String,
    color?: SwitchColor,
    size?: SwitchSize,
    checked?: Boolean,
    onChange?: Function
}


const MySwitch: FC<IMySwitchProps> = ({
    label = "",
    color = "default",
    size = "medium",
    checked = false,
    onChange = ()=>{}
}) => {

    return (
        <div className="AntraUI-Switch-Container">
            
        </div>
    )
}

export default MySwitch;