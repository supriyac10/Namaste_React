import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
    return (
        <div>
            <h1>About</h1><h2> React Web Series by Supriya!</h2>
            <UserContext.Consumer>
                {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
            </UserContext.Consumer>
            <UserClass name={"Sinchuu"} email={"supriyac1010@gmail.com "} />
        </div>
    )
}

export default About;