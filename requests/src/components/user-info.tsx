import React from 'react'
import useUser from '../hooks/use-user'
export default function UserInfo() {
  const { user, userRequestStatus, getUser } = useUser()

  React.useEffect(() => {
    getUser('gus')
  }, [getUser])

  if (userRequestStatus === 'loading') {
    return <div>Carregando status...</div>
  }

  return (
    <ul>
      <li>Username(id): {user?.id}</li>
      <li>Nome:{user?.name} </li>
    </ul>
  )
}
