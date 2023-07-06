import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Submission from "../Pages/Submission/Submission";
import AboutTheJournal from "../Pages/Home/Content/RightLinksContent/AboutTheJournal";
import AimsAndScopes from "../Pages/Home/Content/RightLinksContent/AimsAndScopes";
import Reviewprocess from "../Pages/Home/Content/RightLinksContent/Reviewprocess";
import Profile from "../Pages/RahmanMMahbub/Profile/Profile";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            },
            {
                path:'aboutthejournal',
                element: <AboutTheJournal></AboutTheJournal>
            },
            {
                path:'aimsandscopes',
                element: <AimsAndScopes></AimsAndScopes>
            },
            {
                path:'reviewprocess',
                element: <Reviewprocess></Reviewprocess> 
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            }
        ])
    },
    {
        path:'/submission',
        element: <Submission></Submission>
    }
    
])