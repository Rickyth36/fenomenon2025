import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PRLogo from '../assets/logos/PRClub.webp';
// import Logo from '../assets/logos/Logo.webp';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <div className="mb-0 py-14 pb-0 bg-zinc-900 md:px-0 z-4 relative font-code">
            {/* <div className='flex justify-center'>
                <img className='w-48' src={Logo} alt="" />
            </div> */}
            <div className="px-5 md:px-10 mx-auto text-white flex flex-col justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-80">
                {/* left */}
                <div>
                    <div className='text-center md:text-left'>
                        <h1 className='text-lg md:text-3xl bg-gradient-to-r from-[#fb00a0] to-[#821eff] bg-clip-text text-transparent font-semibold'>Event Convenor</h1>
                        <p className='text-md md:text-xl font-bold'>Dexter Thoudam</p>
                        <a href="mailto: dexter_th21@mtu.ac.in"><p className='text-md md:text-lg mt-2'>dexter_th21@mtu.ac.in</p></a>
                        <a href="tel: +919077653443"><p className='text-md md:text-lg mt-2'>+91 9077653443</p></a>
                    </div>
                </div>

                {/* mid */}
                <div className='flex flex-col space-y-4 justify-center items-center'>
                    <div>
                        <p className='text-lg md:text-4xl text-center bg-gradient-to-r from-[#fb00a0] to-[#821eff] bg-clip-text text-transparent font-semibold'>Follow Us</p>
                        <div className='flex gap-4 mt-3 items-center justify-center'>
                            <Link to="https://www.instagram.com/fenomenonmtu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" >
                                <FontAwesomeIcon icon={faInstagram} className='text-white hover:text-[#821eff] text-3xl'/>
                            </Link>
                        
                            <Link to="https://mtu.ac.in/">
                                <FontAwesomeIcon icon={faGlobe} className='text-white hover:text-[#821eff] text-3xl' />
                            </Link>                            
                        </div>                          
                    </div>
                </div>
                
                {/* right  */}
                {/* <div>
                    <div className='text-center md:text-right'>
                        <h1 className='text-lg md:text-3xl bg-gradient-to-r from-[#fb00a0] to-[#821eff] bg-clip-text text-transparent font-semibold'>Event Co-ordinator</h1>
                        <p className='text-md md:text-lg'>Lanmani Chungkham</p>
                        <a href="mailto: lanmani_ch21@mtu.ac.in" className='text-md md:text-lg'>lanmani_ch21@mtu.ac.in</a>
                        <a href="tel: +917005917899" className='text-md md:text-lg mt-5'>+91 7005917899</a>
                    </div>
                </div>   */}

                <div>
                    <div className='text-center md:text-right'>
                        <h1 className='text-lg md:text-3xl bg-gradient-to-r from-[#fb00a0] to-[#821eff] bg-clip-text text-transparent font-semibold'>Event Co-ordinator</h1>
                        <p className='text-md md:text-xl font-bold'>Lanmani Chungkham</p>
                        <a href="mailto: lanmani_ch21@mtu.ac.in"><p className='text-md md:text-lg mt-2'>lanmani_ch21@mtu.ac.in</p></a>
                        <a href="tel: +917005917899"><p className='text-md md:text-lg mt-2'>+91 7005917899</p></a>
                    </div>
                </div>                

            </div>
            <div className="p-3 border-t-2 mt-3">
                {/* <p className="text-sm text-center text-whitee">©2025 FENOMENON. ALL RIGHTS RESERVED.</p> */}
                <p className="text-sm text-center text-whitee">DESIGNED AND DEVELOPED BY PROGRAMMING AND ROBOTICS CLUB,MTU</p>


            </div>
        </div>
    )
}