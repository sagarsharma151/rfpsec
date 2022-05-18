import React from 'react';
import { connect } from "react-redux";
import { Button, Form, Input, Divider, Alert, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { signIn } from 'redux/actions/Auth';
import PropTypes from 'prop-types';
import {
	showLoading,
	showAuthMessage,
	hideAuthMessage,
	verifiedLogin,
} from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"

export const LoginForm = props => {
	let history = useHistory();

	const {
		otherSignIn,
		showForgetPassword,
		onForgetPasswordClick,
		showLoading,
		extra,
		loading,
		showMessage,
		message,
	} = props

	const initialCredential = {
		email: '',
		password: ''
	}

	const onLogin = values => {
		showLoading()
		const loginOtpRequest = {
			email: values.email,
			password: values.password,
		}
		localStorage.setItem("emailId",values.email)
		const allRequest = {
			request: loginOtpRequest,
			route: history,
		}
		props.signIn(allRequest);
	};


	const renderOtherSignIn = (
		<div>
			<Divider>
				<span className="text-muted font-size-base font-weight-normal">or connect with</span>
			</Divider>
			{/* <div className="d-flex justify-content-center">
				<Button 
					onClick={() => onGoogleLogin()} 
					className="mr-2" 
					disabled={loading} 
					icon={<CustomIcon svg={GoogleSVG}/>}
				>
					Google
				</Button>
				<Button 
					onClick={() => onFacebookLogin()} 
					icon={<CustomIcon svg={FacebookSVG}/>}
					disabled={loading} 
				>
					Facebook
				</Button>
			</div> */}
		</div>
	)

	return (
		<>
			<motion.div
				initial={{ opacity: 0, marginBottom: 0 }}
				animate={{
					opacity: showMessage ? 1 : 0,
					marginBottom: showMessage ? 20 : 0
				}}>
				<Alert type="error" showIcon message={message}></Alert>
			</motion.div>
			<Form
				layout="vertical"
				name="login-form"
				initialValues={initialCredential}
				onFinish={onLogin}
			>
				<Form.Item
					name="email"
					label="Email address"
					autoComplete="none"
					rules={[
						{
							required: true,
							message: 'Please input your email',
						},
						{
							type: 'email',
							message: 'Please enter a validate email!'
						}
					]}>
					<Input prefix={<MailOutlined className="text-primary" />} />
				</Form.Item>
				<Form.Item
					name="password"
					autoComplete="none"
					label={
						<div className="justify-content-between">
							<span>Password</span>
							<span className="ml-1" >
								<a href="/auth/forgot-password">(Forget Password?)</a>
							</span>
							{
								showForgetPassword &&
								<span
									onClick={() => onForgetPasswordClick}
									className="cursor-pointer font-size-sm font-weight-normal text-muted"
								>
									Forget Password?
								</span>
							}
						</div>
					}
					rules={[
						{
							required: true,
							message: 'Please input your password',
						}
					]}
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />} />
				</Form.Item>
				<Form.Item name="remember" valuePropName="checked" className="text-left">
					<Checkbox>Remember me</Checkbox>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block loading={loading}>
						Sign In
					</Button>
				</Form.Item>
				{
					otherSignIn ? renderOtherSignIn : null
				}
				{extra}
			</Form>
		</>
	)
}

LoginForm.propTypes = {
	otherSignIn: PropTypes.bool,
	showForgetPassword: PropTypes.bool,
	extra: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]),
};

LoginForm.defaultProps = {
	otherSignIn: true,
	showForgetPassword: false
};

const mapStateToProps = ({ auth }) => {
	const { loading, message, showMessage, token, redirect } = auth;
	return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	signIn,
	verifiedLogin,
	showAuthMessage,
	showLoading,
	hideAuthMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
