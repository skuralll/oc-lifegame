import type { Meta, StoryObj } from '@storybook/react';

import { LifeGame } from './LifeGame';
import { BoardProvider } from '../contexts/BoardProvider';
import { MouseStateProvider } from '../contexts/MouseStateProvider';

const meta: Meta<typeof LifeGame> = {
  title: 'components/LifeGame',
  component: LifeGame,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
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

export const Primary: Story = {};
