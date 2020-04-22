import React, {useState} from 'react';

function Navigation() {
    const [value,isToggle] = useState(false);

   const  toggleMenu =()=>{
        isToggle(!value)
      }

      const show = ( value ? "showMenu" : "") ;
    return (
        <>

            <nav className="menu">
            
                <ul className = {show}>
                
                    <li className="selected"> <a href="/#">About</a></li>
                    <li> <a href="/#">Services</a></li>
                    <li> <a href="/#"> Soltions</a></li>
                    <li> <a href="/#"> Blog</a></li>
                </ul>
                <button className="primary-buttton"><img src="/assets/images/comment.png" alt="" />
                    <span>Get in touch</span></button>
            </nav>
        </>
    )
}

export default Navigation
