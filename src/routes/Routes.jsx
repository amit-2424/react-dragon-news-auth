import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivateRouts from "./PrivateRouts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                loader: () => fetch("/news.json"),
                element: <Home></Home>,
                
            },
            {
                path:"/news/:id",
                element: <PrivateRouts>
                    <News></News>
                </PrivateRouts>
            },
            {
                path:'/login',
                element: <LogIn></LogIn>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }    
]);

export default router;