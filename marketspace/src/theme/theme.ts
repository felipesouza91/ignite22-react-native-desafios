import { extendTheme } from 'native-base'

const appTheme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
        h: 45,
        color: 'gray.700',
      },
      variants: {
        black: ({ colorScheme }) => {
          return {
            bg: `gray.100`,
            _pressed: { bg: 'gray.200' },
          }
        },
        blue: ({ colorScheme }) => {
          return {
            bg: `blue.100`,
            _pressed: { bg: 'blue.500' },
          }
        },
        gray: ({ colorScheme }) => {
          return {
            bg: `gray.500`,
            _pressed: { bg: 'gray.400' },
          }
        },
      },
    },
  },
  colors: {
    product: {
      blue: '',
      'blue-light': '',
      'red-light': '',
    },
    blue: {
      100: '#647AC7',
      500: '#364D9D',
    },
    red: {
      200: '#EE7979',
    },
    gray: {
      100: '#1A181B',
      200: '#3E3A40',
      300: '#5F5B62',
      400: '#9F9BA1',
      500: '#D9D8DA',
      600: '#EDECEE',
      700: '#F7F7F8',
    },
  },
  lineHeights: {
    app: '1.3',
  },
  fontConfig: {
    Karla: {
      400: {
        normal: 'Karla_400Regular',
      },
      700: {
        normal: 'Karla_700Bold',
      },
    },
  },
  fonts: {
    heading: 'Karla_700Bold',
    body: 'Karla_400Regular',
    mono: 'Karla_400Regular',
  },
})

export { appTheme }
