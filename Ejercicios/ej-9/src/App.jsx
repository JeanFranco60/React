
import { createBrowserRouter, RouterProvider } from "react-router-dom";



import Home from "./pages/Home";
import MovieDetails from "./pages/MoviesDetails";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:id",
      element: <MovieDetails />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
