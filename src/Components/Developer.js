import React from 'react'
import terminal from '../assets/terminal.png'

const Developer = () => {
  return (
    <section className='w-full h-screen bg-slate-700 px-6 md:flex justify-center items-center space-y-4 py-10'>

        {/* Tittle section */}
       <div className='space-y-4 max-w-[500px]'>
        <h1 className='text-3xl text-white font-bold'>
            Superpowers for DEFI developers.
        </h1>

        <p className='text-gray-300'>Checkout <span className='text-blue-500'>documentation</span> ,the <span className='text-blue-500'>quick start</span> or a guid below to integrate your project with thousands of tokens and billions of liquidlity</p>
       </div>

       {/* img section */}
       <div>
            <img className='w-96' src={terminal} alt="" />
       </div>
    </section>
  )
}

export default Developer