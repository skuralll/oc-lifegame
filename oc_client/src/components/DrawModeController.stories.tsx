import type { Meta, StoryObj } from "@storybook/react";

import { DrawModeController } from "./DrawModeController";

const meta: Meta<typeof DrawModeController> = {
  title: "components/DrawModeController",
  component: DrawModeController,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
