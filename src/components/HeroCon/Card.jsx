import React from 'react'
import './Card.css'
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LongMenu from './Threedots';

const Card = (props) => {
    return (
        <div className='Card__main'>
            <div className="card1">
                <div className="card__img"><img src={props.image} alt="" /></div>
                <div className="cardcontent">
                <div className="card__content">
                <div className="col1"><h4>{props.title}</h4>
                    <h3>{props.h3}</h3>
                    <h3>{props.h32}</h3>
                    
                    <p>{props.p}</p></div>
                <div className="col2"><span><LongMenu/></span></div>
                    
                </div>
                <div className="card__footer">
                    <div className="footer__profile">
                        <img src={props.profile} alt="" />
                        <p>{props.name}</p>
                    </div>
                    <div className="footerlikes"><span><VisibilityIcon/></span> <span>1.4k views</span> <span><ShareIcon/></span></div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card
