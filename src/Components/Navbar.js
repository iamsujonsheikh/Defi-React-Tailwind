import React, { useState } from 'react'
import { AiOutlineMenuFold,AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleNavOpen = () => {
        setOpen(!open)
    }

  return (
    <section className='w-full h-16 bg-slate-900 fixed px-6 flex justify-between items-center'>

        {/* logo section */}
        <h1 className='text-3xl font-bold text-blue-400'>Defi</h1>

        {/* Desktop navigation menu */}
        <ul className='hidden md:flex text-slate-200 font-semibold uppercase space-x-6'>
            <li>Platform</li>
            <li>Developers</li>
            <li>Comunity</li>
            <li>About</li>
            <button className='bg-blue-600 text-white bg-opacity-40 text-semibold py-1 px-4 rounded-full shadow-md'>
            Use Defi
            </button>
        </ul>

        {/* mobile menu  section*/}
        <ul className='text-white cursor-pointer' onClick={handleNavOpen}>
            {
                (!open) ? <AiOutlineMenuFold size={25}/> : <AiOutlineClose size={25}/> 
            }
            {/* absolute menu section */}
            <ul className={(!open) ? 'hidden' : 'absolute top-16 left-0 w-full px-10 uppercase text-center font-semibold cursor-pointer'}>

            <li className='border-b p-2 hover:bg-slate-500 rounded duration-300'>Platform</li>
            <li className='border-b p-2 hover:bg-slate-500 rounded duration-300'>Developers</li>
            <li className='border-b p-2 hover:bg-slate-500 rounded duration-300'>Comunity</li>
            <li className='border-b p-2 hover:bg-slate-500 rounded duration-300'>About</li>

            <button className='w-full my-4 py-2 rounded bg-indigo-500 shadow hover:bg-green-500 duration-500'>
            Use Defi
            </button>
        </ul>
        </ul>

    </section>
  )
}

export default Navbar