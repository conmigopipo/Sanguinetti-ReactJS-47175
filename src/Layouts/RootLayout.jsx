import NavBar from '../components/NavBar/NavBar'

import { Outlet } from 'react-router-dom'
const RootLayout = () => {
  return (
    <>
        <header>
            <NavBar />
        </header>

        <main>
            <Outlet/>
        </main>
    </>
   
  )
}

export default RootLayout