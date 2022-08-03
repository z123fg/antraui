import { Children, FC, MouseEvent, ReactNode, useEffect, useState } from "react";

interface IMyDrawerProps{
    open?:boolean;
    children?:ReactNode;
    onClick?:(event:MouseEvent)=>void
}

const MyDrawer: FC<IMyDrawerProps>=({
    open = false,
    children,
    onClick
})=>{

  const constructClassName:()=>string = () => {
    const showing = `drawer-${open}`;
    return ["drawer", showing].join(" ")
  }

    return (
        <div>
            {/* <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/> */}
            <label className="drawer-toggle" id="drawer-toggle-label">A</label>
            <nav id="drawer" className={constructClassName()}>
            <ul>
                <li>Item one</li>
                <li>Item two</li>
                <li>Item three</li>
                <li>Item four</li>
            </ul>
        </nav>
        </div>
        
       
    )
}

export default MyDrawer