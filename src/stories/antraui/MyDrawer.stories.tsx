import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MyDrawer from "../../components/MyDrawer/MyDrawer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/MyDrawer",
  component: MyDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MyDrawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyDrawer> = (args) => (
  <MyDrawer {...args}></MyDrawer>
);

export const Left = Template.bind({});
Left.args = {
  anchor: "left",
};
export const Right = Template.bind({});
Right.args = {
  anchor: "right",
};
export const Top = Template.bind({});
Top.args = {
  anchor: "top",
};
export const Bottom = Template.bind({});
Bottom.args = {
  anchor: "bottom",
};
