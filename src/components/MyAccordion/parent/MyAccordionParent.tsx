//
// COMPONENT FOR TESTING PURPOSES ONLY
//

import { FC } from "react";
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
    detail: "Basic Accordion Detail.",
  },
  {
    id: 1,
    summary: "Basic Accordion #2 Summary",
    detail: "Basic Accordion Detail.",
  },
  {
    id: 2,
    summary: "Basic Accordion #3 Summary",
    detail: "Basic Accordion Detail.",
  },
  {
    id: 3,
    summary: "Basic Accordion #4 Summary",
    detail: "Basic Accordion Detail.",
  },
];

const MyAccordionParent: FC = () => {
  return (
    <div style={{ display: "block", maxWidth: 800, marginTop: 20 }}>
      {accordionData.map((tab) => (
        <MyAccordion
          key={tab.id}
          summary={tab.summary}
          detail={tab.detail}
          // variant="controlled"
          // isExpanded={true}
          // disabled={true}
          // expandIcon={<UserExpandIcon />}
          // bgColor="red"
          // bgColorDisabled=""
          // color=""
          // colorSecondary=""
        />
      ))}
    </div>
  );
};
export default MyAccordionParent;
