import type { Meta, StoryObj } from "@storybook/react";

import { BaseController } from "./BaseController";

const meta: Meta<typeof BaseController> = {
  title: "components/BaseController",
  component: BaseController,
  tags: ["autodocs"],
  args: { isAuto: true, setIsAuto: undefined },
  argTypes: { isAuto: { control: "boolean" } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
