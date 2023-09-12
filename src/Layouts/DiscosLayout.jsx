import { NavLink, Outlet } from "react-router-dom"

import './DiscosLayout.css'

const DiscosLayout = () => {
  return (
    <div className="discos-layout">
      <main>
      <Outlet/>
      </main>
    </div>
    
  )
}

export default DiscosLayout