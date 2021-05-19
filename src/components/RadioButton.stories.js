import RadioButton from "./RadioButton";

export default {
  title: "RadioButton",
  component: RadioButton
};

const Template = (args, { argTypes }) => ({
  components: { RadioButton },
  props: Object.keys(argTypes),
  template: '<radio-button v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  label: "I am a radio button"
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "I am a disabled radio button",
  enabled: false
};

export const Checked = Template.bind({});
Checked.args = {
  label: "I am a checked radio button",
  checked: true
};






















