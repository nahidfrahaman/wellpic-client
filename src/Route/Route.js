import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddService from "../Pages/AddServices/AddService";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import MyBlog from "../Pages/MyBlog/MyBlog";
import MyRevies from "../Pages/MyReview/MyRevies";
import DetailsService from "../Pages/services/DetailsService";
import Services from "../Pages/services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



export  const router = createBrowserRouter([
    {
      path:"/",
      element: <MainLayout></MainLayout>,
      children:[
        {
         path:'/',
         element:<Home></Home>
        },
       
        {
         path:'/home',
         element:<Home></Home>,
        },
        {
         path:'/services',
         element:<Services></Services>,
         loader : async()=>{
          return fetch('https://b6a11-service-review-server-side-nahidfrahaman.vercel.app/all/services')
         }
        },
        {
         path:'/service/:id',
         element:<DetailsService></DetailsService>,
         loader: async({params})=>{
           return fetch(`https://b6a11-service-review-server-side-nahidfrahaman.vercel.app/service/${params.id}`)
         }
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/signup',
          element: <SignUp></SignUp>
        },
        {
          path: "/myreview",
          element: <PrivateRoute><MyRevies></MyRevies></PrivateRoute>
        },
        {
          path: "/addservices",
          element: <PrivateRoute><AddService></AddService></PrivateRoute>

        },
        {
          path: "/blog",
          element: <MyBlog></MyBlog>
        }
       
        // {
        //   path:'/catagories/:id',
        //   element:<Catagory></Catagory>,
        //   loader:async({params})=> {
        //     return fetch(`https://b6a11-service-review-server-side-nahidfrahaman.vercel.app/catagories/${params.id}`)}
        // }
      ]
    },
  ])