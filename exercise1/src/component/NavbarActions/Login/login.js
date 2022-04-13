import './login.css'
import { useState } from 'react';

const Login = (username) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    if (isLoggedIn) {
        return (
            <div>
                <label>Welcome back, {username}!</label>
                <button onClick={() => setLoggedIn(false)}>Logout</button>
            </div>
        );
    }
    return (
        <div>
            <form>
                <input type="text" id="username" name="username" placeholder="username" />
                <input type="text" id="password" name="password" placeholder="password" />
                <button onSubmit={() => setLoggedIn(true)}>Login</button>
            </form>
        </div>
    );
}

export default Login;