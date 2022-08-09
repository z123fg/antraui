import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MyButton from "../../components/MyButton/MyButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/MyButton",
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args}>Submit</MyButton>
);

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};

export const Default = Template.bind({});
Default.args = {
  color: "default",
};
