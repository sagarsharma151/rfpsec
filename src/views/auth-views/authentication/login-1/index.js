import React from 'react'
import LoginForm from '../../components/LoginForm'
import { Row, Col } from "antd";
import { useSelector } from 'react-redux';
import { CheckCircleOutlined, LeftOutlined } from '@ant-design/icons';

const backgroundURL= '/img/others/Frame.png'
const backgroundStyle = {
	backgroundImage: `linear-gradient(to bottom, rgba(55, 81, 255, 0.7), rgba(55, 81, 255, 0.7)), url(${backgroundURL})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	opacity:'0.9',
	position: 'relative',
}

const LoginOne = props => {
	const theme = useSelector(state => state.theme.currentTheme)
	return (
		<div className={`h-100 ${theme === 'light' ? 'bg-white' : ''}`}>
			<Row justify="center" className="align-items-stretch h-100">
			<Col xs={0} sm={0} md={0} lg={12}>
					<div className="d-flex flex-column  h-100" style={backgroundStyle}>
					{/* <img className="h-100" src="/img/others/img-17.jpg" style={{opacity: "0.8", position: "relative"}} alt=""/> */}
						
						<Row justify="center" style={{position: "absolute"}}>
							<Col xs={0} sm={0} md={0} lg={20}>
							<div className="text-left mt-5">
								<img src="/img/others/LOGO.png" alt="logo"/>
						</div>
						<div style={{marginTop: "45%"}}>
						<h1 className="text-white">“</h1>
								<p className="text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
								<Row className="justify-content-between">
								<p className="text-white">Vincent Obi <CheckCircleOutlined className="bg-success" /></p>
								<p className="text-white"><img className="img-fluid h-100" src="/img/others/Vector 1.png" alt=""/></p>
								</Row>
						</div>
						
							</Col>
						</Row>
						{/* <div className="d-flex justify-content-end pb-4">
							<div>
								<a className="text-white" href="/#" onClick={e => e.preventDefault()}>Term & Conditions</a>
								<span className="mx-2 text-white"> | </span>
								<a className="text-white" href="/#" onClick={e => e.preventDefault()}>Privacy & Policy</a>
							</div>
						</div> */}
					</div>
				</Col>
				<Col xs={20} sm={20} md={24} lg={12}>
					<div className="container d-flex flex-column justify-content-center h-100">
						<Row justify="center">
						<Col xs={24} sm={24} md={20} lg={12} xl={8}>
							<p><a href="/#" onClick={e => e.preventDefault()}><LeftOutlined className="mr-1" />Back</a></p>
							</Col>
							<Col xs={24} sm={24} md={20} lg={12} xl={8}>
							<p>Don't have an account? <a href="/auth/register-1">Sign Up</a></p>
							</Col>
						</Row>
						<Row justify="center" className="mt-5 text-center">
							<Col xs={24} sm={24} md={20} lg={16} xl={8}>
								<h1>Log In to RFP Intels</h1>
								<p>Enter your email and password below</p>
								
								<div className="mt-4">
									<LoginForm {...props}/>
								</div>
							</Col>
						</Row>
					</div>
				</Col>
				
			</Row>
		</div>
		// <div className="h-100" style={backgroundStyle}>
		// 	<div className="container d-flex flex-column justify-content-center h-100">
		// 		<Row justify="center">
		// 			<Col xs={20} sm={20} md={20} lg={7}>
		// 				<Card>
		// 					<div className="my-4">
		// 						<div className="text-center">
		// 							<img className="img-fluid" src={`/img/${theme === 'light' ? 'logo.png': 'logo-white.png'}`} alt="" />
		// 							<p>Don't have an account yet? <a href="/auth/register-1">Sign Up</a></p>
		// 						</div>
		// 						<Row justify="center">
		// 							<Col xs={24} sm={24} md={20} lg={20}>
		// 								<LoginForm {...props} />
		// 							</Col>
		// 						</Row>
		// 					</div>
		// 				</Card>
		// 			</Col>
		// 		</Row>
		// 	</div>
		// </div>
	)
}

export default LoginOne
