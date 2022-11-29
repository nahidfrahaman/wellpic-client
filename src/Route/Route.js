import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import DetailsService from "../Pages/services/DetailsService";
import Services from "../Pages/services/Services";

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
         element:<Home></Home>
        },
        {
         path:'/services',
         element:<Services></Services>
        },
        {
         path:'/services/id',
         element:<DetailsService></DetailsService>
        },
       
        // {
        //   path:'/catagories/:id',
        //   element:<Catagory></Catagory>,
        //   loader:async({params})=> {
        //     return fetch(`http://localhost:5000/catagories/${params.id}`)}
        // }
      ]
    },
  ])