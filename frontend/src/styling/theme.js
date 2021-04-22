import { createMuiTheme } from '@material-ui/core/styles';
import {grey} from "@material-ui/core/colors";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[900],
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});