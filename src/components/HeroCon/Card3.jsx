import React from 'react'
import './Card.css'
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LongMenu from './Threedots';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';
import profile4 from '../../Images/profile4.png'
const Card3 = (props) => {
    return (
        <div className='Card__main'>
            <div className="card1">
                <div className="card__img"><img src="" alt="" /></div>
                <div className="cardcontent">
                <div className="card__content">
                <div className="col1"><h4>💼️ Job</h4>
                    <h3>Software Developer</h3>
                    <h3>{props.h32}</h3>
                    
                    <p><WorkIcon/>Innovaccer Analytics Private Ltd.<span><LocationOnIcon/></span> Noida, India</p></div>
                <div className="col2"><span><LongMenu/></span></div>
                <div className="card__button2"><button>Apply on Timesjobs</button></div> 
                </div>
                <div className="card__footer">
                    <div className="footer__profile">
                        <img src={profile4} alt="" />
                        <p>Joseph Gray</p>
                    </div>
                    <div className="footerlikes"><span><VisibilityIcon/></span> <span>1.4k views</span> <span><ShareIcon/></span></div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card3
