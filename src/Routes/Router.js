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
import Volume5 from "../Pages/Volume5/Volume5";
import Volume6 from "../Pages/Volume6/Volume6";
import Volume7 from "../Pages/Volume7/Volume7";
import Volume8 from "../Pages/Volume8/Volume8";
import Excutive from "../Pages/Excutive/Excutive";
import Volume1 from "../Pages/Volume1/Volume1";
import Volume2 from "../Pages/Volume2/Volume2";
import Volume3 from "../Pages/Volume3/Volume3";
import Volume4 from "../Pages/Volume4/Volume4";
import Volume9 from "../Pages/Volume9/Volume9";
import Volume10 from "../Pages/Volume10/Volume10";
import Volume11 from "../Pages/Volume11/Volume11";
import Volume12 from "../Pages/Volume12/Volume12";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "aboutthejournal",
        element: <AboutTheJournal></AboutTheJournal>,
      },
      {
        path: "aimsandscopes",
        element: <AimsAndScopes></AimsAndScopes>,
      },
      {
        path: "reviewprocess",
        element: <Reviewprocess></Reviewprocess>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/volume1",
        element: <Volume1></Volume1>,
      },
      {
        path: "/volume2",
        element: <Volume2></Volume2>,
      },
      {
        path: "/volume3",
        element: <Volume3></Volume3>,
      },
      {
        path: "/volume4",
        element: <Volume4></Volume4>,
      },
      {
        path: "/volume5",
        element: <Volume5></Volume5>,
      },
      {
        path: "/volume6",
        element: <Volume6></Volume6>,
      },
      {
        path: "/volume7",
        element: <Volume7></Volume7>,
      },
      {
        path: "/volume8",
        element: <Volume8></Volume8>,
      },
      {
        path: "/volume9",
        element: <Volume9></Volume9>,
      },
      {
        path: "/volume10",
        element: <Volume10></Volume10>,
      },
      {
        path: "/volume11",
        element: <Volume11></Volume11>,
      },
      {
        path: "/volume12",
        element: <Volume12></Volume12>,
      },
      {
        path: "/excutive",
        element: <Excutive></Excutive>,
      },
    ],
  },
  {
    path: "/submission",
    element: <Submission></Submission>,
  },
]);
