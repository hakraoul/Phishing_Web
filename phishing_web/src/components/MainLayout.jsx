import {useEffect} from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
    const nav = useNavigate();
    useEffect(() => {
        nav('/sign_in');
    },[nav]);

  return (
    <>
        <header><Navbar/></header>
        <main>
            <Outlet/>
        </main>
        <footer><Footer/></footer>
    </>
  )
}
