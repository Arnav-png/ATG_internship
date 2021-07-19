import React from 'react'
import './HeroContent.css'
import Card from '../HeroCon/Card'
import post1 from '../../Images/post1.png'
import profile1 from '../../Images/profile1.png'
import profile2 from '../../Images/profile 2.png'
import card2 from '../../Images/card2.png'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CreateIcon from '@material-ui/icons/Create';
import Card2 from '../HeroCon/Card2'
import Card3 from '../HeroCon/Card3'
import write from '../../Images/write.png'

const HeroContent = (props) => {
    return (
        <div className="hero__contents">
            <div className="hero__col1">
                <Card title="✍️ Article" 
                image={post1}
                    h3="What if famous brands had regular fonts? Meet "
                    h32="RegulaBrands!"
                    p="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                    profile={profile1}
                    name="Sarthak Kamra"
                />
                <Card title="🔬️ Education" 
                image={card2}
                    h3="Tax Benefits for Investment under National Pension Scheme"
                    h32=' launched by Government'
                    p="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                    profile={profile2}
                    name="Sarah West"
                />
                <Card2/>
                <Card3/>
            </div>
            <div className="hero__col2">
                <div className="input__icons">
                <span><LocationOnIcon/></span>
                <input className="hero__location" placeholder="Noida,India"/>
                <span><CreateIcon/></span>
                
                </div>
                {/* <input className="hero__location" placeholder="📌  Noida,India                                      ✏️"/> */}
                <div className="location__line"></div>
                <div className="hero__text"> 🛈 Your location will help us serve better and extend a personalised experience.</div>
            </div>
            <div className="write__img"><img src={write} alt="" /></div>

        </div>
    )
}

export default HeroContent
