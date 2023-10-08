import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Artist from "./components/Artist/Artist";
import NotFound from "./components/NotFound/NotFound";
import LayOut from "./components/LayOut/LayOut";

const routes = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "artist", element: <Artist /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={routes}>
      <div></div>
    </RouterProvider>
  );
}
