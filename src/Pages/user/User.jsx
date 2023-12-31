import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const User = () => {

  const [user, setUser] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:3003/users/${id}`).then((res) => {
        setUser(res.data)
      })

  }, [])
  const { id } = useParams()


  return (
    <div className='w-full h-full flex justify-center items-center flex-col'>

<Link to="/" className="text-white font-semibold font-Inter px-6 py-2 rounded-xl bg-zinc-400 text-2xl border-b border-black mt-8">Back to Home</Link>

     {user && (
      <>
      <div className='w-[700px] h-[200px] flex justify-center items-center px-6 py-4 border border-black mt-16'>
        <div className='w-5/12 flex flex-col space-y-4'>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Name</h2>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Email</h2>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Phone</h2>

        </div>

        <div className='w-7/12 flex flex-col space-y-4'>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.name}</h2>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.email}</h2>
          <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.phone}</h2>
          </div>

      </div>
      </>
     )}
    </div>
  )
}

export default User
