// HTTP: GET, POST, PUT, DELETE
// Remix:
// GET -> LoaderFunction => export const loader
// POST, PUT, DELETE -> ActionFunction => export const action
// Render => export default

import React, {useContext} from "react";
import Presentation from "~/routes-sections/index/presentation";
import styled from "styled-components";
import Projects from "~/routes-sections/index/projects";
import {projectsList, SocialMediaList} from "~/src/values";
import ContactMe from "~/routes-sections/index/contact-me";
import {MenuSection} from "~/declarations";
import {NavigationContext, navigationContext} from "~/root";

const SPortfolio = styled.section`
  padding: 0 1.5em;
  box-sizing: border-box;
`

export const HomeMenuSections: MenuSection[] = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'About Me',
        link: 'about-me'
    },
    {
        label: 'Projects',
        link: '#projects'
    },
    {
        label: 'Contact',
        link: '#contact'
    },
    {
        label: 'Resume',
        link: "https://drive.google.com/file/d/1xOOhMwonbT9ZYgcxG2JREWvWCnnFIPX1/view?usp=sharing"
    },
]


export default function Index() {

    const navigation: NavigationContext = useContext(navigationContext)
    navigation.setMenuItems(HomeMenuSections)

    return (
        <SPortfolio>
            <Presentation socialMedia={SocialMediaList}/>
            <Projects projects={projectsList}/>
            <ContactMe items={SocialMediaList}/>
        </SPortfolio>
    )
}
