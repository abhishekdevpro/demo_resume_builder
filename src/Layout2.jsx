import Navbar from './Component/Dashboard/Navbar'
import { Outlet } from 'react-router-dom'
import Left from './Component/Dashboard/Left'
import Right from './Component/Dashboard/Right'
import ProfilePage from './Component/Dashboard/Profile'

function Layout() {
  const token =localStorage.getItem('token')
  return token?(
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="mt-16">
        <ProfilePage />
        <div className="flex">
          <Left />
          <Outlet />
          <Right />
        </div>
      </div>
    </div>
  ):(
    <h1 className='mt-10 p-5 flex justify-center text-4xl text-red-500'>Please!! Login First</h1>
  )
}

export default Layout
