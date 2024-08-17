import React from 'react'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import video from '../../assets/video1.mp4'
import './background.css'

function Background({play,herocount}) {

    if (play) {
        return(
            <video className='background w-100 img-fluid z-n1 position-absolute fade-in' autoPlay loop muted>
                <source src={video} type='video/mp4' ></source>
            </video>
        )
    }
    else if(herocount===0){
        return(
            <img src={image1} className='background img-fluid z-n1 position-absolute fade-in' alt="" />
        ) 
    }
    else if(herocount===1){
        return(
            <img src={image2} className='background img-fluid z-n1 position-absolute fade-in' alt="" />
        ) 
    }
    else if(herocount===2){
        return(
            <img src={image3} className='background img-fluid z-n1 position-absolute fade-in' alt="" />
        ) 
    }
}

export default Background
