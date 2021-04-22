import React from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
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