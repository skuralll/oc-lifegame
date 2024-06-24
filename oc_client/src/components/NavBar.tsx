// Chakra UI を使ったNavBar
import { Box, Flex, Icon, Spacer, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { GithubFilled } from '@ant-design/icons';

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
          <GithubFilled style={{ fontSize: '24px', color: '#fff' }} />
        </Link>
      </Box>
    </Flex>
  );
};
