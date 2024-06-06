import type { Meta, StoryObj } from "@storybook/react";

import { LifeGame } from "./LifeGame";

const meta: Meta<typeof LifeGame> = {
  title: "components/LifeGame",
  component: LifeGame,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
