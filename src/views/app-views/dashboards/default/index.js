import React, { useEffect, useState } from "react";
import { Row, Col, Card, Tabs, Input } from 'antd';
import { useDispatch, connect } from 'react-redux';
import AllAlerts from "./tabs/AllAlerts";
import TopAgency from "./tabs/TopAgency";
import MyOpportunity from "./tabs/MyOpportunity";
import MyAgency from "./tabs/MyAgency";
import MyTeaming from "./tabs/MyTeaming";
import "./dashboard.css";
import { allAlertsRequest, myAgencyAlerts, MyOpportunityRequest, teamingAlerts, topAgencySpends } from "redux/actions/Dashboard";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const { Search } = Input;

const DashBoard = (props) => {

  // All Alerts API  //
  const [allAlertsData, setAllAlertsData] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allAlertsRequest())
  }, [dispatch]);


  const dashboardData = props.allAlerts;
  useEffect(() => {
    if (dashboardData !== "" && dashboardData !== undefined && dashboardData !== null) {

      setAllAlertsData(dashboardData);

    }
  }, [dashboardData])

  // MyOpprotunity API  //

  const [opportunity, setOpportunity] = useState([])

  useEffect(() => {
    dispatch(MyOpportunityRequest())
  }, [dispatch]);


  const myOpportunityData = props.myOpportunity;

  useEffect(() => {
    if (myOpportunityData !== "" && myOpportunityData !== undefined && myOpportunityData !== null) {

      setOpportunity(myOpportunityData);

    }
  }, [myOpportunityData])

  // My Agency Alerts  //
  const [myagency, setMyagency] = useState([])


  useEffect(() => {
    dispatch(myAgencyAlerts())
  }, [dispatch]);


  const myAgencyData = props.myAgency;

  useEffect(() => {
    if (myAgencyData !== "" && myAgencyData !== undefined && myAgencyData !== null) {

      setMyagency(myAgencyData);

    }
  }, [myAgencyData])

  // Top Agency Spends  //
  const [topagency, setTopagency] = useState([])

  const user = {
    type: "agency",
    filters: { fy: "2021", period: "12" }
  }

  useEffect(() => {
    dispatch(topAgencySpends(user))
    // eslint-disable-next-line
  }, [dispatch]);

  const topagencyspend = props.topAgency;

  useEffect(() => {
    if (topagencyspend !== '' && topagencyspend !== null && topagencyspend !== undefined) {
      setTopagency(topagencyspend);
    }
    // eslint-disable-next-line
  }, [topagencyspend])

  // TEAMING ALERTS API  //

  useEffect(() => {
    dispatch(teamingAlerts())
  }, [dispatch]);

  const [teamingagency, setTeamingagency] = useState([])

  const teamingalerts = props.teamingAlertss;

  useEffect(() => {
    if (teamingalerts !== '' && teamingalerts !== null && teamingalerts !== undefined) {
      setTeamingagency(teamingalerts);
    }
    // eslint-disable-next-line
  }, [teamingalerts])

  const onSearch = value => console.log(value);


  return (
    <>
      <React.Fragment>
        <div>
          <Row>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <h3 className="dashboard-size">Dashboard</h3>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <div style={{ textAlign: 'right', marginBottom: 15 }}>
                <Search placeholder="Search" onSearch={onSearch} style={{ width: 300 }} className="search-input-color" />
              </div>
            </Col>
          </Row>
          <div className="card-container">
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <Card className="card-font-change">
                  <Tabs defaultActiveKey="1" onChange={callback} className="tabs-dashboard">
                    <TabPane tab="All Alerts" style={{ borderRadius: '0px 10px 10px 10px' }} className="tabs-pane-dashboard" key="1">
                      <AllAlerts data={allAlertsData} className="tabs-pane-dashboard" />
                    </TabPane>

                    <TabPane tab="My Opportunity Alerts" style={{ borderRadius: 10 }} key="2">
                      <MyOpportunity data={opportunity} />
                    </TabPane>

                    <TabPane tab="My Agency Alerts" style={{ borderRadius: 10 }} key="3">
                      <MyAgency data={myagency} />
                    </TabPane>

                    <TabPane tab="My Teaming Alerts" style={{ borderRadius: 10 }} key="4">
                      <MyTeaming data={teamingagency} />
                    </TabPane>
                  </Tabs>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Card>
                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Top Agency Spends" style={{ borderRadius: 10 }} key="5">
                      <TopAgency data={topagency} />
                    </TabPane>
                  </Tabs>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    </>
  )
};

const mapStateToProps = ({ dashboard }) => {
  const { loading, allAlerts, myOpportunity, myAgency, topAgency, teamingAlertss, error } = dashboard;
  return { loading, allAlerts, myOpportunity, myAgency, topAgency, teamingAlertss, error }
}

const mapDispatchToProps = {
  allAlertsRequest,
  MyOpportunityRequest,
  myAgencyAlerts,
  topAgencySpends,
  teamingAlerts,
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
