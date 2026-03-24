
import Container from "../components/container"
import Logo from '../assets/images/logo-icon.svg?react'
export default function Header() {
  return <>
    <Container as="header" className="mt-3 md:mt-20 flex items-center gap-3">
      <Logo className="h-9 md:h-12"/> 
      <h1 className="text-2xl font-bold">Todo App</h1>
    </Container>
  </>
}