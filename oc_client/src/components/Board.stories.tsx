import type { Meta, StoryObj } from "@storybook/react";

import { Board } from "./Board";

const meta: Meta<typeof Board> = {
  title: "components/Board",
  component: Board,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
