import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

const About = lazy(() => import("./components/aboutUs/About"));

const AppLayout = () => {
    const [userName, setUserName] = useState();
    //authentication Logic

    useEffect(() => {
        // Make an API call and send username and password
        //response - data name
        const data = {
            name: "Spardha Jain"
        };
        setUserName(data.name);
    }, []);

    return (
        // Providing a new value to UserContext
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="app"> 
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (<Suspense fallback={<h1>About Us is loading...</h1>}>
                    <About />
                </Suspense>)
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)