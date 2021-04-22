import React from 'react';
import {AppBar, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

function Footer() {
    const useStyles = makeStyles({
        footer: {
            backgroundColor: "#333"
        },
    });

    const classes = useStyles();
    return (
        <>
            <br/>
            <AppBar position="static" className={classes.footer}>
                <Toolbar>
                    <Typography variant="body1" color="default">
                        © 2021 4Pears
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Footer;