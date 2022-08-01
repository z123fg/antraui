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
        label!="" ? DynamicClassNamesBase+"label" : DynamicClassNamesBase+"noLabel", 
        DynamicClassNamesBase+size, 
        checked ? DynamicClassNamesBase+"isChecked" : DynamicClassNamesBase+"notChecked", 
        DynamicClassNamesBase+color,
        disabled ? DynamicClassNamesBase+"isDisabled" : DynamicClassNamesBase+"notDisabled"
    ].join(" ");

    const LabelComponent: FC = () => {
        return label != "" ?
        <label className={`AntraUI-Switch-Label ${DynamicClassNames}`}>{label}</label>
        :
        <></>
    }
    
    return (
        <div className={`AntraUI-Switch-Container ${DynamicClassNames}`} onClick={()=>{if (!disabled) {onChange(!checked)}}}>
            <div className={`AntraUI-Switch ${DynamicClassNames}`}>
                <div className={`AntraUI-Switch-Track ${DynamicClassNames}`}></div>
                <div className={`AntraUI-Switch-HeadHover ${DynamicClassNames}`}></div>
                <div className={`AntraUI-Switch-Head ${DynamicClassNames}`}></div>
            </div>
            <LabelComponent />
        </div>
    )
}

export default MySwitch;