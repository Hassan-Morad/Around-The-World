import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Country from "./pages/Country";
import NoPage from "./pages/NoPage";

function App() {
  const routes = createBrowserRouter([{
    path:"/",element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:":country",element:<Country/>}, 
      {path:"*",element:<NoPage />}
    ]
  }])
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
