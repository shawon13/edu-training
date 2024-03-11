import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import About from "../pages/About/About";
import Events from "../pages/Events/Events";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import EventDetails from "../pages/Events/EventDetails";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://edu-training-server.vercel.app/events')
            },
            {
                path: '/event/:id',
                element: <PrivetRoute><EventDetails></EventDetails></PrivetRoute>,
                loader: ({ params }) => fetch(`https://edu-training-server.vercel.app/event/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/events',
                element: <Events></Events>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    }
]
)
export default router;