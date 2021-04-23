import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';


function ProjectList() {
    let classes = makeStyles({
        custom: {
            border: "none",
            boxShadow: "none",
            padding: "2%"
        },
        image: {
            height: 400
        },
        grid: {
            display: 'flex'
        },
        title: {
            backgroundColor: "#333",
            color: "white"
        }
    })();

    let projectList = [{
        title: "Project Sample 1",
        previewImage: "https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg",
        description: "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. " +
            "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. " +
            "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. "
    }, {
        title: "Project Sample 2",
        previewImage: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png",
        description: "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. " +
            "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. " +
            "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. "
    }, {
        title: "Project Sample 3",
        previewImage: "https://www.ntaskmanager.com/wp-content/uploads/2019/07/3.png",
        description: "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. " +
            "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. " +
            "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. "
    }, {
        title: "Project Sample 4",
        previewImage: "https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg",
        description: "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. " +
            "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. " +
            "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. "
    }
    ];
    return (
        <Container maxWidth={"lg"}>
            <Grid container className={classes.grid} cols={1}>
                {projectList.map(project => {
                    return (
                        <Grid item xs={12}>
                            <Card className={classes.custom}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.image}
                                        image={project.previewImage}
                                        title={project.title}
                                    />
                                    <CardContent className={classes.title}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {project.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default ProjectList