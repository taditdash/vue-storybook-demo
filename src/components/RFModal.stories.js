import RFModal from "./RFModal.vue";

import { action } from "@storybook/addon-actions";

export default {
  title: "RFModal",
  component: RFModal,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const actionsData = {
  onModalSave: action("onModalSave")
};

const Template = (args, { argTypes }) => ({
  components: { RFModal },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: '<RFModal v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  header: "Hey I am the modal header",
  body: "I am the body. You can show anything here."
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  hideHeader: true
};

export const SingleActionButton = Template.bind({});
SingleActionButton.args = {
  header: "Terms and Conditions",
  body: "Sample terms and conditions",
  singleButtonText: "I understand"
};
