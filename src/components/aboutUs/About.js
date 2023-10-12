import User from "./User";
import UserClass from "./UserClass";
import './About.scss';
import { Component } from "react";
import UserContext from "../../utils/UserContext";

// Functional Component Parent

// const About = () => {
//     return (
//         <div className="p-around">
//             <h1>About Us</h1>
//             <h2>This is my first React App</h2>
//             <User name={"Spardha Jain from functional component"} location={"Indore"}/>
//             <UserClass name={"Spardha Jain from class based component"} location={"Bengaluru"}/>
//         </div>
//     );
// };


// Class Based Component Parent

class About extends Component {
    constructor () {
        super();
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent render")
        return (
            <div className="p-around">
                <h1>About Us</h1>
                <h2>This is my first React App</h2>
                <UserContext.Consumer>
                    {(data) => {
                        return(
                            <h3>{data.loggedInUser}</h3>
                        )
                    }}
                </UserContext.Consumer>
                <User name={"Spardha Jain from functional component"} location={"Indore"}/>
                <UserClass location={"Bengaluru"}/>
                <UserClass location={"Bengaluru"}/>
            </div>
        );
    }
}

export default About;