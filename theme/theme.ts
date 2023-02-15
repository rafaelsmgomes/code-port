import '@emotion/react'
import { css } from '@emotion/react'

type ThemeType = typeof emotionTheme

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
export const emotionTheme = {
  grid: { desktop: 1140, gap: 30, rowGap: 16, column: 82 }, // 84px per column
  headerHeight: 58,
  pageContainer: { top: 16 },

  colors: {
    base: {
      white: '#fff',
      black: '#000',
    },
    primary: {
      50: '#ede6f5',
      100: '#d2c3e7',
      200: '#b59bd8',
      300: '#9872c9',
      400: '#8253bd',
      500: '#6c34b2',
      600: '#632fac', // primary
      700: '#5727a3',
      800: '#4b219b',
      900: '#38148d',
    },
    purple: {
      50: '#fae4fc',
      100: '#f2bcf8',
      200: '#e98df5',
      300: '#df55f2',
      400: '#d602ee',
      500: '#cd00ea',
      600: '#ba00e5',
      700: '#a200e0',
      800: '#8b00dd',
      900: '#5c00d2',
    },
    green: {
      25: `rgba(246, 254, 249, 1)`,
      50: `rgba(237, 252, 242, 1)`,
      100: `rgba(211, 248, 223, 1)`,
      200: `rgba(170, 240, 196, 1)`,
      300: `rgba(115, 226, 163, 1)`,
      400: `rgba(60, 203, 127, 1)`,
      500: `rgba(22, 179, 100, 1)`,
      600: `rgba(9, 146, 80, 1)`,
      700: `rgba(8, 116, 67, 1)`,
      800: `rgba(9, 92, 55, 1)`,
      900: `rgba(8, 76, 46, 1)`,
    },
    violet: {
      50: '#fbe2f0',
      100: '#f5b6da',
      200: '#f186c0',
      300: '#ef4fa6',
      400: '#ee0290',
      500: '#ef0078',
      600: '#dd0074',
      700: '#c7006e',
      800: '#b1006a',
      900: '#880061',
    },
    red: {
      50: '#ffeaed',
      100: '#ffcbcf',
      200: '#f89793',
      300: '#f16e69',
      400: '#fb4a41',
      500: '#ff361f',
      600: '#f12a21',
      700: '#df1b1b', //recomended
      800: '#d20e13',
      900: '#c40000',
    },
    orange: {
      50: '#fff2df',
      100: '#ffddb0',
      200: '#ffc77d',
      300: '#ffaf49',
      400: '#ff9e22',
      500: '#ff8d00',
      600: '#fa8100',
      700: '#f47100',
      800: '#ee6002', //recomended
      900: '#e54304',
    },
    gray: {
      50: '#F9FAFB',
      100: '#F2F4F7',
      200: '#EAECF0',
      300: '#D0D5DD',
      400: '#98A2B3',
      500: '#667085',
      600: '#475467',
      700: '#344054',
      800: '#1D2939',
      900: '#101828',
    },
    google: '#4285F4',
    blue: {
      50: '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#2196F3',
      600: '#1E88E5',
      700: '#1976D2',
      800: '#1565C0', //recomended
      900: '#0D47A1',
    },
  },
}

export const globalStyles = [
  {
    body: {
      fontSize: '62.75%',
      fontFamily: 'Geometria, Avenir, Avant Garde',
    },
  },
]
