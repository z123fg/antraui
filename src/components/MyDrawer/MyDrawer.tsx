import {
  Children,
  FC,
  MouseEvent,
  ReactNode,
  useEffect,
  useState,
} from "react";

//Import Drawer Varient
import PermanentDrawer from "./PermanentDrawer";
import PersistentDrawer from "./PersistentDrawer";
import TemporaryDrawer from "./TemporaryDrawer";


type Anchor = "top" | "left" | "right" | "bottom";
type Variant = "permanent" | "persistent" | "temporary" ;

interface IMyDrawerProps {
  variant?:Variant;
  open?: boolean;
  anchor?: Anchor;
  children?: ReactNode;
  onClick?: (event: MouseEvent) => void;
  onClose?: (event: MouseEvent) => void;
}

const MyDrawer: FC<IMyDrawerProps> = ({
  //default prop values
  variant="temporary",
  anchor="left",
  children="",
  open=false,
  
}) => {

  return (
   <div>
    {variant === "permanent" && <PermanentDrawer/>}
    {variant === "persistent" && <PersistentDrawer/>}
    {variant === "temporary" && <TemporaryDrawer/>}
   </div>
  );
};

export default MyDrawer;