import React, { useContext } from "react";
import Logo from "../img/logo23.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
	const { currentUser, logout } = useContext(AuthContext);
	const navigate = useNavigate();
	const handleClick = () => {
		logout();
		navigate("/");
	}
	return (
		<div className='navbar'>
			<div className='container'>
				<div className='logo'>
					<Link to="/">
						<img src={Logo} alt='logo' />
					</Link>
				</div>
				<div className='links'>
					<Link className='link' to='/?cat=art'>
						<h6>ART</h6>
					</Link>
					<Link className='link' to='/?cat=science'>
						<h6>SCIENCE</h6>
					</Link>
					<Link className='link' to='/?cat=tech'>
						<h6>TECH</h6>
					</Link>
					<Link className='link' to='/?cat=programming'>
						<h6>PROGRAMMING</h6>
					</Link>
					<Link className='link' to='/?cat=design'>
						<h6>DESIGN</h6>
					</Link>
					<Link className='link' to='/?cat=food'>
						<h6>FOOD</h6>
					</Link>
					<span>{currentUser?.username}</span>
					{currentUser ? <span onClick={handleClick}>Logout</span> : <Link className="link" to="/login">Login</Link>}
					<span className='write'>
						<Link to={currentUser ? '/write' : "/login"} className='link'>
							Write
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
