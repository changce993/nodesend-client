export default {
  colors: {
    primary: '#FD6262',
    primaryHover: '#E45858',
    primaryLight: '#FD8181',
    primaryBg: '#FFF7F7',
    secondary: '#FD6262',
    black: '#070D10',
    lightBlack: '#404040',
    darkGray: '#909090',
    gray: '#CCCCCC',
    lightGray: '#EEEEEE',
    bgGray: '#F9F9FF',
    info: '#448AFF',
    lightInfo: '#ECF3FF',
    success: '#0BB07B',
    lightSuccess: '#E6F7F1',
    warning: '#FECE45',
    lightYellow: '#FFFAEC',
    error: '#E03F3F',
    lightError: '#FBEAEA',
    white: '#FFF',
    transparent: 'rgba(255,255,255,0)',
  },
  fontSize: {
    label: '10px',
    caption: '12px',
    label: '14px',
    paragraph: '16px',
    heading: '20px',
    subtitle: '24px',
    title: '32px',
    display1: '48px',
    display2: '64px',
    display3: '80px',
    display4: '120px',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '900',
  },
  fontFamily: {
      primary: 'Mulish, sans-serif',
      secondary: 'Roboto, sans-serif',
  },
  transition: {
    default: '.3s'
  },
  rounded: {
    none: 'none',
    xs: '.25rem',
    sm: '.5rem',
    md: '.75rem',
    lg: '1rem',
    xl: '2rem',
    circle: '50%',
  },
  shadow: {
      1: '0 0 3px 0 rgba(10,22,70,.12), 0 1px 3px 0 rgba(10,22,70,.12)',
      2: '0 0 3px 0 rgba(10,22,70,.12), 0 3px 3px -1px rgba(10,22,70,.12)',
      3: '0 0 3px 0 rgba(10,22,70,.12), 0 3px 6px -1px rgba(10,22,70,.12)',
      4: '0 0 3px 0 rgba(10,22,70,.12), 0 8px 8px -1px rgba(10,22,70,.12)',
  },
  effects: {
    glassphormism: `
        backdrop-filter: blur(4px);
        background-color: rgba(255,255,255,.1);
    `
  },
  is: {
      xs: '@media(max-width: 420px)',
      sm: '@media(max-width: 720px)',
      md: '@media(max-width: 1024px)',
      lg: '@media(max-width: 1200px)',
      xl: '@media(max-width: 1440px)',
  }
}