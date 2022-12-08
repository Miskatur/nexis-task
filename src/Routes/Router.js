import { createBrowserRouter } from "react-router-dom";
import Attendence from "../components/Attendence/Attendence";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Main from "../Main/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/attendance',
                element: <Attendence></Attendence>
            }
        ]
    },

])