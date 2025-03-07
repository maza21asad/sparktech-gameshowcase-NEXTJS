import React from 'react'

interface User {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const GamePages = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos', { cache: 'no-store'});
    const users: User[] = await res.json();

  return (
    <>
        <h1>Users</h1>
        <ul>
            {users.map(user => <li key={user.id}>{user.title}</li>)}
        </ul>
    </>
  )
}

export default GamePages