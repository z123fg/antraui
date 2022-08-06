//
// COMPONENT FOR TESTING PURPOSES ONLY
//

import { ChangeEvent, FC, useState } from "react";
import MyAccordion from "../MyAccordion";

const UserExpandIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" />
    </svg>
  );
};

const accordionData = [
  {
    id: 0,
    summary: "Basic Accordion #1 Summary",
    subSummary: "Basic Sub-Summary",
    detail: "Basic Accordion Detail.",
  },
  {
    id: 1,
    summary: "Basic Accordion #2 Summary",
    subSummary: "Basic Sub-Summary",
    detail: "Basic Accordion Detail.",
  },
  {
    id: 2,
    summary: "Basic Accordion #3 Summary",
    subSummary: "Basic Sub-Summary",
    detail: "Basic Accordion Detail.",
  },
  {
    id: 3,
    summary: "Basic Accordion #4 Summary",
    subSummary: "Basic Sub-Summary",
    detail: "Basic Accordion Detail.",
  },
];

const MyAccordionParent: FC = () => {
  const [active, activeSet] = useState(false);

  // console.log(expanded);


  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, marginTop: 20 }}>
        <h1>Simple Component</h1>
        <MyAccordion
          variant="simple"
          summary="My Example Summary"
          detail="Basic Accordion Detail. Basic Accordion Detail. Basic Accordion Detail. Basic Accordion Detail. Basic Accordion Detail. Basic Accordion Detail. Basic Accordion Detail. Basic Accordion Detail. Basic Accordion Detail. Basic Accordion Detail. Basic Accordion Detail. Basic Accordion Detail. Basic Accordion Detail. Basic Accordion Detail. Basic Accordion Detail. Basic Accordion Detail."
        />
        <MyAccordion variant="simple" />
        <MyAccordion variant="simple" />
        <MyAccordion variant="simple" />

        <h1>Controlled Component</h1>
        {accordionData.map((idx) => (
          <MyAccordion
            variant="controlled"
            // panelId={`panel-${idx}`}
            active={active}
            summary={idx.summary}
            subSummary={idx.subSummary}
            detail={idx.detail}
          />
        ))}

        <h1>Action Component</h1>
        {/* <MyAccordion variant="action" /> */}
      </div>
    </div>
  );
};
export default MyAccordionParent;
