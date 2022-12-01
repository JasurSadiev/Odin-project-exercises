import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="header__logo">
				<div className="header__search"></div>

				<div className="header__nav">
					<div className="nav__item">
						<span className="nav__itemLineOne">Hello Guest</span>
						<span className="nav__itemLineTwo">Sign In</span>
					</div>
					<div className="nav__item">
						<span className="nav__itemLineOne">Your</span>
						<span className="nav__itemLineTwo">Shop</span>
					</div>
					<div className="nav__item">
						<span className="nav__itemLineOne">Basket</span>
						<span className="nav__itemLineTwo">0</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
