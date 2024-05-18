import React, { useContext } from "react";
import './HomePage.css';
import PasswordContext from "../../context/PasswordContext";
const HomePage = props => {

    const passCtx = useContext(PasswordContext);
    const total = passCtx.passwords.length;
    return (
        <div>
            <h1>Password Keeper</h1>
            <span>Total:{total}</span>
            <div>
                <button onClick={props.onShow}>Add New Password</button>
            </div>
            <div>
                <span>Search</span>
                <input type="text" />
            </div>
        </div>
    );
};

export default HomePage;