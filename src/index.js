import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home/Home";

import {createBrowserRouter , RouterProvider} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    
    {
        path: "/",
        element: <Home/>
    },
    
])

root.render(<RouterProvider router={router}/>)