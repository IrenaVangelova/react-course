import Login from "./NavbarActions/Login/login";
import "./Navigation.css";

const Navigation = () => {
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
				<Login />
			</div>
		</nav>
	);
};

export default Navigation;
