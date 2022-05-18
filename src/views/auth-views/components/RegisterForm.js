import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Alert, Checkbox } from "antd";
import { signUp, showAuthMessage, showLoading, hideAuthMessage } from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"

const rules = {
	email: [
		{
			required: true,
			message: 'Please input your email address'
		},
		{
			// eslint-disable-next-line
			pattern: new RegExp("/\S+@\S+\.\S+/"),
			type: 'email',
			message: 'Please enter a validate email!'
		}
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

export const RegisterForm = (props) => {
	console.log("register...",props)

	const { signUp, showLoading, loading, message, showMessage } = props
	const [form] = Form.useForm();
	const history = useHistory();


	const onSignUp = () => {
		form.validateFields().then(values => {
			showLoading()
			values.mobile_number = '1234567890';
			values.profileimage = '1234';
			values.ip_address = '';
			values.role = 'company';
			delete values.remember;
			const signUpRequest = {
				'first_name': values.first_name,
				'last_name': values.last_name,
				'company_name': values.company_name,
				'email': values.email,
				'password': values.password,
				'confirm_password': values.confirm_password,
				"mobile_number": 1234567890,
				"profileimage": 1234,
				"ip_address": "",
				"role": "company"
			}
			const allRequest = {
				request: signUpRequest,
				route: history,
			}
			signUp(allRequest)
			form.resetFields()
		}).catch(info => {
			console.log('Validate Failed:', info);
		});
	}

	useEffect(() => {
		// if (token !== null && allowRedirect) {
		// 	// history.push(redirect)
		// }
		// if (showMessage) {
		// 	setTimeout(() => {
		// 		hideAuthMessage();
		// 	}, 3000);
		// }
	});


	let [signUpForm, setSignUpForm] = useState({});

	const onHandleChange = (e) => {
		
		signUpForm[e.target.id] = e.target.value;
		setSignUpForm(signUpForm);
	}

	

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
			<Form form={form} layout="vertical" name="register-form" onFinish={onSignUp}>
				<Form.Item
					name="first_name"
					label="First Name"
					hasFeedback
					rules={[
						{ required: true, message: 'Please input your username!' },
						{ min: 5, message: 'Username must be minimum 5 characters.' },
					]}
					onChange={(e) => onHandleChange(e)}
					value={signUpForm.first_name}
				>
					<Input required />
				</Form.Item>
				<Form.Item
					name="last_name"
					label="Last Name"
					hasFeedback
					onChange={(e) => onHandleChange(e)}
					value={signUpForm.last_name}
				>
					<Input required />
				</Form.Item>
				<Form.Item
					name="company_name"
					label="Company Name"
					hasFeedback
					onChange={(e) => onHandleChange(e)}
					value={signUpForm.company_name}
				>
					<Input required />
				</Form.Item>
				{/* <Form.Item
					name="email"
					label="Email"
					// rules={rules.email}
					autoComplete="none"
					hasFeedback
					rules= {[
						{
							required: false,
							pattern: new RegExp("/^\s+|\s+$/gm"),
						},
					]}
					
				>
					<Input required />
				</Form.Item> */}
				<Form.Item
					name="email"
					label="Email"
					rules={rules.email}
					autoComplete="none"
					hasFeedback
					onChange={(e) => onHandleChange(e)}
					value={signUpForm.email}
				>
					<Input required />
				</Form.Item>
				<Form.Item
					name="password"
					label="Password"
					autoComplete="none"
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
				<Form.Item name="remember" valuePropName="checked" onChange={(e) => onHandleChange(e)}
					value={signUpForm.remember}>
					<Checkbox>I agree to <a href="/#" onClick={e => e.preventDefault()}>terms & conditions</a></Checkbox>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block loading={loading}>
						Register Account
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

const mapStateToProps = ({ auth }) => {
	const { loading, message, showMessage, token, redirect } = auth;
	return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	signUp,
	showAuthMessage,
	hideAuthMessage,
	showLoading
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
