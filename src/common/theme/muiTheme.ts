import { createMuiTheme } from "@material-ui/core/styles"
import { defaultTheme } from "./Theme"

export const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
      color: "inherit",

      /* disable focus */
      tabIndex: -1,
      onMouseDown: (e) => e.preventDefault(),
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: defaultTheme.themeColor,
    },
    background: {
      default: defaultTheme.secondaryBackgroundColor,
      paper: defaultTheme.backgroundColor,
    },
  },
  typography: {
    fontFamily: defaultTheme.font,
    fontSize: 13,
  },
})
