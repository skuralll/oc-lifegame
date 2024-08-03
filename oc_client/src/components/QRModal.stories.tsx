import type { Meta, StoryObj } from "@storybook/react";

import { QRModal } from "./QRModal";

const meta: Meta<typeof QRModal> = {
  title: "components/QRModal",
  component: QRModal,
  tags: ["autodocs"],
  args: { isOpen: true, onOpen: undefined, onClose: undefined },
  argTypes: { isOpen: { control: "boolean" } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
