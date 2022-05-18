import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { Row, Col, Form, Input, Button, Alert } from "antd";
import { CheckCircleOutlined, LeftOutlined } from '@ant-design/icons';
import { showAuthMessage, showLoading, hideAuthMessage, forgetPassword } from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"

const rules = {
	otp: [
		{
			required: true,
			message: 'Please input your otp'
		},
	],
	password: [
		{
			required: true,
			message: 'Please input your password'
		},
		{
			min: 8, message: 'minimum 8 characters with a numerical digit. '
		}
	],
	confirm_password: [
		{
			required: true,
			message: 'Please confirm your password!'
		},
		({ getFieldValue }) => ({
			validator(rule, value) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject('Passwords do not match!');
			},
		})
	]
}

const backgroundURL = '/img/others/Frame.png'
const backgroundStyle = {
	backgroundImage: `linear-gradient(to bottom, rgba(55, 81, 255, 0.7), rgba(55, 81, 255, 0.7)), url(${backgroundURL})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	opacity: '0.9',
	position: 'relative',
}


const ChangePasswords = (props) => {

	console.log("props....", props)

	const history = useHistory();

	const theme = useSelector(state => state.theme.currentTheme)
	const [form] = Form.useForm();
	const {showLoading,loading,message, showMessage} = props;

	const[token, setToken] = useState('')

	const onSend = values => {
		console.log("values...", values)
        showLoading()
		const forgetpasswordrequest = {
			token: token,
			otp: values.otp,
			newPassword: values.password,
			confirmPassword: values.confirm_password
			
		}
		const allRequest = {
			request: forgetpasswordrequest,
			route: history,
		}
		props.forgetPassword(allRequest)
	};

	let [signUpForm, setSignUpForm] = useState({});

	const onHandleChange = (e) => {
		signUpForm[e.target.id] = e.target.value;
		setSignUpForm(signUpForm);
	}

	useEffect(()=>{
		if(props&&props.location&&props.location.pathname){
			const quesyToken = props.location.pathname.split('/')
			setToken(quesyToken[3])
		}
		 // eslint-disable-next-line
	},[])

	return (
		<>
			<React.Fragment>
				<motion.div
					initial={{ opacity: 0, marginBottom: 0 }}
					animate={{
						opacity: showMessage ? 1 : 0,
						marginBottom: showMessage ? 20 : 0
					}}>
					<Alert type="error" showIcon message={message}></Alert>
				</motion.div>
				<div className={`h-100 ${theme === 'light' ? 'bg-white' : ''}`}>
					<Row justify="center" className="align-items-stretch h-100">
						<Col xs={0} sm={0} md={0} lg={12}>
							<div className="d-flex flex-column  h-100" style={backgroundStyle}>
								<Row justify="center" style={{ position: "absolute" }}>
									<Col xs={0} sm={0} md={0} lg={20}>
										<div style={{ marginTop: "50%" }}>
											<h1 className="text-white">“</h1>
											<p className="text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
											<Row className="justify-content-between">
												<p className="text-white">Vincent Obi <CheckCircleOutlined className="bg-success" /></p>
												<p className="text-white"><img className="img-fluid h-100" src="/img/others/Vector 1.png" alt="" /></p>
											</Row>
										</div>

									</Col>
								</Row>
							</div>
						</Col>
						<Col xs={20} sm={20} md={24} lg={12}>
							<div className="container d-flex flex-column  h-100">
								<Row className="mt-2">
									<Col xs={24} sm={24} md={20} lg={12} xl={8}>
										<p><a href="/auth/login-1"><LeftOutlined className="mr-1" />Back</a></p>
									</Col>

								</Row>
								<Row justify="center" className="mt-5 text-center">
									<Col xs={24} sm={24} md={20} lg={16} xl={8}>


										<div className="text-center">
											<h3 className="mt-3 font-weight-bold">Enter verification code</h3>
											<p className="mb-4">We have just sent a verification code to</p>
											<h5 className="text-center">{props.location ? props.location.state : ''}</h5>
										</div>
										<Row justify="left">
											<Col xs={24} sm={24} md={20} lg={20}>
												<Form form={form} layout="vertical" name="register-form" onFinish={onSend}>
												<Form.Item
														name="otp"
														label="OTP Varification"
														rules={rules.otp}
														hasFeedback
														onChange={(e) => onHandleChange(e)}
														value={signUpForm.password}
													>
														<Input.Password required />
													</Form.Item>
													<Form.Item
														name="password"
														label="Password"
														rules={rules.password}
														hasFeedback
														onChange={(e) => onHandleChange(e)}
														value={signUpForm.password}
													>
														<Input.Password required />
													</Form.Item>
													<Form.Item
														name="confirm_password"
														label="Re-enter password*"
														rules={rules.confirm_password}
														hasFeedback
													>
														<Input.Password required />
													</Form.Item>
													<Form.Item>
														<Button type="primary" htmlType="submit" block loading={loading}>
															Continue
														</Button>
													</Form.Item>
												</Form>
											</Col>
										</Row>

									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</div>
			</React.Fragment>
		</>
	)
}

const mapStateToProps = ({ auth }) => {
	const { loading, message, showMessage, token, redirect } = auth;
	return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	forgetPassword,
	showAuthMessage,
	hideAuthMessage,
	showLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswords)
