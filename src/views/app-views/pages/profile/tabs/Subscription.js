import React, { useState, useEffect } from "react";
import { Button, Col, Row, Card } from "antd";
import "./Subscription.css";
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../../../../assets/images/LOGO.png";
import { Select } from "antd";
import ListData,{basiclist} from './Listdata'
import Listicon from "../../../../../assets/images/Group.png";
import contact from '../../../../../assets/images/contacts.png'
import contact1 from '../../../../../assets/images/contact1.png'
import { Tabs } from "antd";
import { Provider } from "./FormContext";
import { Switch } from "antd";
import {
  StateDetails,
  UserState,
  ListOfSubscriptionPlan,
} from "redux/actions/profile";
const { TabPane } = Tabs;
const { Option, OptGroup } = Select;

const Subscription = (props) => {
  const dispatch = useDispatch();
  const [subscriptions, setSubscriptions] = useState();
  const data = useSelector((state) => state.profile.user.payload);
  const plans = useSelector((state) => state.subscriptionPlan.user);
  const [allData, setAlldata] = useState([]);
  const [basic, setBasic] = useState(0);
  const [buisness, setBuisness] = useState(0);
  const [yearbasic, setYearBasic] = useState(0);
  const [yearbuisness, setYearBuisness] = useState(0);
  const [selectMaxUser, setSelectMaxUser] = useState(5);
  const [planswitch, setSwitch] = useState(true);
  console.log(allData, "allData");
  useEffect(() => {
    if (plans) {
      setSubscriptions(plans);
      getPlans();
    }
  }, [plans]);
  console.log(
    subscriptions,
    "subscriptionssubscriptionssubscriptionssubscriptions"
  );
  const [planid, setPlanid] = useState(1);
  const handleplan = () => {
    setPlanid();
  };
  console.log(plans, "plans12345678");
  function getPlans() {
    plans &&
      plans.map((data, i) => {
        data.maximumUserAllowed == selectMaxUser && data.planName == "BASIC" ? (
          <>{`${setBasic(data.monthlyRate)} ${setYearBasic(
            data.annualRate
          )} ${setAlldata(data)}`}</>
        ) : (
          console.log(data.maximumUserAllowed)
        );
      });
    plans &&
      plans.map((data, i) => {
        data.maximumUserAllowed == selectMaxUser &&
        data.planName == "Business Development" ? (
          <>{`${setYearBuisness(data.annualRate)} ${setBuisness(
            data.monthlyRate
          )} ${setAlldata(data)}`}</>
        ) : (
          console.log(
            data.monthlyRate,
            "annualRateannualRateannualRate",
            data.annualRate
          )
        );
      });
  }

  React.useEffect(() => {
    getPlans();
    dispatch(UserState(selectMaxUser));
  }, [selectMaxUser]);

  function handleChange(value) {
    console.log(`selected ${value}`);
    setSelectMaxUser(value);
    getPlans();
    // plans && plans.map((data,i)=> { data.planId == value && data.planName == 'BASIC' ? setBasic(data.monthlyRate) : console.log(data.maximumUserAllowed) } );
    // plans && plans.map((data,i)=> { data.planId == value && data.planName == 'Business Development' ? alert(data.monthlyRate) : alert(data.maximumUserAllowed) } );
  }
  useEffect(() => {
    dispatch(ListOfSubscriptionPlan());
  }, []);

  const onChanges = (key) => {
    console.log(key);
  };
  const onChangeplan = (checked) => {
    console.log(`switch to ${checked}`);
    setSwitch(checked);
  };
  console.log(yearbuisness, "yearbuisnessyearbuisnessyearbuisness");
  const basichandle = (status, price,time) => {
    console.log("price", price,'time',time);
    props.next();
    dispatch(StateDetails(status));
    const plan ={
      price:price,
      time:time
    }
    console.log('localplan',plan)
    localStorage.setItem('plan', JSON.stringify(plan));
  };
  console.log(basiclist,'basiclist')
  return (
    <>
      <Card className="card-backgrounds">
        <div className="card-div-main">
          <div className="image-log-subs">
            <img src={Logo} />
          </div>
          <div>
            <label className="choose-team">Choose team size:&nbsp;</label>&nbsp;
            <Select
              // defaultValue="5"
              style={{ width: 200, borderRadius: "5px" }}
              onChange={handleChange}
            >
              <OptGroup label="Manager">
                {subscriptions &&
                  subscriptions.map((data, i) => (
                    <Option
                      value={data.maximumUserAllowed}
                      attr-max={data.maximumUserAllowed}
                      key={i}
                    >
                      {data.subPlanName}
                    </Option>
                  ))}

                {/* <Option value="10">10 Users</Option>
                <Option value="15">15 Users</Option>
                <Option value="20">25 Users</Option>
                <Option value="25">30 Users</Option>
                <Option value="102">40 Users</Option>
                <Option value="150">50 Users</Option>
                <Option value="200">100+ Users</Option> */}
              </OptGroup>
            </Select>
          </div>
          <div className="discount-para-div">
            <p className="discount-para5">
              <span className="annually"></span>{" "}
              <span className="monthly">Monthly</span>
              <Switch defaultChecked onChange={onChangeplan} />{" "}
              <span className="annually">Yearly</span> ((Yearly Save 20%) ){" "}
            </p>
            {/* <Tabs defaultActiveKey="1" onChange={onChanges}>
              <TabPane
                tab={
                  <div>
                    <span className="discount-para5">
                      you will get additional 20% discount{" "}
                    </span>
                    <span className="annually">Annually|</span>
                  </div>
                }
                key="1"
              > */}
              {selectMaxUser < 50 ? <>
                {planswitch ? (
              <Card>
                <Row gutter={[16, 16]} justify="space-between">
                  <Col xs={24} sm={12} lg={7} xl={7}>
                    <Card className="subscription-card">
                      <div>
                        {" "}
                        <div className="para-div-main">
                          <h2 className="plan-text">Free Plan</h2>
                        </div>
                      </div>{" "}
                      <div className="main-card-div">
                        {" "}
                        <div className="rectangle-img-div">
                          <h1 className="price-doller">$0</h1>
                        </div>
                        <div className="para-div-main">
                          <p className="plan-text">
                            Free <br></br>
                            for 15 Days
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="upto-users">Upto 5 Users</p>
                      </div>
                      <div className="button-div">
                        <Button
                          key={4}
                          className="upgrade-btn"
                          onClick={props.next}
                        >
                          Try for Free
                        </Button>
                      </div>
                      {/* <div className="offer-div">
                    <p className="offer-para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div> */}
                      <hr />
                      <div className="offer-list">
                        <div className="free-plan-div">
                          <h2 className="free-plan">Free Plan Includes</h2>
                        </div>
                        <ul>
                        
                          {basiclist.map((data,i)=>(
                             <li>
                             <img src={data.image} className="list-icons" />
                            {data.name}
                           </li>
                          ))}


                          {/* <li>
                            <img src={Listicon} className="list-icons" />
                            75% conception rate
                          </li>
                          <li>
                            <img src={Listicon} className="list-icons" />
                            Increase feed
                          </li>
                          <li>
                            <img src={Listicon} className="list-icons" />
                            Lower antibiotic usage
                          </li>
                          <li>
                            <img src={Listicon} className="list-icons" />
                            effciency by 7%
                          </li>
                          <li>
                            <img src={Listicon} className="list-icons" />
                            Ruminating while laying
                          </li>
                          <li>
                            <img src={Listicon} className="list-icons" />
                            Efficiency by 7%
                          </li>
                          <li>
                            <img src={Listicon} className="list-icons" />
                            Increase while laying
                          </li> */}
                        </ul>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={7} xl={7}>
                    <Card className="subscription-card">
                      <div>
                        {" "}
                        <div className="para-div-main">
                          <h2 className="plan-text">Basic</h2>
                        </div>
                      </div>{" "}
                      <div className="main-card-div">
                        {" "}
                        <div className="rectangle-img-div">
                          <h1 className="price-doller second-plan">
                            ${yearbasic}
                          </h1>
                        </div>
                        <div className="para-div-main">
                          <p className="plan-text">
                            user /<br></br>
                            yearly
                          </p>
                        </div>
                      </div>
                      <div className="price-total">
                        <p
                          style={{ fontWeight: "700" }}
                          className="month-total"
                        >
                          Total ${yearbasic} / yearly
                        </p>
                        <p className="monthly-bill">Billed monthly</p>
                      </div>
                      <div className="button-div">
                        <Button
                          key={4}
                          className="upgrade-btn"
                          onClick={() => {
                            basichandle("BASIC", yearbasic,'Yearly');
                          }}
                        >
                          Start now
                        </Button>
                      </div>
                      {/* <div className="offer-div">
                    <p className="offer-para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div> */}
                      <hr />
                      <div className="offer-list">
                        <div className="free-plan-div">
                          <h2 class="free-plan">Basic Plan Includes</h2>
                        </div>
                        <ul>
                        {basiclist.map((data,i)=>(
                             <li>
                             <img src={data.image} className="list-icons" />
                            {data.name}
                           </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={7} xl={7}>
                    <Card className="subscription-card">
                      <div>
                        {" "}
                        <div className="para-div-main">
                          <h2 className="plan-text">Business Development</h2>
                        </div>
                      </div>{" "}
                      <div className="main-card-div">
                        {" "}
                        <div className="rectangle-img-div">
                          <h1 className="price-doller third-plan">
                            ${yearbuisness}
                          </h1>
                        </div>
                        <div className="para-div-main">
                        <p className="plan-text">
                            user /<br></br>
                            yearly
                          </p>
                        </div>
                      </div>
                      <div className="price-total">
                        <p className="month-total">
                          Total ${yearbuisness}/ yearly
                        </p>
                        <p className="monthly-bill">Billed monthly</p>
                      </div>
                      <div className="button-div">
                        <Button
                          key={4}
                          className="upgrade-btn"
                          onClick={() => {
                            basichandle("Business Development", yearbuisness,'Yearly');
                          }}
                        >
                          Start now
                        </Button>
                      </div>
                      {/* <div className="offer-div">
                    <p className="offer-para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div> */}
                      <hr />
                      <div className="offer-list">
                        <div className="free-plan-div">
                          <h2 class="free-plan">
                            Business Development Includes
                          </h2>
                        </div>
                        <ul>
                        {ListData.map((data,i)=>(
                             <li>
                             <img src={data.image} className="list-icons" />
                            {data.name}
                           </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Card>
            ) : (
              <Card>
                <Row gutter={[16, 16]} justify="space-between">
                  <Col xs={24} sm={12} lg={7} xl={7}>
                    <Card className="subscription-card">
                      <div>
                        {" "}
                        <div className="para-div-main">
                          <h2 className="plan-text">Free Plan</h2>
                        </div>
                      </div>{" "}
                      <div className="main-card-div">
                        {" "}
                        <div className="rectangle-img-div">
                          <h1 className="price-doller">$0</h1>
                        </div>
                        <div className="para-div-main">
                          <p className="plan-text">
                            Free <br></br>
                            for 15 Days
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="upto-users">Upto 5 Users</p>
                      </div>
                      <div className="button-div button-free">
                        <Button
                          key={4}
                          className="upgrade-btn"
                          onClick={props.next}
                        >
                          Try for Free
                        </Button>
                      </div>
                      {/* <div className="offer-div">
                    <p className="offer-para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div> */}
                      <hr />
                      <div className="offer-list">
                        <div className="free-plan-div">
                          <h2 className="free-plan">Free Plan Includes</h2>
                        </div>
                        <ul>
                        {basiclist.map((data,i)=>(
                             <li>
                             <img src={data.image} className="list-icons" />
                            {data.name}
                           </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={7} xl={7}>
                    <Card className="subscription-card">
                      <div>
                        {" "}
                        <div className="para-div-main">
                          <h2 className="plan-text">Basic</h2>
                        </div>
                      </div>{" "}
                      <div className="main-card-div">
                        {" "}
                        <div className="rectangle-img-div">
                          <h1 className="price-doller second-plan">${basic}</h1>
                        </div>
                        <div className="para-div-main">
                          <p className="plan-text">
                            user /<br></br>
                            month
                          </p>
                        </div>
                      </div>
                      <div className="price-total">
                        <p
                          style={{ fontWeight: "700" }}
                          className="month-total"
                        >
                          Total ${basic} / month
                        </p>
                        <p className="monthly-bill">Billed monthly</p>
                      </div>
                      <div className="button-div">
                        <Button
                          key={4}
                          className="upgrade-btn"
                          onClick={() => {
                            basichandle("BASIC", basic,'Monthly');
                          }}
                        >
                          Start now
                        </Button>
                      </div>
                      {/* <div className="offer-div">
                    <p className="offer-para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div> */}
                      <hr />
                      <div className="offer-list">
                        <div className="free-plan-div">
                          <h2 class="free-plan">Basic Plan Includes</h2>
                        </div>
                        <ul>
                        {basiclist.map((data,i)=>(
                             <li>
                             <img src={data.image} className="list-icons" />
                            {data.name}
                           </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={7} xl={7}>
                    <Card className="subscription-card">
                      <div>
                        {" "}
                        <div className="para-div-main">
                          <h2 className="plan-text">Business Development</h2>
                        </div>
                      </div>{" "}
                      <div className="main-card-div">
                        {" "}
                        <div className="rectangle-img-div">
                          <h1 className="price-doller third-plan">
                            ${buisness}
                          </h1>
                        </div>
                        <div className="para-div-main">
                          <p className="plan-text">
                            user /<br></br>
                            month
                          </p>
                        </div>
                      </div>
                      <div className="price-total">
                        <p className="month-total">Total ${buisness} / month</p>
                        <p className="monthly-bill">Billed monthly</p>
                      </div>
                      <div className="button-div">
                        <Button
                          key={4}
                          className="upgrade-btn"
                          onClick={() => {
                            basichandle("Business Development", buisness,'Monthly');
                          }}
                        >
                          Start now
                        </Button>
                      </div>
                      {/* <div className="offer-div">
                    <p className="offer-para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div> */}
                      <hr />
                      <div className="offer-list">
                        <div className="free-plan-div">
                          <h2 class="free-plan">
                            Business Development Includes
                          </h2>
                        </div>
                        <ul>
                        {ListData.map((data,i)=>(
                             <li>
                             <img src={data.image} className="list-icons" />
                           <span> {data.name}</span>
                           </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </Col>
                </Row>
                {/* </TabPane>
              <TabPane tab={<span className="monthly">Monthly</span>} key="2"> */}
              </Card>
            ) }</>:<> <Card>
            <Row gutter={[16, 16]} justify="space-between">
              <Col xs={24} sm={12} lg={7} xl={7}>
                <Card className="subscription-card">
                  <div>
                    {" "}
                    <div className="para-div-main">
                      <h2 className="plan-text">Free Plan</h2>
                    </div>
                  </div>
                  <div className="contact-img-div-main">
                     <img src={contact}  className='contact-icon-page'/>
                    </div>
                  <div className="button-div">
                    <Button
                      key={4}
                      className="upgrade-btn"
                    
                    ><Link to='/auth/contact'>
                      Contact us
                      </Link></Button>
                  </div>
                  {/* <div className="offer-div">
                <p className="offer-para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div> */}
                  <hr />
                  <div className="offer-list">
                    <div className="free-plan-div">
                      <h2 className="free-plan">Free Plan Includes</h2>
                    </div>
                    <ul>
                    
                      {basiclist.map((data,i)=>(
                         <li>
                         <img src={data.image} className="list-icons" />
                        {data.name}
                       </li>
                      ))}


                      {/* <li>
                        <img src={Listicon} className="list-icons" />
                        75% conception rate
                      </li>
                      <li>
                        <img src={Listicon} className="list-icons" />
                        Increase feed
                      </li>
                      <li>
                        <img src={Listicon} className="list-icons" />
                        Lower antibiotic usage
                      </li>
                      <li>
                        <img src={Listicon} className="list-icons" />
                        effciency by 7%
                      </li>
                      <li>
                        <img src={Listicon} className="list-icons" />
                        Ruminating while laying
                      </li>
                      <li>
                        <img src={Listicon} className="list-icons" />
                        Efficiency by 7%
                      </li>
                      <li>
                        <img src={Listicon} className="list-icons" />
                        Increase while laying
                      </li> */}
                    </ul>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={7} xl={7}>
                <Card className="subscription-card">
                  <div>
                    {" "}
                    <div className="para-div-main">
                      <h2 className="plan-text">Basic</h2>
                    </div>
                  </div>{" "}
                  <div className="contact-img-div-main">
                     <img src={contact}  className='contact-icon-page'/>
                    </div>
                  <div className="button-div">
                    <Button
                      key={4}
                      className="upgrade-btn"
                     
                    ><Link to='/auth/contact'>
                    Contact us
                    </Link>
                    </Button>
                  </div>
                  {/* <div className="offer-div">
                <p className="offer-para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div> */}
                  <hr />
                  <div className="offer-list">
                    <div className="free-plan-div">
                      <h2 class="free-plan">Basic Plan Includes</h2>
                    </div>
                    <ul>
                    {basiclist.map((data,i)=>(
                         <li>
                         <img src={data.image} className="list-icons" />
                        {data.name}
                       </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={7} xl={7}>
                <Card className="subscription-card">
                  <div>
                    {" "}
                    <div className="para-div-main">
                      <h2 className="plan-text">Business Development</h2>
                    </div>
                  </div>{" "}
                  <div className="contact-img-div-main">
                     <img src={contact1}  className='contact-icon-page'/>
                    </div>
                  <div className="button-div">
                    <Button
                      key={4}
                      className="upgrade-btn"
                     
                    >
                  <Link to='/auth/contact'>
                      Contact us
                      </Link>
                    </Button>
                  </div>
                  {/* <div className="offer-div">
                <p className="offer-para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div> */}
                  <hr />
                  <div className="offer-list">
                    <div className="free-plan-div">
                      <h2 class="free-plan">
                        Business Development Includes
                      </h2>
                    </div>
                    <ul>
                    {ListData.map((data,i)=>(
                         <li>
                         <img src={data.image} className="list-icons" />
                        {data.name}
                       </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Col>
            </Row>
          </Card></>}
          
            {/* </TabPane>
            </Tabs> */}
          </div>
        </div>
      </Card>
    </>
  );
};

export default Subscription;
