import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cartpage from "../pages/books/Cartpage";
import { FaWhatsapp } from "react-icons/fa6";
import Whatsapp from "../components/Whatsapp";
import Checkout from "../pages/books/Checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,

            },
            {
                path: "/orders",
                element: <h1>orders</h1>,

            },
            {
                path: "/login",
                element: <Login />,

            },
            {
                path: "/register",
                element: <Register />,

            },
            {
                path: "/cart",
                element: <Cartpage />,

            },
            {
                path: "/checkout",
                element: <Checkout />,

            },

        ]
    },
]);

export default router;
