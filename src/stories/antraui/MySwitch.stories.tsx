import { ComponentStory, ComponentMeta } from '@storybook/react';
import MySwitch from '../../components/MySwitch/MySwitch';

export default {
    title: 'Example/MySwitch',
    component: MySwitch,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof MySwitch>;

const Template: ComponentStory<typeof MySwitch> = (args) => <MySwitch {...args} />;

export const Checked = Template.bind({});
Checked.args = {
    checked: true
}

export const CheckedPrimary= Template.bind({});
CheckedPrimary.args = {
    checked: true,
    color: "primary"
}
export const CheckedSecondary= Template.bind({});
CheckedSecondary.args = {
    checked: true,
    color: "secondary"
}

export const CheckedWarning= Template.bind({});
CheckedWarning.args = {
    checked: true,
    color: "warning"
}

export const CheckedDefault= Template.bind({});
CheckedDefault.args = {
    checked: true,
    color: "default"
}

export const Unchecked = Template.bind({});