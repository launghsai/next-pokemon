"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Header() {


  const router = useRouter();
  const [name, setName] = useState('')

  const handleInput = (e) => {
    console.log(e.target.value, " HERE")
    setName(e.target.value)
  }

  const handleForm = (e) => {
    e.preventDefault();
    console.log(name, " POKEMANE")
    router.push(`/pokeinfo/${name}`)
  }



  return (
    <header className=' bg-gradient-to-r from-indigo-300 via-purple-600 to-amber-800 h-[300px] flex justify-center items-center'>
      <div className=' text-center space-y-2'>
        <h1 className=' text-white font-bold text-3xl'>POKEMON FINDER APP</h1>
        <p className=' text-white font-semibold  text-2xl'>Find Your Favourite POKEMON</p>
        <form action='' className='flex bg-green-400 mt-2 p-2 rounded-md' onSubmit={handleForm}>
          <input
            onChange={handleInput}
            type='text'
            placeholder='Pokemon name...'
            className=' w-full rounded-md border border-gray-300 px-3 py-2 text-blue-700 shadow-lg'
          />
          <button  className=' inline-flex items-center mx-2 px-5 py-4 bg-sky-400  text-green-950 rounded-lg shadow-sm shadow-orange-800 ' type='submit' >Search</button>
        </form>
      </div>
    </header>
  )
}

export default Header