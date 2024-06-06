import type { Meta, StoryObj } from "@storybook/react";

import { Cell } from "./Cell";
import { BoardProvider } from "../contexts/BoardProvider";
import { Layer, Stage } from "react-konva";

const meta: Meta<typeof Cell> = {
  title: "components/Cell",
  component: Cell,
  tags: ["autodocs"],
  args: {
    col: undefined,
    row: undefined,
    x: undefined,
    y: undefined,
    cellSize: undefined,
    alive: true,
  },
  argTypes: {
    col: { control: "number" },
    row: { control: "number" },
    x: { control: "number" },
    y: { control: "number" },
    cellSize: { control: "number" },
    alive: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <BoardProvider>
        <Stage width={100} height={100}>
          <Layer>
            <Story />
          </Layer>
        </Stage>
      </BoardProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    x: 10,
    y: 10,
    cellSize: 50,
    alive: true,
  },
};
