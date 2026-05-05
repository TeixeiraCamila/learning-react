import useUsers from '../hooks/use-users'

export default function UsersList() {
  const { users, isLoadingUsers } = useUsers()

  if (isLoadingUsers) {
    return <div>Carregando todos os usuário</div>
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          Nome: {user.name} / Username: {user.username}
        </li>
      ))}
    </ul>
  )
} 
