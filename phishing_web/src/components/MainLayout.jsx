import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export default function MainLayout() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/sign_in');
    },[navigate]);
    
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
