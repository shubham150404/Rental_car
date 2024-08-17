import { useState } from 'react'
// import './pages/home_page/home.jsx'
import Background from './background.jsx'
import Hero from './hero.jsx'
import Header from '../../component/header/header.jsx'
import Footer from '../../component/footer/footer.jsx'
import Plan_sell from './plan_sell.jsx'
import Explore from './explore.jsx'
import Propuler from './propuler.jsx'
import Process from './process.jsx'
import Inquiry from './inquiry.jsx'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Home_main() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token_of_user')) {
      navigate('/Website_Login')
    }
  }, [])



  let heroData = [
    {text1:"Dive info",text2:"What your love"},
    {text1:"Indulge",text2:"Your position"},
    {text1:"Give in to",text2:"Your position"},
  ]
  const [herocount, setheroCount] = useState(2)
  const [play, setstop] = useState(false)

  return (
    <>
      <Background play={play}  herocount={herocount}/>
      <Header />
      <Hero 
        heroData={heroData[herocount]}
        herocount={herocount}
        setheroCount={setheroCount}
        play={play}
        setstop={setstop}
        />
      <Plan_sell/>
      <Explore/>
      <Propuler/>
      <Process/>
      <Inquiry/>
      <Footer/>

    </>
  )
}

export default Home_main
