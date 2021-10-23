import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      dark: '#002856', // Azul-Conecta
      main: '#3F96B4', // Blue
      light: '#C5DFE9', // Light-Blue
      contrastText: '#fff',
      '#F00000': '#FFCCBC', // rojo 100
      white: '#FFFFFF',
      catskillWhite: '#F4F8FA',
      athensGray: '#F7F7F8',
      linkWater: '#EDF4FA',
      hawkesBlue: '#D4E6FD',
      polar: '#DAEFF8',
      emperor: '#545454',
      pomegranate: '#F44336',
      gray: '#8E8E8E',
      silverChalice: '#AAAAAA',
      cinnabar: '#E25141',
      bostonBlue: '#3F96B4',
      blueCharcoal: '#010716',
      corduroy: '#6F7271',
      zanah: '#D9ECDB',
      everglade: '#2A552A',
      alto: '#DADADA',
      codGray: '#1D1D1D',
      transparent: 'transparent',
      grey: '#E0E0E0',
      greyContainer: '#F7F8FA',
      roman: '#DE6761',
      red: '#E1251B',
      mainBlueHover: '#74B5CB',
    },
    secondary: {
      main: '#BBDEFB', // Blue-hover
      light: '#F4FAFE', // Grey1
      whiteLilac: '#F3F6FB',
      silver: '#c4c4c4',
      gray: '#828282',
      corduroy: '#6F7271',
      butterMilk: '#FFECB3',
      orange: '#F2994A',
      iron: '#DBDDE0',
      black: '#000',
      toryBlue: '#124692',
      red: '#E1591E',
    },
    success: {
      main: '#44b700',
      lima: '#76BC21',
    },
    background: {
      main: '#F3F6FB',
      dark: '#0E1621',
    },
    backgroundBanner: {
      main: '#E2EFFA',
      dark: '#0E1621',
    },
    button: {
      main: '#3F96B4',
      dark: '#6095A7',
    },
    buttonBorder: {
      main: '#AAAAAA',
      dark: '#3F96B4',
    },
    buttonBg: {
      main: '#FFFFFF',
      dark: '#0E1621',
    },
    buttonPanel: {
      main: '#F7F7F8',
      dark: '#1E2A36',
    },
    buttonSend: {
      main: '#3F96B4',
      dark: '#6095A7',
    },
    textButtonSend: {
      main: '#FFFFFF',
      dark: '#FFFFFF',
    },
    buttonPanelActive: {
      main: '#3F96B4',
      dark: '#0E1621',
    },
    TextButtonPanel: {
      main: '#002856',
      dark: '#FAFAFA',
    },
    TextButtonPanelActive: {
      main: '#FFFFFF',
      dark: '#FFFFFF',
    },
    boxBubble: {
      main: '#002856',
      dark: '#2B5378',
    },
    panel: {
      main: '#ffffff',
      dark: '#17212B',
    },
    tags: {
      main: '#F7F8FA',
      dark: '#17212B',
    },
    panelHover: {
      main: '#F3F6FB',
      dark: '#0E1621',
    },
    panelPrimary: {
      main: '#ffffff',
      dark: '#2B5378',
    },
    panelSecondary: {
      main: '#ffffff',
      dark: '#6095A7',
    },
    textPrimary: {
      main: '#002856',
      dark: '#3F96B4',
    },
    textSecondary: {
      main: '#6F7271',
      dark: '#6095A7',
    },
    headTable: {
      main: '#F4FAFE',
      dark: '#2D3740',
    },
    textHeadTable: {
      main: '#6F7271',
      dark: '#FAFAFA',
    },
    textInvert: {
      main: '#002856',
      dark: '#FAFAFA',
    },
    dividerTable: {
      main: '#C5DFE9',
      dark: '#6095A7',
    },
    boxPanelTable: {
      main: '#F4FAFE',
      dark: '#1E2A36',
    },
    borderTextInput: {
      main: '#D4E6FD',
      dark: '#17212B',
    },
    drawerTitle: {
      main: '#EDF4FA',
      dark: '#17212B',
    },
    // FIXME dark
    drawerInputsContainer: {
      main: '#F4F8FA',
      dark: 'black',
    },
  },

  typography: {
    fontFamily: 'Nunito',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    button: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '22px',
      textTransform: 'capitalize',
    },
    footer: {
      fontSize: '0.875rem',
      fontWeight: 300,
    },
  },
})

export default theme
