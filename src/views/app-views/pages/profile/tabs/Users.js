import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux'
import { Button, Col, Row, Table, Modal, Input, Form } from 'antd';
import { PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
// import Swal from 'sweetalert2';
import { profileUserAdd, profileGetUsers, updateAddProfile, deleteUsers } from 'redux/actions/profile';
const { confirm } = Modal;


const Users = (props) => {
    
    // MODAL STATE
    const [isModalVisibleSecond, setIsModalVisibleSecond] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // GET API DATA IN ARRAY STATE
    const [userData, setUserData] = useState([])

    // GET API DATA IN OBJECT
    const [usermodal, setUsermodal] = useState({})

    // OTHER
    const [form] = Form.useForm();
    // const { confirm } = Modal;
    const dispatch = useDispatch()

    // EDIT-USER MODAL //

    const showModalSecond = (item) => {
        form.resetFields()
        console.log('item41', item)
        if(item){
            setUsermodal(item);
            setIsModalVisibleSecond(true);
        }
 
    };

    const handleCancelSecond = () => {
        setUsermodal({})
        form.resetFields()
        setIsModalVisibleSecond(false);
    };

    // ADD USER MODAL //

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // HANDLE CHANGE //

    const onHandleChange = (e) => {
        usermodal[e.target.id] = e.target.value;
        setUsermodal(usermodal);
        console.log('usermodal', usermodal);
    }


    // ADD USERS API //

    const handleOk = () => {
      
        form.validateFields().then(userData => {
            console.log(userData,'userdatadddddddddddddddd')
            const signUpRequest = {
                id:userData.id,
                first_name: userData.firstName,
                last_name: userData.lastName,
                Email: userData.emailaddress,
                title: userData.title,
                role : userData.role,
                office_number: userData.phonenumber,
                cell_number: userData.cell_number,
                license_type: userData.license_type,
                // id:usermodal.id,
                // first_name: usermodal.firstName,
                // last_name: usermodal.lastName,
                // title: usermodal.title,
                // office_number: usermodal.office_number,
                // Email:usermodal.emailaddress,
                // role: usermodal.role,
            }
            const allRequest = {
                request: signUpRequest,
            }
            props.profileUserAdd(allRequest)
            form.resetFields()
            setIsModalVisible(false);
        }).catch(info => {
            console.log('Validate Failed:', info);
        });
    };

    // GET USERS API //

    useEffect(() => {
        dispatch(profileGetUsers())
    }, []);

    const userProfileData = props.user;
console.log(userProfileData,'userProfileData')
    useEffect(() => {
        if (userProfileData !== '' && userProfileData !== undefined) {

            setUserData(userProfileData);
        }
    }, [userProfileData]);
console.log(userData,'userData')
    // UPDATE USERS API //
console.log(usermodal ,'usermodal 555')
    const handleOkSecond = () => {
        const updaterequest ={
            id:usermodal.id,
            first_name: usermodal.firstName,
            last_name: usermodal.lastName,
            title: usermodal.title,
            office_number: usermodal.office_number,
            Email:usermodal.emailaddress,
            role: usermodal.role,
        }
        const allRequest = {
            request: updaterequest,
        }
        props.updateAddProfile(allRequest)
    };

    const updateProfile = props.updateUser;
    useEffect(() => {
        if (updateProfile !== '' && updateProfile !== undefined && updateProfile !== null) {
            if (updateProfile.success) {
                handleCancelSecond()
                dispatch(profileGetUsers())
            }
        }
        // eslint-disable-next-line
    }, [updateProfile]);


    useEffect(() => {
        form.setFieldsValue(usermodal)
    }, [form, usermodal])

     // DELETE USERS API //

    function showConfirm(item) {
        confirm({
            title: 'Are you sure delete this items?',
            icon: <CloseCircleOutlined className='text-danger' />,
            onOk(){
                const idRequest = {
                    deleteid: item.id,
                }
                const allREquest = {
                    request: idRequest
                }
                props.deleteUsers(allREquest);
            },
            onCancel() {
            },
          });
       
    }

    const columns = [

        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
        {
            title: 'Email Address',
            dataIndex: 'emailaddress',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phonenumber',
        },
        {
            title: '',
            dataIndex: 'action',
        },
    ];
    const abc = (item) => {
        return (
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={24} lg={24} xl={24}>
                    <div className='text-center'>
                    <Button className="Edit-button mr-3" onClick={() => showModalSecond(item)}>Edit</Button>
                    <Button className="delete-button button_hover" onClick={()=>showConfirm(item)}>Delete</Button>
                    </div>
                </Col>
            </Row>
        )
    }
console.log(userData,'987userData')
    const data = userData.map((item, i) => {
        return {
            keys: item.id,
            name: item.firstName,
            role: item.role,
            emailaddress: item.email,
            phonenumber: item.officeNumber,
            action: abc(item),
        }


    });

    return (
        <>
            <React.Fragment>

                <Row>
                    <Col xs={21} sm={21} lg={21} xl={21}>

                    </Col>
                    <Col xs={24} sm={3} lg={3} xl={3}>
                        <Button type="primary" onClick={showModal}>
                            <PlusCircleOutlined />Add User
                        </Button>
                    </Col>
                </Row>
                <hr></hr>
                <div className="">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} lg={24} xl={24}>
                            <Table
                                columns={columns}
                                dataSource={data}
                            />
                        </Col>
                    </Row>
                    <Modal title="Add User" visible={isModalVisible}
                        onOk={handleOk} onCancel={handleCancel} width={950}
                        okText={'Add User'} cancelText={'Discard'}
                    >
                        <Form
                            form={form}
                            layout="vertical"

                        >
                            <Row gutter={[16, 16]}>
                                <Col xs={18} sm={18} lg={18} xl={18}>
                                    <Form.Item
                                        name="emailaddress"
                                        label="Email Address  :"
                                        className='form-align-set'
                                        rules={[{ required: true, message: 'Please input your Email Address!' },
                                        {type: 'email',
                                        message: 'Please enter a validate email!'}
                                    ]}
                                        onChange={(e) => onHandleChange(e)}
                                        value={usermodal.emailaddress}
                                    >
                                        <Input className='form-input-field' />
                                    </Form.Item>
                                    <Form.Item
                                        name="firstName"
                                        label="First Name   :"
                                        className='form-align-set'
                                        rules={[{ required: true, message: 'Please input your First Name!' }]}
                                        onChange={(e) => onHandleChange(e)}
                                        value={usermodal.firstName}
                                    >
                                        <Input className='form-input-field' />
                                    </Form.Item>
                                    <Form.Item
                                        name="lastName"
                                        label=" Last Name  :"
                                        className='form-align-set'
                                        rules={[{ required: true, message: 'Please input your Last Name !' }]}
                                        onChange={(e) => onHandleChange(e)}
                                        value={usermodal.lastName}

                                    >
                                        <Input className='form-input-field' />
                                    </Form.Item>
                                    <Form.Item
                                        className='form-align-set'
                                        name="title"
                                        label="Title  :"
                                        rules={[{ required: true, message: 'Please input your Title!' }]}
                                        onChange={(e) => onHandleChange(e)}
                                        value={usermodal.title}
                                    >
                                        <Input className='form-input-field' />
                                    </Form.Item>
                                    <Form.Item
                                        className='form-align-set'
                                        name="role"
                                        label="Role  :"
                                        rules={[{ required: true, message: 'Please input your Role!' }]}
                                        onChange={(e) => onHandleChange(e)}
                                        value={usermodal.role}
                                    >
                                        <Input className='form-input-field' />
                                    </Form.Item>
                                    <Form.Item
                                        className='form-align-set'
                                        name="office_number"
                                        label="Office Number  :"
                                        rules={[{
                                            min: 10, max: 10, message: 'Should be 10 Numbers'
                                        }]}
                                        onChange={(e) => onHandleChange(e)}
                                        value={usermodal.office_number}
                                    >
                                        <Input className='form-input-field' />
                                    </Form.Item>
                                    <Form.Item
                                        className='form-align-set'
                                        name="cell_number"
                                        label="Cell number	 :"
                                        rules={[{
                                            min: 10, max: 10, message: 'Should be 10 Numbers'
                                        }]}
                                        onChange={(e) => onHandleChange(e)}
                                        value={usermodal.cell_number}
                                    >
                                        <Input className='form-input-field' />
                                    </Form.Item>
                                    <Form.Item
                                        className='form-align-set'
                                        name="license_type"
                                        label=" License Type   :"
                                        rules={[{ required: true, message: 'Please input your License Type!' }]}
                                        onChange={(e) => onHandleChange(e)}
                                        value={usermodal.license_type}
                                    >
                                        <Input className='form-input-field' />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Modal>
                    <Modal title="Edit User" visible={isModalVisibleSecond}
                        onOk={handleOkSecond} onCancel={handleCancelSecond} width={950}
                        okText={'Save Changes'} cancelText={'Discard'}
                    >
                        {usermodal &&
                            <Form
                                form={form}
                                layout="vertical"
                                initialValues={usermodal}
                            >
                                {console.log(usermodal,'usermodal.email')}
                                <Row gutter={[16, 16]}>
                                    <Col xs={18} sm={18} lg={18} xl={18}>
                                        <Form.Item
                                            name="email"
                                            label="Email Address  :"
                                            className='form-align-set'
                                            onChange={(e) => onHandleChange(e)}
                                            value={usermodal.email}
                                        >
                                            <Input disabled className='form-input-field text-dark' />
                                        </Form.Item>
                                        <Form.Item
                                            name="firstName"
                                            label="First Name   :"
                                            className='form-align-set'
                                            onChange={(e) => onHandleChange(e)}
                                            value={usermodal.firstName}
                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                        <Form.Item
                                            name="lastName"
                                            label=" Last Name  :"
                                            className='form-align-set'
                                            onChange={(e) => onHandleChange(e)}
                                            value={usermodal.lastName}

                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                        <Form.Item
                                            className='form-align-set'
                                            name="title"
                                            label="Title  :"
                                            onChange={(e) => onHandleChange(e)}
                                            value={usermodal.title}
                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                        <Form.Item
                                            className='form-align-set'
                                            name="role"
                                            label="Role  :"
                                            onChange={(e) => onHandleChange(e)}
                                            value={usermodal.role}
                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                        <Form.Item
                                            className='form-align-set'
                                            name="office_number"
                                            label="Office Number  :"
                                            rules={[{
                                                min: 10, max: 10, message: 'Should be 10 Numbers'
                                            }]}
                                            onChange={(e) => onHandleChange(e)}
                                            value={usermodal.office_number}
                                        >
                                            <Input className='form-input-field' />
                                        </Form.Item>
                                        <Form.Item
                                            className='form-align-set'
                                            name="cell_number"
                                            label="Cell number	 :"
                                            rules={[{
                                                min: 10, max: 10, message: 'Should be 10 Numbers'
                                            }]}
                                            onChange={(e) => onHandleChange(e)}
                                            value={usermodal.cell_number}
                                        >
                                            <Input disabled className='form-input-field text-dark' />
                                        </Form.Item>
                                        <Form.Item
                                            className='form-align-set'
                                            name="license_type"
                                            label=" License Type   :"
                                            onChange={(e) => onHandleChange(e)}
                                            value={usermodal.license_type}
                                        >
                                            <Input disabled className='form-input-field text-dark' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        }
                    </Modal>
                </div>

            </React.Fragment>

        </>
    )
};

const mapStateToProps = ({ profile }) => {
    const { loading, token, user, error, updateUser, id } = profile;
    return { loading, token, user, error, updateUser, id }
}

const mapDispatchToProps = {
    profileUserAdd,
    profileGetUsers,
    updateAddProfile,
    deleteUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)