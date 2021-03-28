import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import * as CONSTANTS from './Constants'

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: CONSTANTS.BLUE,
      // dark: will be calculated from palette.primary.main,
      contrastText: CONSTANTS.CONTRAST_TEXT,
    },
  },
  overrides:{
    MuiButton:{
      contained:{
        color: CONSTANTS.BLUE,
        backgroundColor: CONSTANTS.CONTRAST_TEXT,
        '&:hover': {
          backgroundColor: CONSTANTS.LIGHT_BLUE,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: CONSTANTS.CONTRAST_TEXT,
          },
        }
      }
    }
  }
});
interface IThemeProps{
  children:any;
}
export default function Theme(props: IThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}