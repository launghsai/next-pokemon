import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <div>
        <ul className='flex justify-center items-center  py-5 space-x-6 bg-gray-500 '>
            <li className=' hover:underline text-white '> <Link href={"/"}>HOME</Link> </li>
            <li className=' hover:underline text-white'> <Link href={'/contact'}>CONTACT</Link> </li>
            <li className=' hover:underline text-white'> <Link href={'/blog'}>BLOG</Link> </li>
            <li className=' hover:underline text-white '> <Link href={'/about'}>ABOUT</Link> </li>
        </ul>
    </div>
  )
}

export default Nav