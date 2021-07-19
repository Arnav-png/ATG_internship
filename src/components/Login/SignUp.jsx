import React from 'react'
import './Login.css'
import CancelIcon from '@material-ui/icons/Cancel';
import Loginimg from '../../Images/Loginimg.png'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Facebook from '../../Images/fff.png'
import Group from '../../Images/Group.png'

const SignUp = (props) => {
    return (<>
    <div className="modal__cols22">
        <div className="modal__col1 col11">
        <div className="col1__main">
                   <h1>Create Account</h1>
                   <form className="signin__form" type='submit' method="post">
                        <div className="form__name">
                        <input className="Form__input" placeholder="First Name" required='true' type="text" />
                        <input className="Form__input" placeholder="Last Name" required='true' type="text" />
                        </div>
                       <input className="Form__input" placeholder="Email" required='true' type="Email" />
                       <input className="Form__input"  placeholder="Password" type="text" />
                       <div className="visibilityIcon"><VisibilityIcon/></div>
                       <input className="Form__input"  placeholder="Confirm Password" type="text" />
                       
                       <button className="btn1" type='submit'>Sign Up</button>
                    
                   </form>
                   <div className="col1__buttons">
                       <button className=' btn2'> <img src={Facebook} alt="facebook_logo" /> Sign In with Facebook</button>
                       <button className=' btn2'><img src={Group} alt="Sign in with goole" /></button>
                   </div>
                   </div>
               </div>
               <div className="modal__col2">
                <h3><span>Already have a Account?</span><span onClick={props.onClick}> Sign In</span></h3>
                <img src={Loginimg} alt="Login art" />
                <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>
            </div>
            </>
    )
}

export default SignUp
