import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import "./output.css";

document.title = 'No Curse Word'

const App = () => {
    const router = createBrowserRouter(routes);
    return <RouterProvider router={router} />;
};

export default App;