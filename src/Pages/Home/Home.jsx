import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>When a failed nuclear fusion experiment results in an explosion that kills
             his wife, Dr. Otto Octavius (Alfred Molina) is transformed into Dr. Octopus,
              a cyborg with deadly metal tentacles. Doc Ock blames Spider-Man (Tobey Maguire)
               for the accident and seeks revenge. Meanwhile, Spidey's alter ego, Peter Parker,
                faces fading powers and self-doubt. Complicating matters are his best friend's
                 (James Franco) hatred for Spider-Man and his true love's (Kirsten Dunst) sudden 
                 engagement to another man.</p>
                 <div className="hero-btns">
                    <button className='btn'>
                        <img src={play_icon} alt="play" />
                        Play
                    </button>
                    <button className='btn dark-btn'>
                        <img src={info_icon} alt="info" />
                        More Info
                    </button>
                 </div>
                 <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title ={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title ={"Only on CineCouch"} category={"popular"}/>
        <TitleCards title ={"Upcoming"} category={"upcoming"}/>
        <TitleCards title ={"Top Pics For You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
