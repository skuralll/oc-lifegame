import type { Meta, StoryObj } from "@storybook/react";

import { LifeGameWrapper } from "./LifeGameWrapper";

const meta: Meta<typeof LifeGameWrapper> = {
  title: "components/LifeGameWrapper",
  component: LifeGameWrapper,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
