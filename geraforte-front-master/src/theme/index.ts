import {
  createMuiTheme,
  ThemeOptions,
  responsiveFontSizes
} from '@material-ui/core/styles'

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#ff0000'
    }
  },
  typography: {
    h1: {
      fontSize: 32
    },
    h2: {
      fontSize: 26
    },
    h4: {
      fontSize: 20
    },
    h5: {
      fontSize: 18
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400
    },
    overline: {
      fontWeight: 'bold',
      lineHeight: 1.4
    },
    button: {
      textTransform: 'inherit'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1170,
      xl: 1920
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#fff',
          '@media(min-width: 960px)': {
            paddingTop: 128
          }
        },
        'b, strong': {
          fontWeight: 500
        },
        a: {
          color: '#e03936'
        }
      }
    },
    MuiButton: {
      root: {
        padding: '20px 40px',
        borderRadius: '5px',
        fontWeight: 700
      },
      containedSecondary: {
        backgroundColor: '#e03936'
      },
      sizeSmall: {
        fontSize: 14,
        padding: '0.5rem 2rem'
      },
      sizeLarge: {
        fontSize: 16,
        padding: '0.5rem 2rem'
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: '0.5em'
      },
      overline: {
        color: '#e03936',
        letterSpacing: 4,
        '@media (min-width:960px)': {
          fontSize: 12
        }
      },
      h1: {
        '@media (min-width:1170px)': {
          fontSize: 32
        }
      },
      h2: {
        '@media (min-width:1170px)': {
          fontSize: 26
        }
      },
      h4: {
        '@media (min-width:1170px)': {
          fontSize: 20
        }
      },
      body2: {
        '@media (min-width:1170px)': {
          fontSize: 12
        }
      }
    },
    MuiListItem: {
      divider: {
        borderBottomColor: '#1D1D1C'
      }
    },
    MuiAccordion: {
      rounded: {}
    }
  }
}

export default responsiveFontSizes(createMuiTheme(theme))
