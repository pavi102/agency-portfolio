import React from 'react'
import Banner from "../components/Banner";
import ProjectPreview from "../components/ProjectPreview";
import ContactForm from "../components/ContactForm";
import {Container, Typography} from "@material-ui/core";

function Home() {
    return (
        <>
            <Container>
                <Banner />
                <ProjectPreview/>
                <ContactForm/>
            </Container>
        </>
    );
}

export default Home
