import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const navigate = useNavigate();

  const data = {
    name: name,
    email: email,
    phone: phone
  }

  function Submit(e) {
    e.preventDefault();

    axios.post("http://localhost:3003/users", data)
    .then(
      navigate('/')
    )

  }
  return (
    <div className='w-screen h-full flex flex-col justify-center items-center mt-16'>


      <form className='w-[80%] h-full flex flex-col justify-center items-center' >
        <h1 className='text-black text-3xl font-semibold font-Montserrat'>Add User</h1>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Enter your Name'
          className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-2 border border-zinc'

        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Enter your Email'
          className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-2 border border-zinc'

        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type='phone'
          placeholder='Enter your Phone'
          className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-2 border border-zinc'

        />
        <button
          onClick={Submit}
          className='w-[80%] bg-blue-600 mt-4 text-white text-xl font-Montserrat font-normal
         outline-none py-4 pl-6 border border-zinc-400'
        >
          Add User

        </button>

      </form>

    </div>
  )
}

export default AddUser
