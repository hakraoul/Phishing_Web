import {useEffect} from 'react'
import { Outlet,useNavigate } from 'react-router-dom'

export default function MainLayout() {
    const nav = useNavigate();
    useEffect(() => {
        nav('/sign_in');
    },[nav]);
    
  return (
    <>
        <header></header>
        <main>
            <Outlet/>
        </main>
        <footer></footer>
    </>
  )
}
