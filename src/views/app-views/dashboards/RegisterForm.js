import React, { useState, useEffect,useContext } from 'react'
import { connect,useSelector,useDispatch } from 'react-redux'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Input, Alert, Checkbox } from "antd";
import { signUp, showAuthMessage, showLoading, hideAuthMessage } from 'redux/actions/Auth';
import { SignUpData} from 'redux/actions/profile';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"
var CryptoJS = require("crypto-js");
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
	],
	plan: [
		{
			required: true,
			message: 'Please input your plan'
		},
	
	],
}

export const RegisterForm = (props) => {
	const data = useSelector(state=>state.profile.user.payload)
	const userState = useSelector(state=>state.Userstate.user.payload)
	const dispatch = useDispatch();
	console.log("register..detailsdetailsdetailsuserStateuserStateuserStateuserState.",props)
const [datasubmit,setDatasubmit] = useState({});
const [alldata,setAlldata]=useState(false)
	const { showLoading, loading, message, showMessage } = props
	const [form] = Form.useForm();
	const history = useHistory();
	const initialCredential = {
		email: '',
		mobile_number:'',
		profileimage:'',
		ip_address:'',
		role:'',
		planName:data,
		password: '',
		maximumUserAllowed:userState,
		licenceType:''
	}

	const onSignUp = (e) => {
		// e.preventDefault();
		form.validateFields().then(values => {
			console.log(values,'values5555555')
			showLoading()
			values.mobile_number = '1234567890';
			values.profileimage = '1234';
			values.ip_address = '';
			values.role = 'companys';
			delete values.remember;
			const signUpRequest = {
				'firstName': values.first_name,
				'lastName': values.last_name,
				'componyName': values.company_name,
				'email': values.email,
				'password':values.password,
				// 'confirm_password': values.confirm_password,
				// "mobile_number": 1234567890,
				// "profileimage": 1234,
				// "ip_address": "",
				"roleName": "USER",
				"userName":"vikalp",
				"title":"The hero",
				"officeNumber":"999612746813",
				"cellNumber":"82y3948623956",
				"planName":data,
				"maximumUserAllowed":userState,
				'licenceType':'545454545',
				"billingCycle":"Monthly"
			}
			console.log('Encrypt Data -',signUpRequest.password)
			// CryptoJS.AES.encrypt(JSON.stringify(values.password), 'my-secret-key@123').toString(),
			// const bytes = CryptoJS.AES.decrypt(signUpRequest.password, 'my-secret-key@123');
			// const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
		  
			//log decrypted Data
			// console.log('decrypted Data -')
			// console.log(decryptedData);
			const allRequest = {
				request: signUpRequest,
				route: history,
			}
			setDatasubmit(signUpRequest)
			localStorage.setItem('SignUpData', JSON.stringify(signUpRequest));
			SignUpData(allRequest)
			if(allRequest){
				dispatch(signUp(allRequest))
			}
			// form.resetFields()
		}).catch(info => {
			console.log('Validate Failed:', info);
		});
	}




	let [signUpForm, setSignUpForm] = useState({});

	const onHandleChange = (e) => {
		
		signUpForm[e.target.id] = e.target.value;
		setSignUpForm(signUpForm);
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	  };
	  console.log(datasubmit,'signUpFormsignUpFormsignUpFormsignUpFormsignUpForm')
	  console.log(initialCredential,'initialCredentialinitialCredentialinitialCredential')
	  useEffect(()=>{
		  if(datasubmit.cellNumber && datasubmit.firstName && datasubmit.componyName && datasubmit.email && datasubmit.lastName){
			setAlldata(true)
		  }
	  },[datasubmit])
	  console.log(alldata,'alssssssssssssssss')
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
			<Form form={form} initialValues={initialCredential} layout="vertical" name="register-form" onFinishFailed={onFinishFailed} onFinish={onSignUp}>
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
		<div className='row d-flex'>
			<div className='col-md-9'>		<Form.Item
					name="planName"
					label="Selected Plan"
					autoComplete="none"
					
					hasFeedback
					value={data}
				>
					<Input required disabled style={{color:'black'}}/>
				</Form.Item></div>
				<div className='col-md-3'>		<Form.Item
					name="maximumUserAllowed"
					label="users"
					hasFeedback
					value={userState}
				>
					<Input required disabled style={{color:'black'}}/>
				</Form.Item></div>
				<div><p onClick={props.prev} style={{color:'#1565D8',cursor:'pointer'}}>Change Plan</p></div>
		</div>
				<Form.Item name="remember" valuePropName="checked" onChange={(e) => onHandleChange(e)}
					value={signUpForm.remember}>
					<Checkbox>I agree to <a href="/#" onClick={e => e.preventDefault()}>terms & conditions</a></Checkbox>
				</Form.Item>
				<Form.Item>
				{/* onClick={alldata ? props.next:''} */}
					<Button type="primary" htmlType="submit" block  onClick={alldata ? props.next():null}>
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
	showAuthMessage,
	hideAuthMessage,
	showLoading
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
