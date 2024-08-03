// Chakra UI を使ったNavBar
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Center,
} from '@chakra-ui/react';
import { QRCodeCanvas } from 'qrcode.react';

type QRModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const QRModal = ({ isOpen, onOpen, onClose }: QRModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale" size="lg" isCentered>
      <ModalOverlay />
      <ModalContent bg={'rgb(40,48,63)'}>
        <ModalHeader>ソースコード</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center pt={4} pb={8}>
            <QRCodeCanvas
              value={'https://github.com/skuralll/oc-lifegame'}
              size={384}
              bgColor={'rgb(40,48,63)'}
              fgColor={'#FFFFFF'}
              level={'L'}
              includeMargin={false}
            />
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
