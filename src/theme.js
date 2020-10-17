import { createMuiTheme } from '@material-ui/core';

const oldTheme = createMuiTheme();

// Global theme
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: 'rgba(77,125,242,.1)',
      main: 'rgba(88,125,241,.1)',
      dark: '#4d7df2',
      contrastText: '#4d7df2',
    },
    secondary: {
      light: '#fffff',
      main: '#ffffff',
      dark: 'rgba(0, 0, 0, .05)',
      contrastText: '#1b1d25',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    button: {
      textTransform: 'initial',
    },
  },
  overrides: {
    MuiToolbar: {
      gutters: {
        padding: `${oldTheme.spacing(2)}px 0`,
      },
    },
    MuiButton: {
      root: {
        padding: '.75rem 1.25rem',
        transition: oldTheme.transitions.create(['background-color', 'box-shadow', 'border', 'color'], {
          duration: oldTheme.transitions.duration.shortest,
        }),
      },
      containedPrimary: {
        '&:hover': {
          color: '#ffffff',
        },
      },
      containedSecondary: {
        transition: 'none',
      },
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
      variant: 'contained',
    },
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

export default theme;
