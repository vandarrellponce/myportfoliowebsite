import React, { useState } from 'react'
import './default.css'
import './App.css'
import { blue, light, green, purple } from './themes'

function App() {
	const [currentTheme, setCurrentTheme] = useState(green)

	useState(() => {
		let theme = localStorage.getItem('vdptheme')
		switch (theme) {
			case 'light':
				setCurrentTheme(light)
			case 'blue':
				setCurrentTheme(blue)
			case 'green':
				setCurrentTheme(green)
			case 'purple':
				setCurrentTheme(purple)
			default:
				setCurrentTheme(green)
		}
	}, [])

	console.log(currentTheme)

	return (
		<div classNameName="App" style={currentTheme}>
			<link rel="stylesheet" type="text/css" href="default.css" />
			{/* <link
				id="theme-style"
				rel="stylesheet"
				type="text/css"
				href={require(`./${currentTheme}.css`)}
			/> */}
			<body>
				<section className="s1">
					<div className="main-container">
						<div className="greeting-wrapper">
							<h1>Hi, I'm Darrell</h1>
						</div>

						<div className="intro-wrapper">
							<div className="nav-wrapper">
								<div className="dots-wrapper">
									<div className="browser-dot" id="dot-1">
										d
									</div>
									<div className="browser-dot" id="dot-2">
										x
									</div>
									<div className="browser-dot" id="dot-3">
										y
									</div>
								</div>
								<ul id="navigation">
									<li>
										<a href="#">Contact</a>
									</li>
								</ul>
							</div>
							<div className="left-column">
								<img
									id="profile_pic"
									src={require('./images/avatar.jpg')}
									alt="avatar"
								/>
								<h5
									style={{
										textAlign: 'center',
										lineHeight: '0',
									}}
								>
									Personalize Theme
								</h5>

								<div id="theme-options-wrapper">
									<div
										onClick={() => {
											setCurrentTheme(light)
											localStorage.setItem(
												'vdptheme',
												'light'
											)
										}}
										id="light-mode"
										className="theme-dot"
									></div>
									<div
										value="./blue.css"
										onClick={() => {
											setCurrentTheme(blue)
											localStorage.setItem(
												'vdptheme',
												'blue'
											)
										}}
										id="blue-mode"
										className="theme-dot"
									></div>
									<div
										value="./green.css"
										id="green-mode"
										className="theme-dot"
										onClick={() => {
											setCurrentTheme(green)
											localStorage.setItem(
												'vdptheme',
												'green'
											)
										}}
									></div>
									<div
										value="./purple.css"
										id="purple-mode"
										className="theme-dot"
										onClick={() => {
											setCurrentTheme(purple)
											localStorage.setItem(
												'vdptheme',
												'purple'
											)
										}}
									></div>
								</div>

								<p id="settings-note">
									*Theme settings will be saved for
									<br />
									your next visit
									<br />
								</p>
							</div>
							<div className="right-column">
								<div id="preview-shadow">
									<div id="preview">
										<div
											id="corner-tl"
											className="corner"
										></div>
										<div
											id="corner-tr"
											className="corner"
										></div>
										<h3>What I Do</h3>
										<p>
											I am an engineer and a self-taught
											web developer. I'm into making web
											apps from front-end to back-end.
										</p>
										<div
											id="corner-bl"
											className="corner"
										></div>
										<div
											id="corner-br"
											className="corner"
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="s2">
					<div className="main-container">
						<div className="about-wrapper">
							<div className="about-me">
								<h4>More about me</h4>
								<p>
									I build and clone popular websites for fun,
									hone my skills and learn new techniques.
								</p>
								<p>
									As of now, I work in a different field of
									expertise as a security systems design
									engineer and I am in search of a great team
									to offer me oppurtunity and projects in web
									dev world.
								</p>

								<hr />
								<h4>SKILLS & TOP EXPERTISE</h4>
								<p>
									A fullstack web developer with primary focus
									on React and Node.js:
									<a target="_blank" href="resume.pdf">
										Download Resume
									</a>
								</p>

								<div id="skills">
									<ul>
										<li>Node.js</li>
										<li>Express.js</li>
										<li>Mongoose.js</li>
										<li>GraphQL</li>
										<li>MongoDB</li>
										<li>Firebase</li>
									</ul>

									<ul>
										<li>React.js</li>
										<li>Javasript</li>
										<li>HTML/CSS</li>
										<li>Heroku</li>
										<li>Docker</li>
										<li>Kubernetes</li>
									</ul>
								</div>
							</div>

							<div className="social-links">
								<img
									id="social_img"
									src={require('./images/github.jpg')}
									alt="github"
								/>
								<h3>Check out my recent works on Github</h3>
								<a
									target="_blank"
									href="https://github.com/vandarrellponce"
								>
									GitHub: github.com/vandarrellponce
								</a>

								<a
									target="_blank"
									href="https://hub.docker.com/u/vandarrellponce"
								>
									Docker: hub.docker.com/u/vandarrellponce
								</a>

								<a
									target="_blank"
									href="https://www.facebook.com/chumemplang"
								>
									Facebook: facebook.com/chumemplang
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="s1">
					<div className="main-container">
						<h3 style={{ textAlign: 'center' }}>
							Some of my past projects
						</h3>
						<div className="post-wrapper">
							<div>
								<div className="post">
									<img
										className="thumbnail"
										src={require('./images/bike.jpg')}
										alt="bike"
									/>

									<div className="post-preview">
										<h6 className="post-title">My bike</h6>
										<p className="post-intro">
											A picture of my bike. Because I love
											riding my bike during weekends and
											shout out to my girlfriend Xyren for
											allowing me go for a ride every
											weekends :)
										</p>

										<a href="#">Read More</a>
									</div>
								</div>
							</div>

							<div>
								<div className="post">
									<img
										className="thumbnail"
										src={require('./images/instagram.jpg')}
										alt="bike"
									/>
									<div className="post-preview">
										<h6 className="post-title">
											Instagram clone
										</h6>
										<p className="post-intro">
											A simple Instagram clone using
											React.Js, Google Firebase
											Authentication, Storage, Firestore
											and Hosting. Deployed App link at
											<a
												target="_blank"
												href="https://vdp-instagram.web.app"
											>
												https://vdp-instagram.web.app
											</a>
											<a href="#">Read More</a>
										</p>
									</div>
								</div>
							</div>
							<div>
								<div className="post">
									<img
										className="thumbnail"
										src={require('./images/amazon.jpg')}
										alt="bike"
									/>
									<div className="post-preview">
										<h6 className="post-title">
											Amazon clone
										</h6>
										<p className="post-intro">
											A simple Amazon website clone using
											React.Js, Context API, Google
											Firebase (Authentication, Hosting).
											Check out demo app at
											<a
												target="_blank"
												href="https://vdp-amzon.web.app"
											>
												https://vdp-amzon.web.app
											</a>
											<a href="#">Read More</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="s2">
					<div className="main-container">
						<h3 style={{ textAlign: 'center' }}>Get In Touch</h3>

						<form id="contact-form">
							<label>Name</label>
							<input
								type="text"
								className="input-field"
								name="name"
							/>

							<label>Subject</label>
							<input
								type="text"
								className="input-field"
								name="subject"
							/>

							<label>Email</label>
							<input
								type="text"
								className="input-field"
								name="email"
							/>

							<label>Message</label>
							<textarea
								className="input-field"
								name="message"
							></textarea>

							<input id="submit-btn" type="submit" value="Send" />
						</form>
					</div>
				</section>
				<script type="text/javascript" src="index.js" />
			</body>
		</div>
	)
}

export default App
