
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page1 from './Pages/Page1.jsx';
import Page2 from './Pages/Page2.jsx';
import Page3 from './Pages/Page3.jsx';
import Nav from './components/Nav.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1/>,
  },

  {
    path: "/login",
    element: <Page2/>,
  },

  {
    path: "/about",
    element: <Page3/>,
  },
]);


function App() {
 

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
