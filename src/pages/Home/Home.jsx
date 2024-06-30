import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from  '../../assets/hero_banner.jpg'
import hero_tittle from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Tittlecards from '../../components/Tittlecard/Tittlecards'
import Footer from '../../components/Footer/footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
      <img src={hero_banner} alt="" className='banner-img' />
      <div className="hero-caption">
        <img src={hero_tittle} alt="" className='caption_img'/>
        <p>Discovering his ties to a secret ancient order,a young
          man living in modern Istanbul embarks on a quest to save the city from an 
          immortal enemy.
        </p>
        <div className="hero-btns">
  <button className="btn">
    <img src={play_icon} alt="" />Play
  </button>
  <button className="btn dark-btn">
    <img src={info_icon} alt="" />More Info
  </button>
</div>
<Tittlecards/>
      </div>
      </div>
      <div className="more-cards">
<Tittlecards title={"Blockbuster Movies"} category={'top_rated'}/>
<Tittlecards title={"Only on Netflix"} category={'popular'}/>
<Tittlecards title={"Upcoming"} category={'upcoming'}/>
<Tittlecards title={"Top Pics for you"} category={'now_playing'}/>

      </div>
      <Footer/>
    </div>
    
  )
}

export default Home
