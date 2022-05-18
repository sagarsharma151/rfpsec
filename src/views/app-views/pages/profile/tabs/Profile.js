import React, { useEffect, useState } from 'react';
import { Row, Col, Modal, Card, Button, Select, Input, Form, notification } from 'antd';
import { useDispatch, useSelector, connect } from 'react-redux';
import { getUserProfile, updateProfile } from 'redux/actions/Auth';
// import { UploadOutlined } from '@ant-design/icons';
// import { values } from 'lodash';
import { uploadImage } from 'redux/actions/profile';
import { post } from 'axios'
import { BaseUrl } from 'services/BaseurlConst';


const Profile = (props) => {

    const [form] = Form.useForm();

    const { Option } = Select;

    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    // const [image, setImage] = useState('');


    useEffect(() => {
        dispatch(getUserProfile())
    }, [dispatch]);

    const userData = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (userData !== '' && userData !== undefined && userData !== null) {

            setUser(userData);
        }
    }, [userData]);

    const onHandleChange = (e) => {
        user[e.target.id] = e.target.value;
        setUser(user);
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOkk = (values) => {
        setIsModalVisible(false);
        const allRequest = {
            request: user,
        }
        props.updateProfile(allRequest);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const [token, setToken] = useState('')

    useEffect(() => {
        if (props && props.token) {
            const quesyToken = props.token
            setToken(quesyToken)
        }
        // eslint-disable-next-line
    }, [])


    const onChange = (e) => {
        let files = e.target.files[0];
        console.log('e.target.value', files);

        let reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onload = (e) => {
            console.log('e', e);
            const url = BaseUrl + `/user/profile`;
            const formData = new FormData();
            formData.append('profile', files);
            const config = {
                headers: {
                    authorization: `${token}`,
                    mimeType: 'multipart/form-data'
                },
            }

            return post(url, formData, config)
                .then(response => {
                    console.log('response', response);
                    if (response.data.success === true) {
                        notification['success']({
                            message: 'profile pic added',
                        });
                    } else {
                        notification['error']({
                            message: 'Uploaded Failed',
                        });
                    }

                })
        }
    }


    return (
        <React.Fragment>
            <Card>
                <Row>
                    <Col xs={24} sm={22} lg={22} xl={22}>
                        <h2>The Walt Disney Company</h2>
                    </Col>
                    <Col xs={24} sm={2} lg={2} xl={2}>
                        <Button type="primary" onClick={showModal}>
                            Edit
                        </Button>
                    </Col>
                </Row>
                <hr></hr>
                <div className="">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} lg={24} xl={24}>
                            <div className='table-responsives'>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Address</th>
                                            <td className='pt-2 pb-2 pl-5 pr-5'>:</td>
                                            <td className='table-td-background pl-3'>{user.address}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">DUNS</th>
                                            <td className='pt-2 pb-2 pl-5 pr-5'>:</td>
                                            <td className='table-td-background pl-3'>{user.duns_number}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">CAGE</th>
                                            <td className='pt-2 pb-2 pl-5 pr-5'>:</td>
                                            <td className='table-td-background pl-3'>{user.cage}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">POCEmail</th>
                                            <td className='pt-2 pb-2 pl-5 pr-5'>:</td>
                                            <td className='table-td-background'>
                                                <Select
                                                    className='select-drop option-drop mobile-width'
                                                    showSearch
                                                    defaultValue='XYZ@company.com'
                                                    optionFilterProp="children"
                                                    onChange={onChange}
                                                    onSearch={onSearch}
                                                    filterOption={(input, option) =>
                                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    <Option value="XYZ@company.com" className='mobile-width option-drop'>{user.email}</Option>
                                                </Select>
                                            </td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Set-Aside</th>
                                            <td className='pt-2 pb-2 pl-5 pr-5'>:</td>
                                            <td className='table-td-background'>
                                                <Select
                                                    className='select-drop mobile-width'
                                                    showSearch
                                                    defaultValue=''
                                                    optionFilterProp="children"
                                                    onChange={onChange}
                                                    onSearch={onSearch}
                                                    filterOption={(input, option) =>
                                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    <Option value="1">{user.set_aside}</Option>
                                                </Select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Corporate Certifications</th>
                                            <td className='pt-2 pb-2 pl-5 pr-5'>:</td>
                                            <td className='table-td-background pl-3'>{user.corporate_certifications}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">NAICS Codes</th>
                                            <td className='pt-2 pb-2 pl-5 pr-5'>:</td>
                                            <td className='table-td-background'>
                                                <Select
                                                    className='select-drop mobile-width'
                                                    showSearch
                                                    defaultValue='541512, 541511, 541611, 541300'
                                                    optionFilterProp="children"
                                                    onChange={onChange}
                                                    onSearch={onSearch}
                                                    filterOption={(input, option) =>
                                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    <Option value="541512, 541511, 541611, 541300">{user.naics_code}</Option>
                                                </Select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Keywords</th>
                                            <td className='pt-2 pb-2 pl-5 pr-5'>:</td>
                                            <td className='table-td-background pl-3'>{user.keywords}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Capability Briefing</th>
                                            <td className='pt-2 pb-2 pl-5 pr-5'>:</td>
                                            <td className='table-td-background pl-3'>{user.capability_briefing}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Website</th>
                                            <td className='pt-2 pb-2 pl-5 pr-5'>:</td>
                                            <td className='table-td-background pl-3 mobile-width'>{user.website}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Profile Image</th>
                                            <td className='pt-2 pb-2 pl-5 pr-5'>:</td>
                                            <td className='table-td-background pl-3 mobile-width'></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Modal title="The Walt Disney Company" visible={isModalVisible}
                        onOk={handleOkk} onCancel={handleCancel}

                        width={950} okText={'Save Changes'} cancelText={'Discard Changes'}
                    >

                        {user &&
                            <Form
                                form={form}
                                layout="vertical"
                                initialValues={user}

                            >
                                <Row gutter={[16, 16]}>
                                    <Col xs={18} sm={18} lg={18} xl={18}>
                                        <Form.Item
                                            name="address"
                                            label="Address   :"
                                            onChange={(e) => onHandleChange(e)}
                                            value={user.address}
                                            className='form-align-set'
                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                        <Form.Item
                                            name="duns_number"
                                            label="DUNS   :"
                                            onChange={(e) => onHandleChange(e)}
                                            value={user.duns_number}
                                            className='form-align-set'
                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                        <Form.Item
                                            name="cage"
                                            label="CAGE  :"
                                            onChange={(e) => onHandleChange(e)}
                                            value={user.cage}
                                            className='form-align-set'

                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                        <Form.Item
                                            className='form-align-set'
                                            name="email"
                                            label="POCEmail  :"
                                            onChange={(e) => onHandleChange(e)}
                                            value={user.email}

                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                        <Form.Item
                                            className='form-align-set'
                                            name="set_aside"
                                            label="Set-Aside  :"
                                            onChange={(e) => onHandleChange(e)}
                                            value={user.set_aside}

                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                        <Form.Item
                                            className='form-align-set'
                                            name="corporate_certifications"
                                            label="Corporate Certifications	 :"
                                            onChange={(e) => onHandleChange(e)}
                                            value={user.corporate_certifications}

                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                        <Form.Item
                                            className='form-align-set'
                                            name="naics_code"
                                            label="NAICS Codes   :"
                                            onChange={(e) => onHandleChange(e)}
                                            value={user.naics_code}

                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                        <Form.Item
                                            className='form-align-set'
                                            name="keywords"
                                            label="Keywords   :"
                                            onChange={(e) => onHandleChange(e)}
                                            value={user.keywords}

                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                        <Form.Item
                                            className='form-align-set'
                                            name="capability_briefing"
                                            label="Capability Briefing   :"
                                            onChange={(e) => onHandleChange(e)}
                                            value={user.capability_briefing}

                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                        <Form.Item
                                            className='form-align-set'
                                            name="website"
                                            label="Website   :"
                                            onChange={(e) => onHandleChange(e)}
                                            value={user.website}

                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        }
                        <div>
                            <input type="file" name="profile" accept=".png, .jpg" onChange={(e) => onChange(e)} />
                        </div>
                    </Modal>
                </div>
            </Card>
        </React.Fragment>
    )
};


const mapStateToProps = ({ auth }) => {
    const { loading, error, user, token, imageUrl } = auth;
    return { loading, error, user, token, imageUrl }
}

const mapDispatchToProps = {
    getUserProfile,
    updateProfile,
    uploadImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
