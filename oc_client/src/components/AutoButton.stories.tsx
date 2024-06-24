import type { Meta, StoryObj } from "@storybook/react";

import { AutoButton } from "./AutoButton";

const meta: Meta<typeof AutoButton> = {
  title: "components/AutoButton",
  component: AutoButton,
  tags: ["autodocs"],
  args: { isAuto: true, setIsAuto: undefined },
  argTypes: { isAuto: { control: "boolean" } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
