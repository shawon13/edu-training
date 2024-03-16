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
import Purchase from "../pages/Purchase/Purchase";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://edu-training-server.vercel.app/events')
            },
            {
                path: '/events',
                element: <Events></Events>,
                loader: () => fetch('https://edu-training-server.vercel.app/events')
            },
            {
                path: '/event/:id',
                element: <PrivetRoute><EventDetails></EventDetails></PrivetRoute>,
                loader: ({ params }) => fetch(`https://edu-training-server.vercel.app/event/${params.id}`)
            },
            {
                path: '/purchase',
                element: <Purchase></Purchase>
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
                element: <PrivetRoute><Events></Events></PrivetRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <PrivetRoute><Contact></Contact></PrivetRoute>
            },
        ]
    }
]
)
export default router;