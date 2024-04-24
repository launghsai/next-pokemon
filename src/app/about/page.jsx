import Link from 'next/link'
import React from 'react'

function AboutPage() {
  return (
    <div>
   <div className=' text-2xl font-semibold '>This is About page </div>
    <Link href={'/about/team'}> <h2 className=' inline-block p-3 bg-pink-300 rounded-lg px-8 '>This is our team</h2> </Link>
    </div>
 
  )
}

export default AboutPage