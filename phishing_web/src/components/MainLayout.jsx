import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
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
