import React from 'react'

interface Ourgame {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const OurGames = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos', { cache: 'no-store'});
    const users: Ourgame[] = await res.json();
  return (
    <div>
        <h1 className='text-3xl p-1'>Our games</h1>
        <p className='text-2xl p-1 mb-3'>This is a fake API data from Google to integrate product data.</p>
        <ul>
            {users.map(user => <li key={user.id}>{user.title}</li>)}
        </ul>
    </div>
  )
}

export default OurGames