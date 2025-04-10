import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import LogoText from "../assets/logos/LogoText.webp"
import LogoImg from "../assets/logos/LogoImg.webp"

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
	};


  	return (
    	<nav className="bg-dark font-code fixed w-full top-0 start-0  z-40">
      		<div className="w-full flex flex-row items-center justify-between mx-auto p-4">
        		<NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<div className='flex'>
          				<img src={LogoImg} className="h-10 md:h-16" alt="MTU Logo" />
          				<img src={LogoText} className="h-10 md:h-16" alt="MTU Logo" />
					</div>
        		</NavLink>
        
				<ul className="md:flex font-code hidden p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-dark ">
					<li>
						<NavLink
						to="/"
						className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-[#821eff] text-white block"}
							aria-current="page"
							onClick={toggleMenu}
						>
						HOME
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/event'
							onClick={toggleMenu}
							className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-[#821eff] text-white block"}
						>
						EVENTS
						</NavLink>
					</li>
					{/*<li>
						<NavLink
							to='/event'
							onClick={toggleMenu}
						className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-[#821eff] block"}
						>
						Events
						</NavLink>
					</li>*/}
					<li>
						<NavLink
							to='/gallery'
							onClick={toggleMenu}
						className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-[#821eff] text-white block"}
						>
						GALLERY
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/competitions'
							onClick={toggleMenu}
						className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-[#821eff] text-white block"}
						>
						COMPETITIONS
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/sponsors'
							onClick={toggleMenu}
						className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-[#821eff] text-white block"}
						>
						SPONSORS
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/team'
							onClick={toggleMenu}
						className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-[#821eff] text-white block"}
						>
						TEAM
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/contact'
							onClick={toggleMenu}
						className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-[#821eff] text-white block"}
						>
						CONTACT
						</NavLink>
					</li>
				</ul>
					{/* hamburger */}
					<button
						onClick={toggleMenu}
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-500 shadow-lg border border-gray-100 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-40"
						aria-expanded={isMenuOpen}
					>
						<span className="sr-only">Open main menu</span>
						<svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
						</svg>
					</button>
			</div>
				{
				//Phone version
				isMenuOpen ?
				<div className={`md:hidden items-center justify-between w-full md:w-auto md:order-1`} id="navbar-sticky">
					<ul className="bg-dark flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
						<li>
							<NavLink
							to="/"
							className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-white border border-gray-400 mt-1 block"}
								aria-current="page"
								onClick={toggleMenu}
							>
							HOME
							</NavLink>
						</li>	
						<li>
							<NavLink
								to='/event'
								onClick={toggleMenu}
								className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-white border border-gray-400 mt-1 block"}
							>
							EVENTS
							</NavLink>
						</li>
						{/*<li>
							<NavLink
								to='/event'
								onClick={toggleMenu}
							className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-white border border-gray-400 mt-1 block"}
							>
							Events
							</NavLink>
						</li>*/}
						<li>
							<NavLink
								to='/gallery'
								onClick={toggleMenu}
							className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-white border border-gray-400 mt-1 block"}
							>
							GALLERY
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/competitions'
								onClick={toggleMenu}
							className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-white border border-gray-400 mt-1 block"}
							>
							COMPETITIONS
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/sponsors'
								onClick={toggleMenu}
							className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-white border border-gray-400 mt-1 block"}
							>
							SPONSORS
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/team'
								onClick={toggleMenu}
							className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-white border border-gray-400 mt-1 block"}
							>
							TEAM
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/contact'
								onClick={toggleMenu}
							className={({isActive}) => isActive ? "bg-gradient-to-r from-[#fb00a0] to-[#821eff] rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-white border border-gray-400 mt-1 block"}
							>
							CONTACT
							</NavLink>
						</li>

					</ul>
				</div> 
				: null
			}
		</nav>

  	);
}
