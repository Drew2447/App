import React, { useContext } from "react";
import { AccountContext } from "../Provider/AccountProvider";

const Account = ()=>{
    const {user} = useContext(AccountContext)
    return (
        <div>
            <h1>Account Stuff</h1>
            {user && <p>Welcome: {user.username}</p>}
        </div>
    )
}

export default Account