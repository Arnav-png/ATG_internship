import React from 'react'
import './Login.css'
import CancelIcon from '@material-ui/icons/Cancel';
import Loginimg from '../../Images/Loginimg.png'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Facebook from '../../Images/fff.png'
import Group from '../../Images/Group.png'
import { PinDropSharp } from '@material-ui/icons';

const SignIn = (props) => {
    return (
        
        <div className="modal__cols">
        <div className="modal__col1">
               <div className="col1__main">
                   <h1>Sign In</h1>
                   <form className="signin__form" type='submit' method="post">
                       <input className="Form__input" placeholder="Email" required='true' type="text" />
                       <input className="Form__input"  placeholder="Password" type="text" />
                       <div className="visibilityIcon"><VisibilityIcon/></div>
                       
                       <button className="btn1" type='submit'>Sign In</button>
                    
                   </form>
                   <div className="col1__buttons">
                       <button className=' btn2'> <img src={Facebook} alt="facebook_logo" /> Sign In with Facebook</button>
                       <button className=' btn2'><img src={Group} alt="Sign in with goole" /></button>
                       <p>Forgot Password?</p>
                   </div>
               </div>
               </div>
               <div className="modal__col2 modal__span">
                <h3><span className="spannn">Don’t have an account yet?</span><span onClick={props.onClick}> Create new for free!</span></h3>
                <img src={Loginimg} alt="Login art" />
            </div>
        </div>
              

      
        
    )
}

export default SignIn
