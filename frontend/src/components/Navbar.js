import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import '../styling/style.css'
import {Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Button} from "@material-ui/core";

function Navbar() {
    const useStyles = makeStyles({
        NavbarList: {
            alignContent: 'center'
            
        },
        a:{

        },
        navLink: {
            textDecoration: 'none',
            color: 'black',
            fontSize:'30px',
            paddingBottom:'5px',
            margin:'18px',
            borderBottom: '1px solid #B78C48',
            '&:hover': {
                color: "#B78C48",
                borderBottom:"#B78C48"
            }
        },
        menuText: {
            
            display:"inline",
            textAlign:"center",
            marginBlockStart: "4px",
            marginBlockEnd: "4px"
        },
        navBlock: {
            textAlign:'center'
        }   
            
        });
    const classes = useStyles();
    return (
        <Container maxWidth={"lg"}>
        <div className={classes.navBlock}>
                <p className={classes.menuText}>
                    <a className={classes.navLink}>
                        Home
                    </a>
                </p>
                <p className={classes.menuText}>
                    <a className={classes.navLink}>
                        About
                    </a>
                </p>
                <p className={classes.menuText}>
                    <a className={classes.navLink}>
                        Projects
                    </a>
                </p>
                <p className={classes.menuText}>
                    <a href="/login" className={classes.navLink}>
                        login
                    </a>
                </p>
                <p className={classes.menuText}>
                    <a href="/register" className={classes.navLink}>
                        Register
                    </a>
                </p>
                <p className={classes.menuText}>
                    <a className={classes.navLink}>
                        Contact
                    </a>
                </p>
                {/* <li>
                    <Link to="/">Projects</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                    
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li> */}
        </div>


        </Container>

        
    )
}

export default Navbar
