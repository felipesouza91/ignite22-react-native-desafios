import { extendTheme } from 'native-base'

const appTheme = extendTheme({
  colors: {
    product: {
      blue: '#364D9D',
      'blue-light': '#647AC7',
      'red-light': '#EE7979',
    },
    base: {
      'gray-1': '#1A181B',
      'gray-2': '#3E3A40',
      'gray-3': '#5F5B62',
      'gray-4': '#9F9BA1',
      'gray-5': '#D9D8DA',
      'gray-6': '#EDECEE',
      'gray-7': '#F7F7F8',
    },
  },
  lineHeights: {
    app: '130%',
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
