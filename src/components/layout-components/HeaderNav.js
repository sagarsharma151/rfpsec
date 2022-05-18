import React from "react";
import { connect } from "react-redux";
import { Layout, Row, Col, Tooltip, Menu, Dropdown } from "antd";
import { MenuUnfoldOutlined } from '@ant-design/icons';
import Logo from './Logo';
import { NavLink } from 'react-router-dom'
import NavProfile from './NavProfile';
import { toggleCollapsedNav, onMobileNavToggle } from 'redux/actions/Theme';
import './NavProfile.css';



const { Header } = Layout;

export const HeaderNav = props => {

  const onClick = (e) => {
    console.log(e)
  };

  const menu = (
    <>
    <Menu onClick={onClick} className="menues">
      <Menu.Item key="1">
        <NavLink className='header-active-button-toggle' activeStyle={{ backgroundColor: '#3e79f7', color: '#fff' }} to="/app/dashboards">Dashboard</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink className="header-active-button-toggle resource" activeStyle={{ backgroundColor: '#3e79f7', color: '#fff' }} to="/app/liveopportunities">Live Opportunities</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink className="header-active-button-toggle" activeStyle={{ backgroundColor: '#3e79f7', color: '#fff' }} to="/app/recommendedOpportunities">Opportunities</NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        <NavLink className="header-active-button-toggle" activeStyle={{ backgroundColor: '#3e79f7', color: '#fff' }} to="/app/pipeline">Pipeline</NavLink>
      </Menu.Item>
      <Menu.Item key="5">
        <NavLink className="header-active-button-toggle resource" activeStyle={{ backgroundColor: '#3e79f7', color: '#fff' }} to="/app/teamingPartners">Teaming Partners</NavLink>
      </Menu.Item>
      <Menu.Item key="6">
        <NavLink className="header-active-button-toggle resource" activeStyle={{ backgroundColor: '#3e79f7', color: '#fff' }} to="/app/incumbentSearch">Incumbent Search</NavLink>
      </Menu.Item>
      <Menu.Item key="7">
        <NavLink className="header-active-button-toggle resource" activeStyle={{ backgroundColor: '#3e79f7', color: '#fff' }} to="/app/spendAnalytics">Spend & Analytics</NavLink>
      </Menu.Item>
      <Menu.Item key="8">
        <NavLink className="header-active-button-toggle" activeStyle={{ backgroundColor: '#3751FF', color: '#fff' }} to="/app/documents">Documents</NavLink>      </Menu.Item>
      <Menu.Item key="9">
        <NavLink className="header-active-button-toggle" activeStyle={{ backgroundColor: '#3751FF', color: '#fff' }} to="/app/notifications">Notifications</NavLink>
      </Menu.Item>
      <Menu.Item key="10">
        <NavLink className="header-active-button-toggle" activeStyle={{ backgroundColor: '#3751FF', color: '#fff' }} to="/app/library">FAR Library</NavLink>
      </Menu.Item>
      <Menu.Item key="11">
        <NavLink className="header-active-button-toggle resource" activeStyle={{ backgroundColor: '#3751FF', color: '#fff' }} to="/app/resourcesEvents">Resources & Events</NavLink>
      </Menu.Item>
      <Menu.Item key="12">
        <NavLink className="header-active-button-toggle resource" activeStyle={{ backgroundColor: '#3751FF', color: '#fff' }} to="/app/priceIntelligence">Price Intelligence</NavLink>
      </Menu.Item>
      <Menu.Item key="13">
        <NavLink className="header-active-button-toggle resource" activeStyle={{ backgroundColor: '#3751FF', color: '#fff' }} to="/app/agencyForecasts">Agency Forecasts</NavLink>
      </Menu.Item>
      <Menu.Item key="14">
        <NavLink className="header-active-button-toggle" activeStyle={{ backgroundColor: '#3751FF', color: '#fff' }} to="/app/foiaRequests">FOIA Requests</NavLink>
      </Menu.Item>
    </Menu>
    </>
  );

  const text = <span>Recommended opportunities</span>;

  return (
    <Header>
      <Row gutter={[16, 16]}>
        <Col xs={3} sm={3} md={6} lg={3} xl={3}>
          <Logo className="logo-design" />
        </Col>
        <Col xs={14} sm={19} md={16} lg={19} xl={19} className="mt-3">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="button-responsive">
                <Dropdown overlay={menu} className="toggle-menu">
                  <MenuUnfoldOutlined style={{ fontSize: "25px", marginTop: "10px", float: "left" }} />
                </Dropdown>
              </div>
            </Col>
            <Col xs={12} sm={24} md={24} lg={24} xl={24} className="header-width-button">
              
              <div className="header_nav">
                <NavLink className='header-active-button' activeStyle={{ backgroundColor: '#3e79f7', color: '#fff' }} to="/app/dashboards">Dashboard</NavLink>
                <NavLink className="header-active-button" activeStyle={{ backgroundColor: '#3e79f7', color: '#fff' }} to="/app/liveopportunities">Live Opportunities</NavLink>
                <Tooltip placement="top" title={text}>
                  <NavLink className="header-active-button" activeStyle={{ backgroundColor: '#3e79f7', color: '#fff' }} to="/app/recommendedOpportunities">Opportunities</NavLink>
                </Tooltip>
                <NavLink className="header-active-button" activeStyle={{ backgroundColor: '#3e79f7', color: '#fff' }} to="/app/pipeline">Pipeline</NavLink>
                <NavLink className="header-active-button" activeStyle={{ backgroundColor: '#3e79f7', color: '#fff' }} to="/app/teamingPartners">Teaming Partners</NavLink>
                <NavLink className="header-active-button" activeStyle={{ backgroundColor: '#3e79f7', color: '#fff' }} to="/app/incumbentSearch">Incumbent Search</NavLink>
                <NavLink className="header-active-button" activeStyle={{ backgroundColor: '#3e79f7', color: '#fff' }} to="/app/spendAnalytics">Spend & Analytics</NavLink>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="header-width-button header_nav">
              <div className="header_nav">
                <NavLink className="header-active-button" activeStyle={{ backgroundColor: '#3751FF', color: '#fff' }} to="/app/documents">Documents</NavLink>
                <NavLink className="header-active-button" activeStyle={{ backgroundColor: '#3751FF', color: '#fff' }} to="/app/notifications">Notifications</NavLink>
                <NavLink className="header-active-button" activeStyle={{ backgroundColor: '#3751FF', color: '#fff' }} to="/app/library">FAR Library</NavLink>
                <NavLink className="header-active-button resource" activeStyle={{ backgroundColor: '#3751FF', color: '#fff' }} to="/app/resourcesEvents">Resources & Events</NavLink>
                <NavLink className="header-active-button resource" activeStyle={{ backgroundColor: '#3751FF', color: '#fff' }} to="/app/priceIntelligence">Price Intelligence</NavLink>
                <NavLink className="header-active-button resource" activeStyle={{ backgroundColor: '#3751FF', color: '#fff' }} to="/app/agencyForecasts">Agency Forecasts</NavLink>
                <NavLink className="header-active-button" activeStyle={{ backgroundColor: '#3751FF', color: '#fff' }} to="/app/foiaRequests">FOIA Requests</NavLink>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={7} sm={2} md={2} lg={2} xl={2}>
          <NavProfile />
        </Col>
      </Row>
    </Header>
  )
}

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, navType, headerNavColor, mobileNav, currentTheme, direction } = theme;
  return { navCollapsed, navType, headerNavColor, mobileNav, currentTheme, direction }
};

export default connect(mapStateToProps, { toggleCollapsedNav, onMobileNavToggle })(HeaderNav);