import React, { useState } from 'react'
export const AccountContext = React.createContext() 

const accountUser = {username:'Ali', account:'8838590939', dateJoined:'May, 16 1998'} 

const AccountProvider = (props)=>{
    let [user, setUser] = useState(null)
    const login = ()=>{
       
        setUser(accountUser)
    }

    const updateUser = (updatedUser)=>{

        setUser(updatedUser)
    }

    const logout = ()=>{
        setUser(null)
    }
    return (
        <AccountContext.Provider value={{user:user, updateUser, login, logout,otherValue:'yo'}}>
         {props.children}
        </AccountContext.Provider>
    )
}

export default AccountProvider