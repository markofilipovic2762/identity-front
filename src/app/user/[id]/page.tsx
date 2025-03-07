import { UserTable } from '@/components/table-user'
import { getUserAuth, getUserById } from '@/lib/functions'
import React from 'react'

const UserPage = async ({params}: {params: Promise<{id:string}>}) => {
    const id = (await params).id
    const user = await getUserById(parseInt(id))
    const lista = await getUserAuth(parseInt(id))
  return (
    <div>
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <UserTable lista={lista} />
    </div>
  )
}

export default UserPage