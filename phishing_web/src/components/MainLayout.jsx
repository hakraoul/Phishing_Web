import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <>
        <header className='mt-5 mx-10 '><Navbar/></header>
        <main className='grid place-items-center mt-14'>
            <div className='border-solid border-2 rounded w-1/2 p-5'>
                <Outlet/>
            </div>
        </main>
        <footer><Footer/></footer>
    </>
  )
}
