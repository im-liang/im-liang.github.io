import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Home from './home/Home';
import Blog from './blog/Blog';
import Post from './post/Post';
import NotFound from './404/NotFound';
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <NotFound />,
  },
  {
    path: "/blog/:name",
    element: <Post />,
    errorElement: <NotFound />,
  },
]);

export default function App() {
  return (
    <>
    <Navbar/>
      <div className="main">
        <RouterProvider router={router} />
      </div>
    <Footer/>
    </>
  );
}