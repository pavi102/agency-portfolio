import {createMuiTheme} from '@material-ui/core/styles';
import {grey} from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core";

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
    typography: {
        title: {
            fontFamily: "Anton",
            fontSize: 24
        },
        subtitle1: {
            fontFamily: "Rambla",
            fontSize: 12
        },
        body1: {
            fontFamily: "Taviraj",
            fontSize: 12
        }

    }
});

export const bannerStyle = makeStyles({

})