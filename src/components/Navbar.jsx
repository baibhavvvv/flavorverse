import React, { useState } from 'react'
import Logo from '../images/logo.png'
import {HiMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [open,setOpen] = useState(false)
  return (
    <header className='w-full fixed z-10 bg-black opacity-90'>
        <nav className='flex w-full py-2 md:py-3 px-4 
        items-center justify-between md:px-20'>
            <a href="/" className='text-white justify-center flex items-center text-lg cursor-pointer'>
                <img src={Logo} alt="Logo" className='hidden md:block w-8 h-8
                lg:w-14 lg:h-14' />
                Flavor <span>Verse</span>
            </a>
            <ul className='hidden md:flex text-white gap-6'>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Explore</a>
              </li>
              <li>
                <a href="/">Favorites</a>
              </li>
            </ul>
            <button title='Sign in' containerstyle='hidden md:block bg-transparent border border-white
             text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]'></button>
             <button className='block md:hidden text-white text-xl'
             onClick={() => setOpen(prev => !prev)}
             >
              {open ? <AiOutlineClose/> : <HiMenuAlt3/>}
             </button>
        </nav>
        <div className={`${open ? "flex":"hidden"}
             bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px] `}>
              <a href="/">Home</a>
             <a href="#recipes">Recipes</a>
             <a href="/">Favorites</a>
             </div>
    </header>
  )
}

export default Navbar