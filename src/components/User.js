import { useState } from "react";

const User = ({ name, email }) => {
    const [count] = useState(0);
    return (
        <div className="user-card">
            <h1>{count}</h1>
            <h2>Name: {name}</h2>
            <h2>Contact Us at {email}(coming from functional component)</h2></div>
    )

}

export default User;