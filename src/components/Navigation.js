import React from 'react'
import styled from 'styled-components'
import Logo from'./Logo'
import Button from './Button'
const Section= styled.section`
wisth: 100vw;
background-color: ${props=>props.theme.body};
`
const NavBar=styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
height: 5rem;
height: ${props => props.theme.navHeight};
margin: 0 auto;
`
const Menu=styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style:none;
`

const MenuIteams=styled.li`
margin: 0 1rem;
color: ${props =>props.theme.text};
cursor: pointer;

&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props =>props.theme.text};
    transition width 0.3s ease;
}

&:hover::after{
    width:100%;
}
`
const Navigation = () => {
    const scrollTo=(id)=>{
        let element=document.getElementById(id);
        element.scrollIntoView({
            behavior:'smooth',
            block:'start',
            inline:'nearest',
        })
    }
    return(
        <Section id="navigation">
            <NavBar>
            <Logo/>
            <Menu>
                <MenuIteams onClick={()=>scrollTo('home')}> Home</MenuIteams>
                <MenuIteams onClick={()=>scrollTo('about')}> About</MenuIteams>
                <MenuIteams onClick={()=>scrollTo('roadmap')}> Roadmap</MenuIteams>
                <MenuIteams onClick={()=>scrollTo('showcase')}> Showcase</MenuIteams>
                <MenuIteams onClick={()=>scrollTo('team')}> Team</MenuIteams>
                <MenuIteams onClick={()=>scrollTo('faq')}> Faq</MenuIteams>
            </Menu>
            <Button text="connect wallet" link="https://google.com"/>
            </NavBar>
        </Section>
    )
}

export default Navigation;
