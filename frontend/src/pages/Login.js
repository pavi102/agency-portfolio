import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { dispatch, getState, LOGIN } from '../utils/redux-store';
import { useSelector } from 'react-redux';
import {
    Avatar,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel, Grid, Link,
    TextField,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {
    const classes = useStyles();
    let [user, setUser] = useState();
    let [password, setPassword] = useState();

    function onLogin(e) {
        e.preventDefault();
        let url = process.env.BACKEND_URL || "http://localhost:3001"
        fetch(url + "/auth/login", {
            method: "post",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ user, password })
        }).then(res => res.json()).then(json => {
            dispatch({ type: LOGIN, data: { jwt: json.token, user: json.user } });
        });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log In
                </Typography>
                <form className={classes.form} noValidate onSubmit={onLogin}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="user"
                        label="Username or Email"
                        name="user"
                        autoComplete="user"
                        autoFocus
                        onChange={e => setUser(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Log In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
