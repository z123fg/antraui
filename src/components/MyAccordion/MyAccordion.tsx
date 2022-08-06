import React, {
  ChangeEvent,
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useLayoutEffect,
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
  // height of detail Component
  detailHeight?: string;
  // detail ref
  detailRef?: HTMLParagraphElement;
  // handleClick
  handleClick?: () => void;
  //
  // controlled variant props
  // panelId?: string;
  // user passed active state for controlled variant
  active?: boolean;
  isActive?: boolean;
  // // active state for controlled logic
  // isActive?: boolean;
  // // handle controlled onClick
  // handleCtrldClick?: (evt: React.SyntheticEvent) => void;
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

// Accordion Context

const AccordionCtx = createContext<AccordionContextProps>({});

const AccordionProvider: FC<AccordionContextProps> = ({
  summary = "Example Summary",
  subSummary = "Example Sub-Summary",
  detail = "Example Detail.",
  bgColor = "rgba(255, 255, 255, 1)",
  bgColorDisabled = "rgba(0, 0, 0, 0.12)",
  color = "rgba(0, 0, 0, 0.87)",
  colorSecondary = "rgba(0, 0, 0, 0.54)",
  expandIcon = <DefaultExpandIcon />,
  disabled = false,
  active = false,
  children,
}) => {
  const [expanded, expandedSet] = useState(false);
  const [isActive, isActiveSet] = useState(false);

  const handleClick = useCallback(() => {
    expandedSet(!expanded);
  }, [expanded]);

  // const handleCtrldClick = (panelId: string) => (evt: React.SyntheticEvent, idx: string) => {
  //   console.log(evt.target);
    
  //   isActiveSet(panelId === idx ? true : false);
  // }


  return (
    <AccordionCtx.Provider
      value={{
        handleClick,
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
        isActive,
        // handleCtrldClick,
      }}
    >
      {children}
    </AccordionCtx.Provider>
  );
};

const DetailEl: FC<AccordionContextProps> = ({ detail }) => {
  const [detailHeight, detailHeightSet] = useState("0px");
  const detailRef = useRef<HTMLParagraphElement>(null!);
  const { expanded, color } = useContext(AccordionCtx);

  useLayoutEffect(() => {
    detailHeightSet(`${detailRef.current?.scrollHeight}`);
  }, [expanded, detailRef]);

  return (
    <>
      <div
        className={classNames.wrapper.detail}
        style={{
          color: color,
          maxHeight: expanded ? `${detailHeight + 32}px` : `0px`,
          padding: expanded ? 16 : 0,
        }}
      >
        {expanded && (
          <p ref={detailRef} className={classNames.typography.detail}>
            {detail}
          </p>
        )}
      </div>
    </>
  );
};

// Variant Components

const SimpleVariant: FC = () => {
  const {
    handleClick,
    expanded,
    summary,
    detail,
    bgColor,
    bgColorDisabled,
    color,
    expandIcon,
    disabled,
  } = useContext(AccordionCtx);

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={classNames.container.panel}
      style={{
        backgroundColor: disabled ? bgColorDisabled : bgColor,
        marginBottom: expanded ? 16 : 0,
        marginTop: expanded ? 16 : 0,
      }}
    >
      <div className={classNames.container.summary} style={{ color: color }}>
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

      <DetailEl detail={detail} />
    </button>
  );
};

const ControlledVariant: FC = () => {
  const {
    expanded,
    handleClick,
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
      <button
        disabled={disabled}
        className={classNames.container.panel}
        style={{
          backgroundColor: disabled ? bgColorDisabled : bgColor,
          marginBottom: expanded ? 16 : 0,
          marginTop: expanded ? 16 : 0,
        }}
      >
        <div className={classNames.container.summary} style={{ color: color }}>
          <p className={classNames.typography.summary}>{summary}</p>

          {subSummary ? (
            <p
              className={classNames.typography.subSummary}
              style={{ color: colorSecondary }}
            >
              <>
                {subSummary?.length > 40
                  ? `${subSummary?.substring(0, 40)}...`
                  : subSummary}
              </>
            </p>
          ) : null}

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

        <DetailEl detail={detail} />
      </button>
    </>
  );
};

const ActionVariant: FC = () => {
  const {
    expanded,
    handleClick,
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
      <h3>{summary}</h3>
      <h3>{subSummary}</h3>
      <h3>{detail}</h3>
    </>
  );
};

const MyAccordion: FC<AccordionContextProps> = (props) => {
  switch (props.variant) {
    case "simple":
      return (
        <AccordionProvider {...props}>
          <SimpleVariant />
        </AccordionProvider>
      );
    case "controlled":
      return (
        <AccordionProvider {...props}>
          <ControlledVariant />
        </AccordionProvider>
      );
    case "action":
      return (
        <AccordionProvider {...props}>
          <ActionVariant />
        </AccordionProvider>
      );
    default:
      return (
        <AccordionProvider {...props}>
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
// <p
//   className="antraUI-Accordion-summary-subtitle-typography"
//   style={{ color: colorSecondary }}
// >
//   {!expandedState && subSummary.length > 40
//     ? `${subSummary.substring(0, 40)}...`
//     : subSummary}
// </p>
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
