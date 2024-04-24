"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function PokeinfoPage() {
    const [poke, setPoke] = useState(null)
    const [loading, setLoading] = useState(true)

    const getPokemonDetail = async () => {
        try {
            setLoading(true)
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
            let response = await res.json()
            setPoke(response || null)
            console.log(response, " RES")
        } catch (error) {
            console.log(error, " ERROR")
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {

        getPokemonDetail()
    }, [])



    const params = useParams();
    console.log(params, " PARAMS")
    return (
        <div className=' px-20 py-10'>
            <Link href={'/'} className=' px-5 py-3 text-white bg-sky-800 rounded-md'>Go Back</Link>
            <div className='mt-10 flex justify-center items-center text-center'>
                {
                    loading ? (<h1>...</h1>) : (
                        <div className=' shadow-md p-10 rounded-sm bg-sky-100 '>
                            <h2 className=' font-semibold text-orange-400 text-l '>{poke?.name.toUpperCase() || ''}</h2>
                            <Image src={poke?.sprites?.front_default} width={300} height={300} alt={poke?.name} />
                            <div className=' flex flex-col items-center'>
                                {
                                    poke?.types?.map((item, i) => {
                                        return (
                                            <div key={`${i}-`} className=' flex text-center'>
                                                <div>name :</div>
                                                <div >{item?.type?.name || ''}</div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default PokeinfoPage