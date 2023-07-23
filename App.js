import React from "react";
import ReactDOM from 'react-dom/client';

// React Element == React.createElement => Object => HTMLElement(Render)

// const heading = React.createElement(
//     'h1',
//     {id: 'heading'},
//     'Welcome using React Element'
// );

// console.log(heading);

// JSX - HTML-like or XML-like syntax
//JSX code is transpiled before it reaches the JS engine - done by PARCEL using Babel

// JSX => converted to React.createElement transpiled by BABEL => ReactElement-JS object => HTMLElement(render)
// const jsxHeading = (
//         <h1 
//             id="heading" className="head-up" tabIndex="1">
//                 Welcome using JSX syntax
//         </h1>
// );




// const fn = () => true;
// //is same as
// const fn = () => {
//     return true;
// }



// React Functional Component -- Both ways work, whether use return statement or not (just addition of curly braces happens)
const num = 100;

// // React element inside element
const elem = <span>React element inside react element</span>

// // React element inside component:
const subHeadingEl = (
    <span className="sub-heading">this is react element 
        {elem}
    </span>
)
const Title = () => (
    <h2 className="my-title">This is my title comp</h2>
);
const HeadingComponent = () => {
    return (
        <>
            <div id="container-1"> 
                <h1>Welcome to React Functional Comp</h1>
                <Title/>
                <div>{num * 2}</div>
                <div>
                    <span>Hey, </span>
                    {subHeadingEl}
                </div>
            </div>
            <div id="container-2"> </div>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
// root.render(jsxHeading);
root.render(<HeadingComponent />)