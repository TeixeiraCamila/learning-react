import Sidebar from '../components/Sidebar'
import List from '../components/List'
import Logo from '../assets/icons/Logo.svg?react'
export default function AppPage() {
  return (
    <>
      <div className='relative'>
        <div className="py-3 px-5 rounded-b-md rounded-tl-0 rounded-tr-0 w-fit bg-gray-600 absolute top-0 left-0">
        <Logo />
      </div>
      <div className="flex gap-4 p-3">
        <Sidebar />
        <List />
      </div>
      </div>
    </>
  )
}
