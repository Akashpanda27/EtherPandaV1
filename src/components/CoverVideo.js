import React from 'react'
import GIF from '../assets/Home Video.mp4'
import styled from 'styled-components'

const VideoContainer=styled.div`
width:100%;

video{
    width:100%;
    height:auto;
}
`
const Covervideo = () => {
    return(
        <VideoContainer> 
            <video src={GIF} types="video/mp4" autoPlay muted loop/>
        </VideoContainer>
    )
}

export default Covervideo;
