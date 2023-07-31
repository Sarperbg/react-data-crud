import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    axios.get("http://localhost:3003/users").then((res) => {
      setUsers(res.data.reverse());
    });
  };

  useEffect(() => {
    loadUsers();
  })

  function Delete(id) {
    axios.delete(`http://localhost:3003/users/${id}`)
      .then(
        loadUsers()
      )
  }


  return (
    <div className='w-full h-full flex flex-col px-10 py-8'>

      <div className='w-full flex flex-col min-h-[50vh] justify-center items-center'>

        <h1 className='text-black text-3xl font-semibold font-Montserrat'>Home Page</h1>

        <table className="w-[95%] text-center overflow-hidden overflow-y-scroll text-sm font-light mx-auto mt-8 border-black border-b">
          <thead
            className="border-b bg-gray-800">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">#</th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">Name</th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">Email</th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">Phone</th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => (


              <tr key={index} className="bg-white border-b">
                <td className="text-lg whitespace-nowrap px-6 py-4 font-light text-gray-900">
                  {index + 1}
                </td>
                <td className="text-lg whitespace-nowrap px-6 py-4 font-light text-gray-900">
                  {data.name}
                </td>
                <td className="text-lg whitespace-nowrap px-6 py-4 font-light text-gray-900">
                  {data.email}

                </td>
                <td className="text-lg whitespace-nowrap px-6 py-4 font-light text-gray-900">
                  {data.phone}
                </td>
                <td className='flex justify-center items-center space-x-4 whitespace-nowrap mt-2'>
                  <Link to={`/users/${data.id}`} className='px-6 py-2 text-white bg-black rounded-lg'>View</Link>
                  <Link to={`/edit-user/${data.id}`} className='px-6 py-2 text-white bg-blue-600 rounded-lg'>Edit</Link>
                  <button onClick={() => Delete(data.id)} className='px-6 py-2 text-white bg-red-600 rounded-lg'>Delete</button>

                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>




    </div>
  )
}

export default Home
