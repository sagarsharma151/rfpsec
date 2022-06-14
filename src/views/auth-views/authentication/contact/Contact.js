import React, { useState, useEffect } from "react";
import { Button, Col, Row, Card, Form, Input, Alert} from "antd";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Contact.scss";
import { useSelector, useDispatch } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Logo from "../../../../assets/images/LOGO.png";
import { Link } from "react-router-dom";
import {ListOfSubscriptionPlan } from "redux/actions/profile";
import { contact } from "redux/actions/Auth";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Icon1 from "../../../../assets/images/Store_2.png";
import Icon2 from "../../../../assets/images/Bullseye-pointer.png";
import Icon3 from "../../../../assets/images/Line.png";
const { TextArea } = Input;

const Subscription = (props) => {
  const dispatch = useDispatch();
  const [subscriptions, setSubscriptions] = useState();
  //   const data = useSelector(state=>state.profile.user.payload)
  const plans = useSelector((state) => state.subscriptionPlan.user);
  useEffect(() => {
    if (plans) {
      setSubscriptions(plans);
    }
  }, [plans]);
  console.log(
    subscriptions,
    "subscriptionssubscriptionssubscriptionssubscriptions"
  );
  // const [planid, setPlanid] = useState(1);
  // const handleplan = () => {
  //   setPlanid();
  //   console.log(planid)
  // };
  // function handleChange(value) {
  //   console.log(`selected ${value}`);
  //   if (value) {
  //     dispatch(StateDetails(value));
  //   }
  // }
  useEffect(() => {
    dispatch(ListOfSubscriptionPlan());
  }, []);

  const data = useSelector((state) => state.profile.user.payload);
  console.log("register..detailsdetailsdetails.", data);
  const [phone, setPhone] = useState("");
  const {loading, message, showMessage } = props;
  const [form] = Form.useForm();
  const history = useHistory();
  const initialCredential = {
    firstName: "",
    lastName: "",
    workEmail: "",
    jobTittle: "",
    phoneNo: "",
    companyName: "",
    companySize: "",
    comments: "",
  };
  const handleChangenumber = (value) => {
    console.log(value);
    setPhone(value);
  };
  console.log(phone, "phonephonephonephonephone");
  const onSignUp = (e) => {
    form
      .validateFields()
      .then((values) => {
        const signUpRequest = {
          firstName: values.firstName,
          lastName: values.lastName,
          workEmail: values.workEmail,
          jobTittle: values.jobTittle,
          phoneNo: phone,
          companyName: values.companyName,
          companySize: values.companySize,
          comments: values.comments,
        };
        const allRequest = {
          request: signUpRequest,
          route: history,
        };
        if (allRequest) {
          dispatch(contact(allRequest));
        }
        // form.resetFields()
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  let [signUpForm, setSignUpForm] = useState({});

  const onHandleChange = (e) => {
    signUpForm[e.target.id] = e.target.value;
    setSignUpForm(signUpForm);
  };

  return (
    <>
      <Card className="card-backgrounds">
        <div className="card-div-main">
          <div className="image-log-subs">
            <img src={Logo} alt=''/>
          </div>

          <div className="discount-para-div">
            <Card>
              <Row gutter={[16, 16]} justify="space-between">
                <Col xs={24} sm={12} lg={14} xl={14}>
                  <Card className="subscription-card subscription-background">
                    <div>
                      {" "}
                      <div className="para-div-main">
                        <h2 className="contact-text">Contact our Sales team</h2>
                      </div>
                    </div>{" "}
                    <motion.div
                      initial={{ opacity: 0, marginBottom: 0 }}
                      animate={{
                        opacity: showMessage ? 1 : 0,
                        marginBottom: showMessage ? 20 : 0,
                      }}
                    >
                      <Alert type="error" showIcon message={message}></Alert>
                    </motion.div>
                    <Form
                      form={form}
                      initialValues={initialCredential}
                      layout="vertical"
                      name="register-form"
                      onFinish={onSignUp}
                    >
                      <div className="row d-flex">
                        <div className="col-md-6">
                          {" "}
                          <Form.Item
                            name="firstName"
                            label="First Name"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please input your username!",
                              },
                              {
                                min: 5,
                                message:
                                  "Username must be minimum 5 characters.",
                              },
                            ]}
                            onChange={(e) => onHandleChange(e)}
                            value={signUpForm.first_name}
                          >
                            <Input
                              placeholder="First Name"
                              required
                              className="input-field-contact"
                            />
                          </Form.Item>
                        </div>
                        <div className="col-md-6">
                          {" "}
                          <Form.Item
                            name="lastName"
                            label="Last Name"
                            hasFeedback
                            onChange={(e) => onHandleChange(e)}
                            value={signUpForm.last_name}
                          >
                            <Input required className="input-field-contact" />
                          </Form.Item>
                        </div>
                        <div className="col-md-6">
                          {" "}
                          <Form.Item
                            name="workEmail"
                            label="Work Email*"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please input your username!",
                              },
                              {
                                min: 5,
                                message:
                                  "Username must be minimum 5 characters.",
                              },
                            ]}
                            onChange={(e) => onHandleChange(e)}
                            value={signUpForm.first_name}
                          >
                            <Input required className="input-field-contact" />
                          </Form.Item>
                        </div>
                        <div className="col-md-6">
                          {" "}
                          <Form.Item
                            name="jobTittle"
                            label="Job Title*"
                            hasFeedback
                            onChange={(e) => onHandleChange(e)}
                            value={signUpForm.last_name}
                          >
                            <Input
                              placeholder="Last Name"
                              required
                              className="input-field-contact"
                            />
                          </Form.Item>
                        </div>
                        <Form.Item
                          name="phoneNo"
                          label="Phone Number**"
                          hasFeedback
                          onChange={(e) => onHandleChange(e)}
                          value={signUpForm.company_name}
                        >
                          <PhoneInput
                            inputExtraProps={{
                              name: "phoneNo",
                              required: true,
                              autoFocus: true,
                            }}
                            country={"us"}
                            // value={this.state.phone}
                            className="input-field-phone-contact"
                            // onChange={phone => this.setState({ phone })}
                            value={phone}
                            onChange={handleChangenumber}
                          />
                        </Form.Item>
                        <div className="col-md-6">
                          {" "}
                          <Form.Item
                            name="companyName"
                            label="Company Name*"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please input your username!",
                              },
                              {
                                min: 5,
                                message:
                                  "Username must be minimum 5 characters.",
                              },
                            ]}
                            onChange={(e) => onHandleChange(e)}
                            value={signUpForm.first_name}
                          >
                            <Input
                              placeholder="Last Name"
                              required
                              className="input-field-contact"
                            />
                          </Form.Item>
                        </div>
                        <div className="col-md-6">
                          {" "}
                          <Form.Item
                            name="companySize"
                            label="Company Size*"
                            hasFeedback
                            onChange={(e) => onHandleChange(e)}
                            value={signUpForm.last_name}
                          >
                            <Input
                              placeholder="Last Name"
                              required
                              className="input-field-contact"
                            />
                          </Form.Item>
                        </div>
                        <div></div>
                        <Form.Item
                          label="How can we help you?*"
                          name="comments"
                        >
                          <TextArea
                            rows={4}
                            placeholder="How can our team help you?"
                            maxLength={250}
                            required
                            className="input-field-contact"
                          />
                        </Form.Item>
                      </div>
                      <div className="text-center">
                        <p className="receipt">
                          {" "}
                          By clicking submit, I acknowledge receipt.
                        </p>
                        <Link>Privacy policy</Link>
                      </div>
                      <div className="text-center mt-3 contact-btn-div">
                        <Form.Item>
                          <Button
                            htmlType="submit"
                            className="contact-btn"
                            block
                            loading={loading}
                          >
                            Submit
                          </Button>
                        </Form.Item>
                      </div>
                    </Form>
                  </Card>
                </Col>
                <Col xs={24} sm={12} lg={10} xl={10}>
                  <Card className="subscription-card">
                    <div>
                      {" "}
                      <div className="para-div-main">
                        <p className="contact-main-heading">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting{" "}
                        </p>
                      </div>
                    </div>{" "}
                    <div className="main-card-div">
                      {" "}
                      <div className="contact-icon-div">
                        <div className="rectangle-img-div-contact">
                          <img src={Icon1} className="icon-contact" alt=''/>
                        </div>
                      </div>
                      <div className="para-div-main para-div-side">
                        <p className="contact-text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className="main-card-div">
                      {" "}
                      <div className="contact-icon-div">
                        <div className="rectangle-img-div-contact">
                          <img src={Icon2} className="icon-contact" alt=''/>
                        </div>
                      </div>
                      <div className="para-div-main para-div-side">
                        <p className="contact-text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className="main-card-div">
                      {" "}
                      <div className="contact-icon-div">
                        <div className="rectangle-img-div-contact">
                          <img src={Icon3} className="icon-contact" alt=''/>
                        </div>
                      </div>
                      <div className="para-div-main para-div-side">
                        <p className="contact-text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industrys.
                        </p>
                      </div>
                    </div>
                    <div className="price-total link-help-center">
                      <p className="monthly-bill">
                        For general questions visit our{" "}
                        <Link to="/">Help Center</Link>
                      </p>
                    </div>
                    <div className="genpact-div">
                      <div className="genpact-para-div">
                        {" "}
                        <p className="genpact-para">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                        <p className="marketing-para">
                          Sarah Pharr | AVP Marketing | Genpact
                        </p>
                      </div>
                    </div>
                    {/* <div className="offer-div">
                    <p className="offer-para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div> */}
                  </Card>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Subscription;
