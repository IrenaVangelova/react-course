import { useState } from "react";
import LoginAction from "./NavbarActions/LoginAction/loginAction";
import "./Navigation.css";

const Navigation = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        if(loggedIn === false) setLoggedIn(true);
        else setLoggedIn(false);
    }

    return (
        <nav>
            <div className="logo">
                <img
                    src="https://logos-world.net/wp-content/uploads/2021/11/The-Office-Logo.png"
                    alt="Office logo"
                />
                <span className="logo__title">Management app</span>
            </div>
            <div className="nav-elements">
                <LoginAction isLoggedIn={loggedIn} login={handleLogin} username={"Irena"} />
            </div>
        </nav>
    );
};

export default Navigation;