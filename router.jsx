import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/layout/layout"


const router = createBrowserRouter([
    { 
        path: '/' , 
        element: < Layout /> , 
        // children: [
        //     { path: '/', element: < /> },
        // ]
    }, 
    
    

])

export default router