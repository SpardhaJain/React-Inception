import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
    return (
        <div className="app"> 
            <Header />
            <Body />
        </div>
    );
};



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)