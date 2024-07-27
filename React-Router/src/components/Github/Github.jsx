import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData();

  // const [data , setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/Azhar2786')
  //   .then(res => res.json())
  //   .then(data  => {
  //     setData(data);
  //   })
  // }, []);
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      Github follwer: {data.followers}
      <img src={data.avatar_url} alt="gir" width={300} />
    </div>
  )
}

export default Github


export const GithubInfo = async () =>  {
  const response = await fetch('https://api.github.com/users/Azhar2786');

  return response.json();
}