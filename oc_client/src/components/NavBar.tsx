// Chakra UI を使ったNavBar
import { Box, Flex, Spacer, Text, Link } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

type NavBarProps = {};

export const NavBar = ({}: NavBarProps) => {
  return (
    <Flex bg="rgb(77,122,170)" p={4} align="center" px={12} mb={8}>
      <Box>
        <Text color="white" fontSize="xl" fontWeight="bold">
          ライフゲーム
        </Text>
      </Box>
      <Spacer />
      <Box ml={4}>
        <Link href="https://github.com/skuralll/oc-lifegame">
          <FaGithub color="#fff" size="26px" />
        </Link>
      </Box>
    </Flex>
  );
};
