import React from 'react'
import { useState } from 'react';
import './Login.css'
import CancelIcon from '@material-ui/icons/Cancel';
import Loginimg from '../../Images/Loginimg.png'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Facebook from '../../Images/fff.png'
import Group from '../../Images/Group.png'
import SignUp from './SignUp';
import SignIn from './SignIn';


const LoginModal = (props) => {
const [LoginHandler, setLoginHandler] = useState(false)

const LoginPageHandler = ()=>{
    setLoginHandler(true)
}
const LogoutPageHandler = ()=>{
    setLoginHandler(false)
}

const cancelHandler = () =>{
    props.onCancel()
}
// const element = <FontAwesomeIcon icon={fagoogle} />


    return (
        <div className='modal'>
        <span onClick= {cancelHandler} className="modal__crossicon"><CancelIcon  style={{ color: "white" }}/></span>
        <div className="modal__main">
        <h3>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h3>
        </div>
        
        
        {LoginHandler ?<SignIn onClick={LogoutPageHandler}/>:<SignUp onClick={LoginPageHandler}/>}
        
      
        
        </div>
        
    )
}

export default LoginModal