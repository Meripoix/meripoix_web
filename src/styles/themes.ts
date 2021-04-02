import { createMuiTheme } from "@material-ui/core/styles"
import { ColorPrimary } from "@styles/colors"

const theme = createMuiTheme({
    palette: {
      primary: {
        main: ColorPrimary
      },
      secondary: {
        main: 'rgba(0,0,0,0.6)'
      },
      error: {
        main: ColorPrimary
      },
      background: {
        default: '#fff'
      }
    }
})

export default theme