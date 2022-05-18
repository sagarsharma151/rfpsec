import React from 'react';
import { Button, Form, Input,Row, Col, } from "antd";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { sendLink} from 'redux/actions/Auth';
// import { MailOutlined, LockOutlined } from '@ant-design/icons';
const Data = (props)=>{
console.log(props,'props')
//    const {SendLink} = props;
  
    let history = useHistory();
    const initialCredential = {
		email: '',
		
	}

    const onSendLink = values => {
        console.log( props.token,' props.sendLink')
		const loginOtpRequest = {
			email: values.email,
		}
		const allRequest = {
			request: loginOtpRequest,
			route: history,
			token:props.token
		}
		
        props.sendLink(allRequest);
       
	};

  
    return(
        <>
        
       		<Form
				layout="vertical"
				name="login-form"
				initialValues={initialCredential}
				onFinish={onSendLink}
			>
			<Row gutter={16}><Col xs={24} sm={24} md={24} lg={6}><Form.Item
					name="email"
					label="email"
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
					<Input  />
				</Form.Item></Col>
                <Col xs={24} sm={24} md={24} lg={4}><Form.Item>
					<Button type="primary" htmlType="submit" block style={{marginTop:'29px'}}>
						Submit
					</Button>
				</Form.Item>
                </Col>
                </Row>	
				
				
				
			
			</Form>
        </>
    )
}
const mapStateToProps = ({ auth }) => {
	const { loading, message, showMessage, token, redirect } = auth;
	return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
    sendLink
}

export default connect(mapStateToProps, mapDispatchToProps)(Data);
