import { useState } from "react";

const User = (props) => {
    const {name,location} = props;
    const [count] = useState(0);
    const [count2] = useState(3);
    return (
        <div className="user-details-card">
            <h2>Count: {count}</h2>
            <h3>Count1: {count2}</h3>
            <div className="user-name">
                <span className="user-sub-heading">Name: </span>
                <span>{name}</span>
            </div>
            <div className="user-city">
                <span className="user-sub-heading">City: </span>
                <span>{location}</span>
            </div>
        </div>
    )
};

export default User;