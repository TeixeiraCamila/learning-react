import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UserInfo from './components/user-info'
import UserList from './components/users-list'
import UserNewForm from './components/user-new-form'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfo />
      <hr />
      <UserNewForm />
      <hr />
      <UserList />
    </QueryClientProvider>
  )
}

export default App
