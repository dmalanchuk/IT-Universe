import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Index from "./pages/Index.page";
import Login from "./pages/Login.page"
import Regist from "./pages/Regist.page";
import Contact from "./pages/Contact.page";
import Product from "./pages/Product.page";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/reg',
    element: <Regist />
  },
  {
    path: '/prod',
    element: <Product />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
