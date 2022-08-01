import { FC, useEffect, useState } from "react";

type SwitchColor = "primary" | "secondary" | "default";
type SwitchSize = "small" | "medium";

interface IMySwitchProps {
    label?: string,
    color?: SwitchColor,
    size?: SwitchSize,
    checked?: Boolean,
    disabled?: Boolean,
    onChange?: Function
}


const MySwitch: FC<IMySwitchProps> = ({
    label = "",
    color = "default",
    size = "medium",
    checked = false,
    disabled=false,
    onChange = ()=>{}
}) => {

    const DynamicClassNamesBase: string = "AntraUI-Switch-";
    const DynamicClassNames: string = [
        DynamicClassNamesBase+label, 
        DynamicClassNamesBase+size, 
        DynamicClassNamesBase+checked, 
        DynamicClassNamesBase+color,
        DynamicClassNamesBase+disabled
    ].join(" ");

    const LabelComponent: FC = () => {
        return label != "" ?
        <label className={`AntraUI-SwitchComponent-Switch-Label ${DynamicClassNames}`}>{label}</label>
        :
        <></>
    }
    

    return (
        <div className="AntraUI-SwitchComponent-Container" onClick={()=>{onChange(!checked)}}>
            <div className={`AntraUI-SwitchComponent-Switch-Container ${DynamicClassNames}`}>
                <div className={`AntraUI-SwitchComponent-Switch-Track ${DynamicClassNames}`}></div>
                <div className={`AntraUI-SwitchComponent-Switch-Head ${DynamicClassNames}`}></div>
            </div>
            <LabelComponent />
        </div>
    )
}

export default MySwitch;