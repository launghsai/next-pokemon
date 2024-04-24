import React from 'react'

const blogfetch=async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await res.json()
    return response
}

async function BlogPage() {

    const minedata = await blogfetch()
    console.log(minedata, " GG")

    return (
        <div>
            <h1>This is blog page</h1>
            <hr />
            {
                !minedata ?(
                    <div>Loading...</div>                ) :
                    (
                    //    <div>HELLO</div>
                    <>
                    {
                        minedata.map((post)=>{
                            return (
                                <div key={post.id}>
                                    <h3 className='font-bold my-2'>{post.title}</h3>
                                    <p className=' font-normal text-green-700  '>{post.body} </p>
                                </div>
                            )
                        })
                    }
                    </>
                    )
            }
        </div>
    )
}

export default BlogPage