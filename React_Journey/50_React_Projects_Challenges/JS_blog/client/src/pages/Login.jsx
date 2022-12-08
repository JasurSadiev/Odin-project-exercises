import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});

	const [err, setErr] = useState(null);

	const navigate = useNavigate();

	const handleChange = e => {
		setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
	}

	const handleSubmit = async e => {
		e.preventDefault();
		try {
		await axios.post("/auth/login", inputs);
		navigate("/")
		} catch (error) {
			setErr(error.response.data);			
		}
	}
	return (
		<div className="auth">
			<h1>Login</h1>
			<form>
				<input type="text" placeholder="username..." name="username" onChange={handleChange}/>
				<input type="password" placeholder="password..." name="password" onChange={handleChange}/>
				<button onClick={handleSubmit}>Login</button>
				{ err && <p>{err}</p>}
				<span>
					Don't you have an account? <Link to="/register">Register</Link>
				</span>
			</form>
		</div>
	);
};

export default Login;
