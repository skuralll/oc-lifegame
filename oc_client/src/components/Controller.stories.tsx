import type { Meta, StoryObj } from "@storybook/react";

import { Controller } from "./Controller";

const meta: Meta<typeof Controller> = {
  title: "components/Controller",
  component: Controller,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
