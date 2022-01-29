import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    blue: {
      300: '#3F3D56',
      500: '#0968C0',
      700: '#8FB7E3',
      750: '#9DC9EE',
      800: '#BAD5F3'
    },
    gray: {
      900: '#F8F7F7',
      300: '#666665',
      200: '#434343',
      100: '#111'
    },
    red: {
      600: '#df1545'
    },
    green: {
      600: '#168821'
    }
  },
  // fonts: {
  //   heading: "Inter",
  //   body: "Inter",
  // },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.300'
      }
    }
  }
})
