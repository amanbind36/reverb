import React from 'react'
import './FooterB.css'
import { FaFacebookF,FaTwitter,FaPinterest,FaInstagram,FaYoutube } from 'react-icons/fa';
const FooterBottom = () => {
  return (
    <footer>
        <div className='second-footer'>

            <div className='btn-four basic'>
                <div className='btn1'>
                    <button>
                    <img src='https://cdn-icons-png.flaticon.com/128/3083/3083741.png' alt='sonu'/>
                    </button>
                </div>
                <div className='btn2'>
                    <button>India</button>
                    {/* <h3>India</h3> */}
                </div>
                <div className='btn3'>
                    <button>
                        English
                    </button>
                    {/* <h3>English</h3> */}
                </div>
                <div className='btn4'>
                    <button>
                        $USD
                    </button>
                    {/* <h3>$USD</h3> */}
                </div>
            </div> 

            <div className='mid-item basic'>
                <div className='first-item midbasic'>
                    <div className='img1 itemone' >
                        <img src='https://cdn-icons-png.flaticon.com/128/461/461146.png' alt='img1'/>
                    </div>

                    <div className='text-one itemone'>
                        <h5>Reverb Gives</h5>
                        <p>Your purchases help youth music programs get the gear they need to make music.</p>
                    </div>
                </div>
                <div className='second-item midbasic'>
                    <div className='img2  itemone'>
                        <img src='https://img.icons8.com/ios-glyphs/1x/coniferous-tree.png' alt='img2'/>
                    </div>

                    <div className='text-two itemone'>
                        <h5>Reverb Gives</h5>
                        <p>Your purchases help youth music programs get the gear they need to make music.</p>
                    </div>
                </div>
            </div>

            <div className='foot-icons basic'>
                <div className='social-icons'>
                    <ul className='footerCircles'>
                        <li><FaInstagram className='footerIcon'/></li>
                        <li><FaFacebookF className='footerIcon'/></li>
                        <li><FaYoutube className='footerIcon'/></li>
                        <li><FaTwitter className='footerIcon'/></li>
                        <li><FaPinterest className='footerIcon'/></li>
                    </ul>

                </div>

                <div className='download'>
                    
                    <img src='https://cdn-icons-png.flaticon.com/128/649/649667.png' alt='R'/>
                    
                    <h4>Download the Reverb App</h4>
                </div>
            </div>

        </div>

        {/* <div className='copyright-content'>
            <p className='copyright'>{new Date().getFullYear()}LLC 
             <li> <a href=''>Terms & Policies</a> </li> 
             <li> <a href=''>Privacy policy</a> </li> 
             </p>
        </div> */}
    </footer>
  )
}

export default FooterBottom