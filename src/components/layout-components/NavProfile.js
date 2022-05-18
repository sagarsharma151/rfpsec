import React  from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { connect } from 'react-redux'
import { 
  EditOutlined, 
  SettingOutlined, 
  ShopOutlined, 
  QuestionCircleOutlined, 
  LogoutOutlined, DownOutlined
} from '@ant-design/icons';
import Icon from 'components/util-components/Icon';
import { signOut } from 'redux/actions/Auth';
import './NavProfile.css';

const menuItem = [
	{
		title: "Profile",
		icon: EditOutlined ,
		path: "/app/pages/profile/UserProfile"
    },
    {
		title: "Users",
		icon: ShopOutlined ,
		path: "/app/pages/profile/UserProfile"
	},
    {
		title: "Subscription",
		icon: QuestionCircleOutlined,
		path: "/app/pages/profile/UserProfile"
	},
  {
		title: "Account Setting",
		icon: SettingOutlined,
		path: "/"
    },
]

export const NavProfile = ({signOut}) => {
    
  // console.log("signOut",signOut);
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getProfile())
  // }, [dispatch])

  const profileImg = "/img/avatars/thumb-1.jpg";
  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile-header">
        <div className="d-flex">
          <Avatar size={45} src={profileImg} />
          <div>
            <h4 className="mb-0">Charlie Howard</h4>
            <span className="text-muted">Frontend Developer</span>
          </div>
        </div>
      </div>
      <div className="nav-profile-body">
        <Menu>
          {menuItem.map((el, i) => {
            return (
              <Menu.Item key={i}>
                <a href={el.path}>
                  <Icon className="mr-3" type={el.icon} />
                  <span className="font-weight-normal">{el.title}</span>
                </a>
              </Menu.Item>
            );
          })}
          <Menu.Item key={menuItem.length + 1} onClick={e => signOut()}>
            <span>
              <LogoutOutlined className="mr-3"/>
              <span className="font-weight-normal">Logout</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <div style={{
      paddingTop: 20
    }}>
    <Dropdown overlay={profileMenu} trigger={["click"]}>
      <div className="d-flex align-item-center" mode="horizontal">
        <div className="text-center mr-3">
        <Avatar src={profileImg} />
          <h6 className="m-0">Engineer Master</h6>
          <DownOutlined className="profile-arrow" />
          
        </div>
      </div>
    </Dropdown>
    </div>
  );
}

export default connect(null, {signOut})(NavProfile)
