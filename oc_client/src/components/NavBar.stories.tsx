import type { Meta, StoryObj } from "@storybook/react";

import { NavBar } from "./NavBar";

const meta: Meta<typeof NavBar> = {
  title: "components/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
