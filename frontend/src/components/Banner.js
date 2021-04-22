import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import '../css/style.css'

const BannerCards = [
    {
        image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-email-128.png',
        title: 'Lorem',
    },
    {
        image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-email-128.png',
        title: 'Ipsum',
    },
    {
        image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-email-128.png',
        title: 'Ipsum',
    },
    {
        image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-email-128.png',
        title: 'Ipsum',
    },
    {
        image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-email-128.png',
        title: 'Ipsum',
    }
]

function Banner() {
    const useStyles = makeStyles({
        custom: {
            border: "none",
            boxShadow: "none",
            maxWidth: 345
        },
        image: {
            height: 128
        }
    });

    const classes = useStyles();
    return (
        <>
            <Container maxWidth="md" classes={{ root: 'Banner' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                pavi is gay scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                pavi is gay scrambled it to make a type specimen book.
            </Container>
            <Grid container justify="center" spacing={4}>

                {
                    BannerCards.map(card =>
                        <Card className={classes.custom}>
                            <CardMedia
                                className={classes.image}
                                component="img"
                                image={card.image}
                                title="Card Icon"
                            />
                            <CardContent>
                                <Typography align="center" variant={'h5'}>
                                    {card.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                }
            </Grid>
        </>
    );
}

export default Banner;