import React from "react";
import "../styles/Portfolio.scss";
import Header from "../components/Header";
import Project from "../components/Project"


function Portfolio() {
	return (

		<div className="wrapper">
			<Header />


			<section id="home" className="sec-main">
				<h1 className="main-heading">Rachel L. Williams</h1>
			</section>
			<section id="about" className="sec-about">
				<div className="container">
					<h1>About me</h1>
					<hr />
					<div className="row">
						<div className="col">
							<p><img className="about-img"src="/rachel.jpg" alt="Rachel Lauren" />
							Hi, my name is Rachel Williams. I graduated from
					Seminole
					High School in 2002. I
					attended
					Seminole Community College, now known as, Seminole State College, majoring in elementary
					education.
					I previously worked in customer service as an Employee Benefits Administrator. I left
					that job after nine years and started as a software QA analyst. The company that I worked
					for wanted all
					of their QA Analysts to learn automation, and I was bit by the coding bug. I decided to take
					this course so that I could utilize the skills that I will learn and apply that to writing
					automated tests and eventually look into
					becoming an SDET after perfecting my craft.</p>
						</div>
					</div>
				</div>
			</section>
		<Project />
			<section id="contact" className="sec-contact">
				<div className="container">
					<h1>Contact Me</h1>
					<hr />
					<div className="row">
						<div className="col-sm-4 col-sm-offset-4">
							<form className="center-block" action="#" method="post">
								<div className="form-group">
									<label className="sr-only" htmlFor="inputName">Full name</label>
									<input id="inputName" className="form-control" type="text" placeholder="John Smith" required />
								</div>
								<div className="form-group">
									<label htmlFor="inputMail" className="sr-only">Email Address</label>
									<input id="inputMail" className="form-control" type="email" placeholder="john.smith@mail.com" required />
								</div>
								<div className="form-group">
									<label htmlFor="inputMessage" className="sr-only">Your Message</label>
									<textarea id="inputMessage" className="form-control" name="message" cols={30} rows={8} required defaultValue={""} />
								</div>
								<div className="form-group">
									<button className="btn btn-default center-block" type="submit">Contact Me</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<footer id="footer">
				<div className="container">
					<p id="contact-socials">(407)403-2204-M |<a href="mailto:rachel_wms@hotmail.com">
						rachel_wms@hotmail.com</a>
					</p>
					<ul className="soc-media-ul">
						<li>
							<a href="https://github.com/raych84" i className="fab fa-github" style={{ color: 'black' }}>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/rachel-williams-ab2029178/" i className="fab fa-linkedin" style={{ color: 'black' }} />
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}

export default Portfolio;