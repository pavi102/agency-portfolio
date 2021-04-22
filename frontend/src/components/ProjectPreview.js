import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

function ProjectPreview() {
    let classes = makeStyles({
        custom: {
            border: "none",
            boxShadow: "none",
            padding: "2%"
        },
        image: {
            height: 256
        },
        grid: {
            display: 'flex'
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
            <Typography align={'center'} variant={'h2'}>
                Our recent Works
            </Typography>
            <Grid container spacing={5} className={classes.grid}>
                {projectList.map(project => {
                    return (
                        <Grid item sm={12} md={6}>
                            <Card className={classes.custom}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.image}
                                        image={project.previewImage}
                                        title={project.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            <Button onClick={() => window.location.href = "/projects"}>See More Projects</Button>
        </Container>
    );
}

export default ProjectPreview;