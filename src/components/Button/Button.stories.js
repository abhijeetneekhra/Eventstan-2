import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    property1: {
      options: ["button-disabled", "button-secondary", "button-primary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "button-disabled",
    className: {},
    createAnAccountClassName: {},
    text: "Create an account",
  },
};
