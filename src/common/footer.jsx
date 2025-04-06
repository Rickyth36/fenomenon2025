import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PRLogo from '../assets/logos/PRClub.webp';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="mb-0 p-8 pb-0 bg-zinc-900 md:px-0 z-4 relative font-code">
            <div className="px-5 md:px-10 text-white flex flex-col justify-between space-y-8 md:flex-row md:space-y-0 md:space-x-96">
                {/* left */}
                <div>
                    <p className='text-lg md:text-xl text-center md:text-left'>Designed & Developed By</p>
                    <div className='flex gap-2 mt-3 items-center justify-center'>
                        <img src={PRLogo} alt="" className='w-14 h-14' />
                        <p className='text-sm md:text-md text-center md:text-left'>Programming & Robotics Club<br/>Computer Science & Engineering, MTU</p>
                    </div>
                </div>

                {/* right */}
                <div>
                    <div>
                        <p className='text-lg md:text-xl text-center md:text-left'>Follow Us</p>
                        <div className='flex gap-4 mt-3 items-center justify-center'>
                            <Link to="https://www.instagram.com/fenomenonmtu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" >
                                <FontAwesomeIcon icon={faInstagram} className='text-white hover:text-[#821eff] text-xl'/>
                            </Link>
                            <Link>
                                <FontAwesomeIcon icon={faFacebook} className='text-white hover:text-[#821eff] text-xl' />
                            </Link>                            
                            <Link>
                                <FontAwesomeIcon icon={faGlobe} className='text-white hover:text-[#821eff] text-xl' />
                            </Link>                            
                        </div>                          
                    </div>
                </div>
            </div>
            <div className="p-3 border-t-2 mt-3 border-white">
                <p className="text-sm text-center text-whitee">©2025 FENOMENON. ALL RIGHTS RESERVED.</p>


            </div>
        </div>
    )
}