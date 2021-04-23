import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from "@material-ui/core/Container";
import ButtonBase from '@material-ui/core/ButtonBase';


function ProjectList() {
    let classes = makeStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'hidden'
        }
    })();

    let projects = [{
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
        <Container className={classes.root}>
            <GridList cellHeight={400} cols={1} spacing={25}>
                {
                    projects.map((project) => (
                        <GridListTile key={project.previewImage}>
                            <ButtonBase focusRipple>

                                <img src={project.previewImage} alt={project.title} />
                                <GridListTileBar
                                    title={project.title}
                                    titlePosition="center"
                                />
                            </ButtonBase>

                        </GridListTile>

                    ))
                }
            </GridList>
        </Container>
    )
}

export default ProjectList