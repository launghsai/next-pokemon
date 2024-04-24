import React from 'react'
import Image from 'next/image'
import nextImg from '../../../../public/next.svg'

function TeamPage() {
  return (
    <div>
        <h1 className='font-bold text-3xl text-green-400 '>This is Team page</h1>
        <Image src={nextImg} width={200} height={200} />
    </div>
  )
}

export default TeamPage