import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
const Body = () => {
 const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/Browse",
        element:<Browse/>
    }
  ])

  return (
   <RouterProvider router={appRouter}>   
   </RouterProvider>
   )
}

export default Body