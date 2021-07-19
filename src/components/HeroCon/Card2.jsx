import React from 'react'
import './Card.css'
import card3 from '../../Images/Card3.png'
import profile3 from '../../Images/profile3.png'
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TodayIcon from '@material-ui/icons/Today';
import LongMenu from './Threedots';

const Card2 = (props) => {
    return (
        <div className='Card__main'>
            <div className="card1">
                <div className="card__img"><img src={card3} alt="" /></div>
                <div className="cardcontent">
                <div className="card__content">
                <div className="col1"><h4>🗓️ Meetup</h4>
                    <h3>Finance & Investment Elite Social Mixer @Lujiazui</h3>
                    <h3>{props.h32}</h3>
                    
                    <p><span><TodayIcon/></span> Fri, 12 Oct, 2018<span><LocationOnIcon/></span>Ahmedabad, India</p></div>
                <div className="col2"><span><LongMenu/></span></div>
                <div className="card__button"><button>Visit Website</button></div>
                </div>
                <div className="card__footer">
                    <div className="footer__profile">
                        <img src={profile3} alt="" />
                        <p>Ronal Jones</p>
                    </div>
                    <div className="footerlikes"><span><VisibilityIcon/></span> <span>1.4k views</span> <span><ShareIcon/></span></div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card2
