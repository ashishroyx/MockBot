import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between align-middle p-5 bg-gradient-to-t from-[#a1a1aa] to-[#d4d4d8]  '>

        <div className='text-xl dynapuff lg:text-3xl md:text-2xl text-black  '>
            <p className=''>MockBot.</p>
        </div>

          <div className="relative group rounded-full p-[1px] bg-gradient-to-r from-[#09090b] via-[#18181b] to-[#18181b] hover:from-[#3f3f46] hover:via-[#27272a] hover:to-[#18181b] transition-all duration-500">
                    <button className="rounded-full px-6 py-2 text-black bg-white dark:bg-black dark:text-white group-hover:bg-transparent transition-all duration-300">
                        SignIn
                    </button>
                </div>

          

    </div>
  )
}

export default Navbar