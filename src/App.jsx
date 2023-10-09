import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About";
import Artist from "./components/Artist/Artist";
import Contact from "./components/Contact/Contact";
import { NotFound } from "./components/NotFound/NotFound";

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
