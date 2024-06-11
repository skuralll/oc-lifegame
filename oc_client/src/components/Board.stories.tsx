import type { Meta, StoryObj } from "@storybook/react";

import { Board } from "./Board";
import { BoardProvider } from "../contexts/BoardProvider";
import { MouseStateProvider } from "../contexts/MouseStateProvider";

const meta: Meta<typeof Board> = {
  title: "components/Board",
  component: Board,
  tags: ["autodocs"],
  args: { cellSize: undefined },
  argTypes: { cellSize: { control: "number" } },
  decorators: [
    (Story) => (
      <BoardProvider>
        <MouseStateProvider>
          <Story />
        </MouseStateProvider>
      </BoardProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cellSize: 30,
  },
};
