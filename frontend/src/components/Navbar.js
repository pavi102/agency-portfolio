import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import '../styling/style.css'
import {Link,Typography, Button, AppBar, Toolbar, IconButton} from "@material-ui/core";

function Navbar() {
    const useStyles = makeStyles({

        navLink: {
            textDecoration: 'none',
            color: 'black',
            fontSize:'30px',
            paddingBottom:'5px',
            margin:'18px',
            borderBottom: '1px solid',
            '&:hover': {
                color: "#B78C48",
                borderBottom:"1px solid #B78C48",
                cursor: "pointer"
            }
        },
        menus: {
            justifyContent: "center",
            marginBlockStart: "4px",
            marginBlockEnd: "4px"
        },    
        });
    const classes = useStyles();
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar className={classes.menus}>
                <Typography className={classes.navLink} onClick={()=>window.location.href="/projects"}>
                    Home
                </Typography>
                <Typography className={classes.navLink} onClick={()=>window.location.href="/projects"}>
                    Projects
                </Typography>
                <Typography  className={classes.navLink} onClick={()=>window.location.href="/projects"}>
                    About
                </Typography>
                <Typography className={classes.navLink} onClick={()=>window.location.href="/projects"}>
                    Home
                </Typography>
            </Toolbar>
            

        </AppBar>
        // <Container maxWidth={"lg"}>
        // <div className={classes.navBlock}>
        //         <p className={classes.menuText}>
        //             <a className={classes.navLink}>
        //                 Home
        //             </a>
        //         </p>
        //         <p className={classes.menuText}>
        //             <a className={classes.navLink}>
        //                 About
        //             </a>
        //         </p>
        //         <p className={classes.menuText}>
        //             <a className={classes.navLink}>
        //                 Projects
        //             </a>
        //         </p>
        //         <p className={classes.menuText}>
        //             <a href="/login" className={classes.navLink}>
        //                 login
        //             </a>
        //         </p>
        //         <p className={classes.menuText}>
        //             <a href="/register" className={classes.navLink}>
        //                 Register
        //             </a>
        //         </p>
        //         <p className={classes.menuText}>
        //             <a className={classes.navLink}>
        //                 Contact
        //             </a>
        //         </p>
        // </div>


        // </Container>

        
    )
}

export default Navbar
