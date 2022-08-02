import { FC, useEffect, useState, ReactNode } from "react";

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

let rippleCounter = 0;
const MySwitch: FC<IMySwitchProps> = ({
    label = "",
    color = "default",
    size = "medium",
    checked = false,
    disabled=false,
    onChange = ()=>{}
}) => {
    const [rippleArr, setRippleArr] = useState<ReactNode[]>([])

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
    
    const handleClick = () => {
        const newRipple = (
            <div
                key={rippleCounter++}
                className={`AntraUI-Switch-Ripple ${DynamicClassNames}`}
                onAnimationEnd={()=>{
                    setRippleArr(prev=>{
                        let nextRippleArr = [...prev];
                        nextRippleArr.shift();
                        return nextRippleArr;
                    })
                }}
            >
                
            </div>
        )
        setRippleArr(prev=>[...prev, newRipple]);

        if (!disabled) {
            onChange(!checked);
        }
    }
    return (
        <div className={`AntraUI-Switch-Container ${DynamicClassNames}`} onClick={handleClick}>
            <div className={`AntraUI-Switch ${DynamicClassNames}`}>
                <div className={`AntraUI-Switch-Track ${DynamicClassNames}`}></div>
                <div className={`AntraUI-Switch-HeadHover ${DynamicClassNames}`}></div>
                <div className={`AntraUI-Switch-Head ${DynamicClassNames}`}>
                    {rippleArr}
                </div>
            </div>
            <LabelComponent />
        </div>
    )
}

export default MySwitch;