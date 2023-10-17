import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
export default function MainLayout() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/sign_in');
    },[navigate]);

  return (
    <>
        <header><Navbar/> </header>
        <main>
            <Outlet/>
        </main>
        <footer><Footer/></footer>
    </>
  )
}
