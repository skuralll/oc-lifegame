// Chakra UI を使ったNavBar
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { QRCodeCanvas } from 'qrcode.react';

type QRModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const QRModal = ({ isOpen, onOpen, onClose }: QRModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ソースコード</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <QRCodeCanvas
            value={'https://github.com/skuralll/oc-lifegame'}
            size={384}
            bgColor={'#FFFFFF'}
            fgColor={'#000000'}
            level={'L'}
            includeMargin={true}
            imageSettings={{
              src: '/favicon.ico',
              x: undefined,
              y: undefined,
              height: 24,
              width: 24,
              excavate: true,
            }}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
