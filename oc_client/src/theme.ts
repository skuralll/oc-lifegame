//theme.ts
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'rgb(27,32,43)',
        color: 'white',
      },
      html: {
        height: '100%',
      },
    },
  },
});
