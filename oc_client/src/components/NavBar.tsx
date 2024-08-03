// Chakra UI を使ったNavBar
import {
  Box,
  Flex,
  Spacer,
  Text,
  Link,
  HStack,
  IconButton,
  Icon,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { FaGithub, FaQrcode } from 'react-icons/fa';
import { QRModal } from './QRModal';

type NavBarProps = {};

export const NavBar = ({}: NavBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {' '}
      <Flex bg="rgb(77,122,170)" p={4} align="center" px={12} mb={8}>
        <Box>
          <Text color="white" fontSize="xl" fontWeight="bold">
            ライフゲーム
          </Text>
        </Box>
        <Spacer />
        <HStack ml={4} spacing={4}>
          <Link href="https://github.com/skuralll/oc-lifegame">
            <FaGithub color="#fff" size="26px" />
          </Link>
          <IconButton
            aria-label="QRCode"
            variant="ghost"
            width={0}
            height={0}
            color={'white'}
            icon={<Icon as={FaQrcode} />}
            onClick={onOpen}
          />
        </HStack>
      </Flex>
      <QRModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};
