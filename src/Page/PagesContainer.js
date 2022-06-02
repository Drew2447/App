import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import LoginButton from "../Components/LoginButton";
import { AccountContext } from "../Provider/AccountProvider";

const PagesContainer =()=>{
  let {user, logout} =useContext(AccountContext)

  const renderRightNav=()=>{
    if(user){
      return <button onClick={logout}>logout</button>
    }
    return <LoginButton/>
  }

  return (
    <div>
      <div className="navbar">
        <div>
          <button><NavLink to="/">Home</NavLink></button>
          <button><NavLink to="/about">About</NavLink></button>
          {user && <button><NavLink to="/account">Account</NavLink></button>}
          {user && <button><NavLink to="/User">User</NavLink></button>}
        </div>
        <div>
          {renderRightNav()}
        </div>
      </div>
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};
export default PagesContainer;