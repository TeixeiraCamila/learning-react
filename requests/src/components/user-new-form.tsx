import React from 'react'
import useUser from '../hooks/use-user'
import type { User } from '../models/user'

export default function UserNewForm() {
  const formRef = React.useRef<HTMLFormElement>(null)
  const { createUser, userRequestStatus } = useUser()

  async function handleSubmit(e: React.FormEvent) {
    if (!formRef.current) return

    e.preventDefault()

    const data = new FormData(formRef.current)
    const payload = {
      username: data.get('username'),
      name: data.get('name'),
    }
    console.log("🚀 ~ handleSubmit ~ payload:", payload)

    await createUser(payload as User)

    
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="Username" name="username" required />
      </div>
      <div>
        <input type="text" placeholder="Name" name="name" required />
      </div>
      <div>
        <button type="submit">
          {userRequestStatus === 'saving' ? 'Criando...' : 'Criar User'}
        </button>
      </div>
    </form>
  )
}
