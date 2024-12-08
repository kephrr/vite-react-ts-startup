import { lazy } from "react";

import {RouteObject} from "react-router-dom";
import Landing from "./pages/landing.tsx";
import Signup from "./pages/signup.tsx";
import NotFound from "./pages/not-found.tsx";

// eslint-disable-next-line react-refresh/only-export-components
const ExploreLayout = lazy(() => import("./layouts/explore-layout"));
// eslint-disable-next-line react-refresh/only-export-components
const Explore = lazy(() => import("./pages/explore"));
// eslint-disable-next-line react-refresh/only-export-components
const DetailProfile = lazy(() => import("./pages/detail-profile"));


export const routes: RouteObject[] = [
    { path: "/", element: <Landing /> },
    { path: "/signup", element: <Signup /> },
    { path: "/explore", element: <Explore /> },
    { path: "/explore/details/:id", element: <DetailProfile /> },
    { path: "*", element: <NotFound /> },
    {
        path: "/explore",
        element: <ExploreLayout />,
        children: [
            { path: "", element: <Explore /> },
            { path: "details/:id", element: <DetailProfile /> },
        ],
    },
];