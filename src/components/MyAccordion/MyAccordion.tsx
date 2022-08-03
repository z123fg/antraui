import {
  ChangeEvent,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type AccordianVariant = "simple" | "controlled" | "action";

interface IMyAccordionProps {
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
  isExpanded?: string | boolean;
  // customize expandIcon
  expandIcon?: ReactNode;
  // disable accordion
  disabled?: boolean;
  // onChange event
  onChange?: (evt: ChangeEvent) => void;
  // onClick event
  onClick?: () => void;
}

const DefaultExpandIcon: FC = () => {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </svg>
  );
};

// defaults
const defaultSummary = "Example Summary";
const defaultSubSummary = "Example Sub-Summary";
const defaultDetail = "Example Detail.";
const defaultBgColor = "rgba(255, 255, 255, 1)";
const defaultBgColorDisabled = "rgba(0, 0, 0, 0.12)";
const defaultColor = "rgba(0, 0, 0, 0.87)";
const defaultColorSecondary = "rgba(0, 0, 0, 0.54)";
const defaultVariant = "controlled";
const defaultExpandIcon = <DefaultExpandIcon />;
const defaultExpandedState = false;
const defaultDisabledState = false;

const MyAccordion: FC<IMyAccordionProps> = ({
  //
  summary = defaultSummary,
  subSummary = defaultSubSummary,
  detail = defaultDetail,
  bgColor = defaultBgColor,
  bgColorDisabled = defaultBgColorDisabled,
  color = defaultColor,
  colorSecondary = defaultColorSecondary,
  variant = defaultVariant,
  expandIcon = defaultExpandIcon,
  isExpanded = defaultExpandedState,
  disabled = defaultDisabledState,
  onChange,
  onClick,
  //
}) => {
  const [expandedState, setExpandedState] = useState(isExpanded);
  // const [detailHeight, setDetailHeight] = useState(0);
  // const detailRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    if (disabled === false) {
      setExpandedState(!expandedState);
    }
  }, [expandedState]);

  const summaryChildren = (
    <>
      <p className="antraUI-Accordion-summary-typography">{summary}</p>

      {variant === "controlled" && (
        <p
          className="antraUI-Accordion-summary-subtitle-typography"
          style={{ color: colorSecondary }}
        >
          {!expandedState && subSummary.length > 40
            ? `${subSummary.substring(0, 40)}...`
            : subSummary}
        </p>
      )}

      <div
        className="antraUI-Accordion-icon"
        style={{
          fill: color,
          transform: expandedState ? "rotate(180deg)" : "",
        }}
      >
        {expandIcon}
      </div>
    </>
  );

  return (
    <article
      className="antraUI-Accordion-container"
      style={{
        backgroundColor: disabled ? bgColorDisabled : bgColor,
        marginBottom: expandedState ? 16 : 0,
      }}
    >
      {variant === "simple" ? (
        <div
          onClick={handleClick}
          className="antraUI-Accordion-summary-container"
          style={{ color: color }}
        >
          {summaryChildren}
        </div>
      ) : (
        <div
          onClick={onClick}
          className="antraUI-Accordion-summary-container"
          style={{ color: color }}
        >
          {summaryChildren}
        </div>
      )}

      {expandedState && (
        <div
          className="antraUI-Accordion-detail-container"
          style={{ color: color }}
        >
          <p className="antraUI-Accordion-detail-typography">{detail}</p>
        </div>
      )}
    </article>
  );
};
export default MyAccordion;
