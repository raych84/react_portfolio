import React from "react";


function Header(){
	return(
		<nav>
		<ul>
			<li><a href="/resume.pdf">Resume</a></li>
			<li><a className="nav-link text-dark" href="/">Home</a></li>
		</ul>
		</nav>
	)
}

export default Header;