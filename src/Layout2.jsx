import Navbar from './Component/Dashboard/Navbar'
import { Outlet } from 'react-router-dom'
import Left from './Component/Dashboard/Left'
import Right from './Component/Dashboard/Right'
import ProfilePage from './Component/Dashboard/Profile'

function Layout() {
  return (
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
  )
}

export default Layout
