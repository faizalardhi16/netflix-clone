import React , {useState, useEffect} from 'react'
import netflix from './images/netflic-icons.png'
import avatar from './images/avatar.png'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);


    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>80){
                handleShow(true);
            }else handleShow(false);
        })

        return () =>{
            window.removeEventListener("scroll");
        };
    },[])

    return (
        <div className={`nav ${show && "nav__black"}`}>

            <img
                className="nav__logo"
                src={netflix}
                alt="Netflix Logo"
                
            />

            <img
                className="nav__avatar"
                src={avatar}
                alt="Netflix Logo"
                
            />

        </div>
    )
}

export default Nav;
