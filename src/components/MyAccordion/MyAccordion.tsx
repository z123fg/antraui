import { ChangeEvent, FC, ReactNode, useCallback, useState } from "react";

type AccordianVariant = "simple" | "controlled" | "action";

interface IMyAccordionProps {
  // user customize summary
  summary?: string;
  // user customize detail
  detail?: string;
  // user customize bgColor
  bgColor?: string;
  // user customize color
  color?: string;
  // user customize accordion variant
  variant?: AccordianVariant;
  // accordion expanded state
  isExpanded?: string | boolean;
  // customize expandIcon
  defaultExpandIcon?: ReactNode;
  // disable accordion
  disabled?: boolean;
  // onchange event
  onClick?: (evt: MouseEvent) => void;
}

const DefaultExpandIcon: FC = () => {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </svg>
  );
};

const MyAccordion: FC<IMyAccordionProps> = ({
  summary = "Accordion Summary",
  detail = "This is an Accordion Detail",
  bgColor = "rgba(255, 255, 255, 1)",
  color = "rgba(0, 0, 0, 0.87)",
  variant = "simple",
  isExpanded = false,
  defaultExpandIcon = <DefaultExpandIcon />,
  disabled = false,
  onClick,
}) => {
  const [expandedState, setExpandedState] = useState(isExpanded);

  const handleClick = useCallback(() => {
    setExpandedState(!expandedState);
  }, [expandedState]);

  return (
    <article
      className="antraUI-Accordion-container"
      style={{ backgroundColor: bgColor, marginBottom: expandedState ? 16 : 0}}
    >
      <div
        onClick={handleClick}
        className="antraUI-Accordion-summary-container"
        style={{ color: color }}
      >
        <p className="antraUI-Accordion-summary-typography">{summary}</p>

        <div className="antraUI-Accordion-icon" style={{ fill: color }}>
          {defaultExpandIcon}
        </div>
      </div>

      {expandedState && (
        <>
          <div
            className="antraUI-Accordion-detail-container"
            style={{ color: color }}
          >
            <p className="antraUI-Accordion-detail-typography">{detail}</p>
          </div>
        </>
      )}
    </article>
  );
};
export default MyAccordion;
