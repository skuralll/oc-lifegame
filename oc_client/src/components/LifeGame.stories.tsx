import type { Meta, StoryObj } from "@storybook/react";

import { LifeGame } from "./LifeGame";
import { BoardProvider } from "../contexts/BoardProvider";
import { ChakraProvider } from "@chakra-ui/react";

const meta: Meta<typeof LifeGame> = {
  title: "components/LifeGame",
  component: LifeGame,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <ChakraProvider>
        <BoardProvider>
          <Story />
        </BoardProvider>
      </ChakraProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
