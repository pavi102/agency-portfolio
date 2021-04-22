import React from 'react'
import Banner from "../components/Banner";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ProjectPreview from "../components/ProjectPreview";

function Home() {
    return (
        <>
            <Container>
                <Typography align={'center'} variant={'h1'} style={{ color: "#8f9a27" }}>
                    4Pears
                </Typography>
                <Banner />
                <ProjectPreview/>
            </Container>
        </>
    );
}

export default Home
