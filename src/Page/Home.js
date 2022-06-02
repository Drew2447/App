import React, { useContext } from "react";
import { AccountContext } from "../Provider/AccountProvider";

const Home = ()=>{
    const {user} = useContext(AccountContext)
    return (
        <div>
            <h1>Home People</h1>
            {user && <p>Welcome: {user.username}</p>}
        </div>
    )
}

export default Home