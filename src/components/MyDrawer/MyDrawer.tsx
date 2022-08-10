import {
  Children,
  FC,
  MouseEvent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import MenuIcon from "@mui/icons-material/Menu";

type DrawerDirection = "top" | "left" | "right" | "bottom";

interface IMyDrawerProps {
  //open?: boolean;
  direction?: DrawerDirection;
  children?: ReactNode;
  onClick?: (event: MouseEvent) => void;
}

const MyDrawer: FC<IMyDrawerProps> = ({
  //open = false,
  direction = "bottom",
  children,
  onClick,
}) => {
  //type ObjectKey = keyof typeof openDrawer;
  const [openDrawer, setOpendrawer] = useState({
    top: false,
    bottom: false,
    left: false,
    right: false,
  });
  const [currentDir, setCurrendir] = useState(direction);

  const onCloseBottom = (e: MouseEvent) => {
    //console.log("current Dir ", currentDir);
    //console.log("openDrawer ", openDrawer);
    if (direction == "bottom") {
      console.log("bottom direction ", direction);
      setCurrendir("bottom");
      setOpendrawer((prev) => {
        return { ...prev, bottom: !openDrawer.bottom };
      });
    } else if (direction == "top") {
      console.log("top direction ", direction);
      setCurrendir("top");
      setOpendrawer((prev) => {
        return {
          ...prev,
          top: !openDrawer.top,
        };
      });
    } else if (direction == "left") {
      console.log("openDrawer ", openDrawer);
      setCurrendir("left");
      setOpendrawer((prev) => {
        return {
          ...prev,
          left: !openDrawer.left,
        };
      });
    } else if (direction == "right") {
      setCurrendir("right");
      setOpendrawer((prev) => {
        return {
          ...prev,
          right: !openDrawer.right,
        };
      });
    }
  };

  const constructClassName: () => string = () => {
    //console.log("currentDir ", currentDir);
    type ObjectKey = keyof typeof openDrawer;
    const myDir = currentDir as ObjectKey;
    var openState = openDrawer[myDir];

    return `drawer-${currentDir}-${openState}`;
  };

  const constructUlClassName: () => string = () => {
    return `drawer-${currentDir}-container`;
  };

  return (
    <div>
      <div className="btn-dirs">
        <button onClick={onCloseBottom} className="btn-dir">
          <p>{direction}</p>
          <MenuIcon className="button" id="button" />
        </button>
      </div>

      <nav className={constructClassName()}>
        <ul id="drawer-container" className={constructUlClassName()}>
          <li>{constructClassName()}</li>
          <li>Item Two</li>
          <li>Item Three</li>
          <li>Item Four</li>
        </ul>
      </nav>
    </div>
  );
};

export default MyDrawer;
