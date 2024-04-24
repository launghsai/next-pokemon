"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'


function Pokemon() {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        try {
            setLoading(true)
            let res = await fetch('https://pokeapi.co/api/v2/pokemon')
            let response = await res.json()
            setPokemon(response?.results || [])
            console.log(response, " RES")
        } catch (error) {
            console.log(error, " ERROR")
        }

    }




    return (
        <div className=' container text-center mx-auto'>
            <div className=' grid  grid-cols-5 space-x-2 space-y-2'>
                {
                    pokemon && pokemon.map((item, i) => {
                        return (
                            <Link
                                key={item.name}
                                href={'/pokeinfo/[id]'} as={`/pokeinfo/${i + 1}`}>
                                <div className='flex flex-col justify-center items-center p-5 shadow-md space-x-3 transition cursor-pointer hover:shadow-lg m-3 rounded-md' key={i}>
                                    <div>{item.name}</div>
                                    <Image className='text-center' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} width={100} height={100} alt={item.name} />
                                </div>
                            </Link>

                        )
                    })
                }
            </div>

        </div>

    )
}

export default Pokemon