import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function ProjectPreview() {
    let projectList = [{
        title: "Project Sample 1",
        previewImage: "https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg",
        description: "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. " +
            "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. " +
            "SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. SAMPLE DESCRIPTION. "
    }]
    return (
        <Container maxWidth={"lg"}>
            <Typography align={'center'} variant={'h2'}>
                Our recent Works
            </Typography>
            <Grid container spacing={20}>
                {projectList.map(project => {
                    return (
                        <Card>
                            <CardActionArea>
                                <CardMedia
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
                    )
                })}
            </Grid>
        </Container>
    );
}

export default ProjectPreview;