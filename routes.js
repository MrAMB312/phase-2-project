import Home from "./components/Home";
import About from "./components/About";
import RepertoireList from "./components/RepertoireList";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
        path: "/",
        component: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        component: <About />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/repertoirelist",
        component: <RepertoireList />,
        errorElement: <ErrorPage />,
    }
];

export default routes;