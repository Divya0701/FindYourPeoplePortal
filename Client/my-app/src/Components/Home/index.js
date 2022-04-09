import React from 'react';
import "./index.css"
import { AiFillHome } from 'react-icons/ai';
import {BsFileTextFill} from "react-icons/bs";
import {AiOutlineLogout} from 'react-icons/ai';
import {ImProfile} from 'react-icons/im';
const Home=()=>{
    const text="<Let's Find out/>"
    return(
        <div className='homeBgContainer'>
            <div className='sideNavbar'>
                <div className="jj">
                    <h1 className='jk'>{text}</h1>
                 </div>
                <div className='navbarItem'>
                    <div className='inn'><AiFillHome className='iconss'/><h1 className='navHead'>Home</h1></div>
                </div>
                <div className='navbarItem'>
                <div className='inn'><BsFileTextFill className='iconss'/><h1 className='navHead'>Cases</h1></div>
                </div>
                <div className='navbarItem'>
                <div className='inn'><ImProfile className='iconss'/><h1 className='navHead'>About Us</h1></div>
                </div>
                <div className='navbarItem'>
                <div className='inn'><AiOutlineLogout className='iconss'/><h1 className='navHead'>Log out</h1></div>
                </div>
            </div>
            <div className='one'>
                <div className='innerdiv'>
                   <div className='quotes'>
                       <h1 className='quote'>SEVAM ASMAKAM DHARMA</h1>
                       <h4 className='service'>-Service is our creed</h4>
                    </div>
                    <div className='form-image'>
                        <div className='formimage'>
                            <div className='form'>
                                <h1>form</h1>
                            </div>
                            <div className='image'>
                                <h1>image</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Home;