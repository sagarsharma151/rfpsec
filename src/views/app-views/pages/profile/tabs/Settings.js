import { Button, Col, Row, Form, Input, Card, Checkbox, Dropdown } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { getUserProfile, updateProfile, showLoading } from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";
import { changeProfilePassword } from 'redux/actions/profile';

const SettingProfile = (props) => {

    const { showLoading, loading } = props;
    const history = useHistory();
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const [user, setUser] = useState();
    const [visible, setVisble] = useState(false)

    // GET API //

    useEffect(() => {
        dispatch(getUserProfile())
    }, [dispatch]);

    const userData = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (userData !== '' && userData !== undefined && userData !== null) {
            setUser(userData);
        }
    }, [userData]);

    // UPDATE PROFILE API  //

    const onSend = values => {
        showLoading();
        const allRequest = {
            request: user,
            route: history
        }
        props.updateProfile(allRequest);
    };

    const [passwordchange, setPasswordchange] = useState({})
    const onChangePassword = (e) => {
        passwordchange[e.target.id] = e.target.value;
        setPasswordchange(passwordchange);
    }

    // CHANGE PASSWORD API  //

    const onSendPassword = values => {
        showLoading()
        const passwordRequest = {
            oldPassword: values.oldPassword,
            newPassword: values.newPassword,
            confirmPassword: values.confirmPassword
        }

        const allRequest = {
            request: passwordRequest,
        }
        props.changeProfilePassword(allRequest)
        form.resetFields()
    };

    const handleMenuClick = values => {
        if (values.value === '4') {
            setVisble(false);
        }
    };

    const handleVisibleChange = flag => {
        setVisble(flag);
    };

    // UPDATE HANDLECHANGE  //

    const onHandleChange = (e) => {

        user[e.target.id] = e.target.value;
        setUser(user);
    }

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        form.setFieldsValue(user)
    }, [form, user])

    const rules = {
        oldPassword: [
            {
                required: true,
                message: 'Please input your password'
            }
        ],
        newPassword: [
            {
                required: true,
                message: 'Please input your password'
            },
            {
                min: 8, message: 'minimum 8 characters with a numerical digit. '
            }
        ],
        confirmPassword: [
            {
                required: true,
                message: 'Please confirm your password!'
            },
            ({ getFieldValue }) => ({
                validator(rule, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject('Passwords do not match!');
                },
            })
        ]
    }


    return (
        <>
            <React.Fragment>
                <Card>
                    <Row gutter={[16, 16]} className='mb-4'>
                        <Col xs={24} sm={20} lg={20} xl={20}>
                            <h3>Role: Administrator</h3>
                        </Col>
                        <Col xs={24} sm={4} lg={4} xl={4}>
                            <div>
                                <Dropdown
                                    overlay={(
                                        <Form form={form} layout="vertical" onFinish={onSendPassword}>
                                            <Form.Item
                                                name="oldPassword"
                                                label="Enter existing password"
                                                rules={rules.oldPassword}
                                                onChange={(e) => onChangePassword(e)}
                                                value={passwordchange.oldPassword}
                                            >
                                                <Input.Password key={1} />
                                            </Form.Item>
                                            <Form.Item
                                                name="newPassword"
                                                label="Enter New Password"
                                                rules={rules.newPassword}
                                                onChange={(e) => onChangePassword(e)}
                                                value={passwordchange.newPassword}
                                            >
                                                <Input.Password key={2} />
                                            </Form.Item>
                                            <Form.Item
                                                name="confirmPassword"
                                                label="Re-Enter New Password"
                                                rules={rules.confirmPassword}
                                                onChange={(e) => onChangePassword(e)}
                                                value={passwordchange.confirmPassword}
                                            >
                                                <Input.Password key={3} />
                                            </Form.Item>
                                            <Form.Item>
                                                <Button key={4}>Discard Changes</Button>
                                                <Button onClick={handleMenuClick} value={4} htmlType="submit" type='primary'>Save Changes</Button>
                                            </Form.Item>
                                        </Form>
                                    )}
                                    onVisibleChange={handleVisibleChange}
                                    visible={visible}
                                    trigger={['click']}>
                                    <Button type='primary' visible={visible} className='mobile-view'>
                                        <a className="ant-dropdown-link" href='/#' loading={loading}
                                            onClick={e => e.preventDefault()}>
                                            Change Password
                                        </a>
                                    </Button>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} lg={12} xl={12}>
                            <h3>Personal Informations</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            {user &&

                                <Form
                                    form={form}
                                    layout="vertical"
                                    initialValues={user}
                                    onFinishFailed={onFinishFailed}
                                >
                                    <Row gutter={[16, 16]}>
                                        <Col xs={24} sm={12} lg={12} xl={12}>
                                            <Form.Item
                                                name="first_name"
                                                label="First Name"
                                                onChange={(e) => onHandleChange(e)}
                                                value={user.first_name}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12} lg={12} xl={12}>
                                            <Form.Item
                                                name="last_name"
                                                label="Last Name"
                                                onChange={(e) => onHandleChange(e)}
                                                value={user.last_name}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Form.Item
                                        name="email"
                                        label="Email Address"
                                        onChange={(e) => onHandleChange(e)}
                                        value={user.email}

                                    >
                                        <Input disabled className='text-dark' />
                                    </Form.Item>

                                </Form>
                            }
                        </Col>
                    </Row>

                    <hr></hr>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} lg={12} xl={12}>
                            <h3>Notifications</h3>
                            <p>Choose type of notifications you want to receive</p>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} lg={12} xl={12}>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} sm={8} lg={8} xl={8}><Form.Item className="text-left">
                                    <Checkbox onChange={onChange}>Opportunity Alerts</Checkbox>
                                </Form.Item></Col>
                                <Col xs={24} sm={16} lg={16} xl={16}>
                                    <p className='mt-2'>Assignment Alerts</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Button type='primary' className='setting-right-btn' htmlType="submit" onClick={onSend}>Save Changes</Button>
                            <Button className='setting-right-btn'>Discard Changes</Button>
                        </Col>
                    </Row>

                </Card>
            </React.Fragment>
        </>
    )
};

const mapStateToProps = ({ auth }) => {
    const { loading, error, user, token } = auth;
    return { loading, error, user, token }
}

const mapDispatchToProps = {
    updateProfile,
    showLoading,
    changeProfilePassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingProfile)
