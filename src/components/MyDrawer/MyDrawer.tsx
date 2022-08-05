import {
  Children,
  FC,
  MouseEvent,
  ReactNode,
  useEffect,
  useState,
} from "react";

type DrawerDirection = "top" | "left" | "right" | "bottom";

interface IMyDrawerProps {
  open?: boolean;
  direction?: DrawerDirection;
  children?: ReactNode;
  onClick?: (event: MouseEvent) => void;
}

const MyDrawer: FC<IMyDrawerProps> = ({
  open = false,
  direction = "bottom",
  children,
  onClick,
}) => {
  const constructClassName: () => string = () => {
    const drawerDir = `drawer-${direction}`;
    return ["drawer", drawerDir].join(" ");
  };

  return (
    <div>
      <div id="btn-group">
        <button className="button" id="button"></button>
      </div>

      {/* <button className="button" id="button"></button> */}

      <nav id="drawer" className={constructClassName()}>
        <ul id="drawer-container">
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
          <li>Item Four</li>
        </ul>
      </nav>
    </div>
  );
};

export default MyDrawer;
