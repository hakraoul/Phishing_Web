import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Sign_In from "./components/Sign-In";
import InfoForm from "./components/InfoForm";
import MainLayout from "./components/MainLayout";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {
                path:"sign_in",
                element:<Sign_In />,
            },
            {
                path:"form",
                element:<InfoForm />
            }
        ]
    }
])

function App() {
    return <RouterProvider router={router} />
}

export default App;