import React from 'react'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'
import './hero.css'

function Hero({heroData,setheroCount,herocount,setstop,play}) {
    return (
        <>
            <div className='container'>
            <div className='hero'>
                <div className='hero-text '>
                <p className='text-white m-0'>{heroData.text1}</p>
                <p className='text-white m-0'>{heroData.text2}</p>
                <p className='text-white m-0'>{heroData.text3}</p>
                </div>
                <div className='d-flex  hero-explore  rounded-pill'>
                    <p className=' '>Explore the features</p>
                    <img src={arrow_btn} alt="" srcset="" />
                </div>
                <div className='hero-dot-play '>
                    <ul className='hero-dots '>
                        <li onClick={() => setheroCount(0)} className={herocount===0? "hero-dot orange" :"hero-dot"}></li>
                        <li onClick={() => setheroCount(1)} className={herocount===1? "hero-dot orange" :"hero-dot"}></li>
                        <li onClick={() => setheroCount(2)} className={herocount===2? "hero-dot orange" :"hero-dot"}></li>
                    </ul>
                </div>
                <div className='-hero-play d-flex play-btn justify-content-end'>
                    <img onClick={() => setstop(!play)} src={play?pause_icon :play_icon} />
                    <p className='d-flex align-items-center ps-3 text-white m-0'>See the video</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Hero
