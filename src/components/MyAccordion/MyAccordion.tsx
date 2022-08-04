import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type AccordianVariant = "simple" | "controlled" | "action";

interface AccordionContextProps {
  // user customize summary
  summary?: string;
  // user customize sub-summary (controlled variant only)
  subSummary?: string;
  // user customize detail
  detail?: string;
  // user customize bgColor
  bgColor?: string;
  // user customize bgColorDisabled
  bgColorDisabled?: string;
  // user customize color
  color?: string;
  // user customize secondary color (sub-summary)
  colorSecondary?: string;
  // user customize accordion variant
  variant?: AccordianVariant;
  // accordion expanded state
  expanded?: string | boolean;
  // customize expandIcon
  expandIcon?: ReactNode;
  // disable accordion
  disabled?: boolean;
  // children
  children?: ReactNode;
  // onSelect event
  onSelect?: (evt: React.SyntheticEvent) => void;
  // handleClick
  handleClick?: () => void;
  // height of detail Component
  detailHeight?: string;
}

// class names
const classNames = {
  container: {
    panel: "accordion__panel--container",
    summary: "accordion__summary--container",
  },
  typography: {
    summary: "accordion__summary--typography",
    subSummary: "accordion__subSummary--typography",
    detail: "accordion__detail--typography",
  },
  wrapper: {
    icon: "accordion__icon--wrapper",
    detail: "accordion__detail--wrapper",
  },
};

// defaults

const DefaultExpandIcon: FC = () => {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </svg>
  );
};

const defaultSummary = "Example Summary";
const defaultSubSummary = "Example Sub-Summary";
const defaultDetail = "Example Detail.";
const defaultBgColor = "rgba(255, 255, 255, 1)";
const defaultBgColorDisabled = "rgba(0, 0, 0, 0.12)";
const defaultColor = "rgba(0, 0, 0, 0.87)";
const defaultColorSecondary = "rgba(0, 0, 0, 0.54)";
const defaultExpandIcon = <DefaultExpandIcon />;
const defaultDisabledState = false;

// Accordion Context

const AccordionCtx = createContext<AccordionContextProps>({});

const AccordionProvider: FC<AccordionContextProps> = ({
  summary = defaultSummary,
  subSummary = defaultSubSummary,
  detail = defaultDetail,
  bgColor = defaultBgColor,
  bgColorDisabled = defaultBgColorDisabled,
  color = defaultColor,
  colorSecondary = defaultColorSecondary,
  expandIcon = defaultExpandIcon,
  disabled = defaultDisabledState,
  children,
}) => {
  const [expanded, expandedSet] = useState(false);
  const [detailHeight, detailHeightSet] = useState("0px");
  const detailRef = useRef<HTMLParagraphElement>(null!);

  const handleClick = useCallback(() => {
    if (!disabled) {
      expandedSet(!expanded);
    }
  }, [expanded]);

  useEffect(() => {
    detailHeightSet(
      expanded ? `${detailRef.current?.scrollHeight + 32}px` : `0px`
    );
  }, [expanded, detailRef]);

  return (
    <AccordionCtx.Provider
      value={{
        handleClick,
        expanded,
        detailHeight,
        // defaults
        summary,
        subSummary,
        detail,
        bgColor,
        bgColorDisabled,
        color,
        colorSecondary,
        expandIcon,
        disabled,
      }}
    >
      {children}
    </AccordionCtx.Provider>
  );
};

// Variant Components

const SimpleVariant: FC = () => {
  const {
    expanded,
    summary,
    detail,
    bgColor,
    bgColorDisabled,
    color,
    expandIcon,
    disabled,
    detailHeight,
    handleClick,
  } = useContext(AccordionCtx);

  return (
    <article
      className={classNames.container.panel}
      style={{
        backgroundColor: disabled ? bgColorDisabled : bgColor,
        marginBottom: expanded ? 16 : 0,
      }}
    >
      <div onClick={handleClick} className={classNames.container.summary} style={{ color: color }}>
        <p className={classNames.typography.summary}>{summary}</p>
        <div
          className={classNames.wrapper.icon}
          style={{
            fill: color,
            transform: expanded ? "rotate(180deg)" : "",
          }}
        >
          {expandIcon}
        </div>
      </div>
      <div
        className={classNames.wrapper.detail}
        style={{
          color: color,
          maxHeight: detailHeight,
          padding: expanded ? 16 : 0,
        }}
      >
        <p className={classNames.typography.detail}>{detail}</p>
      </div>
    </article>
  );
};

const ControlledVariant: FC = () => {
  const {
    expanded,
    summary,
    subSummary,
    detail,
    bgColor,
    bgColorDisabled,
    color,
    colorSecondary,
    expandIcon,
    disabled,
  } = useContext(AccordionCtx);

  return (
    <>
      <h1>Controlled Component</h1>
      <h3>{summary}</h3>
      <h3>{subSummary}</h3>
      <h3>{detail}</h3>
    </>
  );
};

const ActionVariant: FC<AccordionContextProps> = () => {
  const {
    expanded,
    summary,
    subSummary,
    detail,
    bgColor,
    bgColorDisabled,
    color,
    colorSecondary,
    expandIcon,
    disabled,
  } = useContext(AccordionCtx);

  return (
    <>
      <h1>Action Component</h1>
      <h3>{summary}</h3>
      <h3>{subSummary}</h3>
      <h3>{detail}</h3>
    </>
  );
};

const MyAccordion: FC<AccordionContextProps> = ({ variant }) => {
  switch (variant) {
    case "simple":
      return (
        <AccordionProvider>
          <SimpleVariant />
        </AccordionProvider>
      );
    case "controlled":
      return (
        <AccordionProvider>
          <ControlledVariant />
        </AccordionProvider>
      );
    case "action":
      return (
        <AccordionProvider>
          <ActionVariant />
        </AccordionProvider>
      );
    default:
      return (
        <AccordionProvider>
          <SimpleVariant />
        </AccordionProvider>
      );
  }
};
export default MyAccordion;

// return (
// <>

// {/* <article
//   className="antraUI-Accordion-container"
//   style={{
//     backgroundColor: disabled ? bgColorDisabled : bgColor,
//     marginBottom: expandedState ? 16 : 0,
//   }}
// >
//   <div
//     onClick={handleClick}
//     className="antraUI-Accordion-summary-container"
//     style={{ color: color }}
//   >
//     <p className="antraUI-Accordion-summary-typography">{summary}</p>

//     {variant === "controlled" && (
//       <p
//         className="antraUI-Accordion-summary-subtitle-typography"
//         style={{ color: colorSecondary }}
//       >
//         {!expandedState && subSummary.length > 40
//           ? `${subSummary.substring(0, 40)}...`
//           : subSummary}
//       </p>
//     )}

//     <div
//       className="antraUI-Accordion-icon"
// style={{
//   fill: color,
//   transform: expandedState ? "rotate(180deg)" : "",
// }}
//     >
//       {expandIcon}
//     </div>
//   </div>

//   <div
//     className="antraUI-Accordion-detail-container"
// style={{
//   color: color,
//   maxHeight: `${detailHeight}`,
//   padding: expandedState ? 16 : 0,
// }}
//   >
//     {expandedState && (
//       <p ref={detailRef} className="antraUI-Accordion-detail-typography">
//         {detail}
//       </p>
//     )}
//   </div>
// </article> */}
// </>
// );
