import './loginAction.css'

const LoginAction = (props) => {

    const { isLoggedIn, login, username } = props;

    if (isLoggedIn) {
        return (
            <div>
                <label>Welcome back, {username}!</label>
                <button onClick={login}>Logout</button>
            </div>
        );
    }
    return (
        <div>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default LoginAction;