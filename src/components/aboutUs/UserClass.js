import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1,
            count1: 2,
            name: "Dummy"
        }
        console.log(this.props.name + " Constructor");
    }

    async componentDidMount() {
        const fetchData = await fetch("https://api.github.com/users/SpardhaJain");
        const data = await fetchData.json();

        this.setState({
            name: data.name
        })
        console.log(this.props.name + " Component Did Mount");
    }

    render() {
        const {location} = this.props;
        const {count, count1, name} = this.state;

        console.log(this.props.name + " render");

        return(
            <div className="user-details-card">
                <h2>Count: {count}</h2>
                <button className="count-increase-cta btn btn-primary"
                    onClick={() => {
                        this.setState({
                            count: count + 1,
                            count1: count1 + 2
                        })
                    }}
                >Increment Count</button>
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
}

export default UserClass;