import React, { useEffect } from "react";
import Contact from "./Contact";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Supriya",
                location: "Default",
                contact: "Default"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/supriyac10");
        const json = await data.json();

        this.setState({
            userInfo: json
        })
        console.log(json);

    }
    render() {
        return (
            <div className="user-card">
                {/* <h1>Count: {this.state.count}</h1>
                <button onClick={() => {
                    //never update the state variable directly
                    this.setState({ count: this.state.count + 1 });
                }}  >Count Increase</button> */}
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>Contact Us at {this.state.userInfo.html_url}</h4></div>)
    }
}

export default UserClass;