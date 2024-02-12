import AuthLayout from "../layouts/AuthLayout";
// import DefaultLayout from "../layouts/DefaultLayout";
import Home from "./Home";
import Login from "./Login";

export const config = [
    {
        element: <Home />,
        path: '/',
        Layout: AuthLayout
    },
    {
        element: <Login />,
        path: '/login',
        Layout: AuthLayout
    }
]