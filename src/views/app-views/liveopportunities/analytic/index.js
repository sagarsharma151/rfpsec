import React, { useEffect, useState } from "react";
import { Row, Col, Card, Select, Pagination, Button, Collapse, Form, DatePicker, Space, Layout, Input } from "antd";
import { ArrowRightOutlined, ControlFilled, FormOutlined, WechatOutlined } from "@ant-design/icons";
import Document from "../Rectangle/Document.png";
import { useHistory } from "react-router";
import "./LiveOpportunities.css";
import SideCard from "../../dashboards/analytic/SideCard";
import { connect, useDispatch } from "react-redux";
import { liveOpportunity, searchOpportunity } from "redux/actions/LiveOpportunity";
import { Link } from "react-router-dom";
import { addtoPipeline } from "redux/actions/Pipeline";

const { Option } = Select;
const { RangePicker } = DatePicker;

const pageSize = 1;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 24,
  },
};

export const AnalyticDashboard = (props) => {

  const [singledata, setSingledata] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const history = useHistory();
  const onCancle = () => {
    form.resetFields();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(liveOpportunity());
  }, [dispatch]);

  const liveSingledata =
    props.liveOppotunityData && props.liveOppotunityData.opportunityData ? props.liveOppotunityData.opportunityData : props.liveOppotunityData;

  const totalRecord = props.liveOppotunityData && props.liveOppotunityData.totalRecords;

  useEffect(() => {
    if (
      liveSingledata !== "" &&
      liveSingledata !== undefined &&
      liveSingledata !== null
    ) {
      setSingledata(liveSingledata);
      setTotalPage(singledata.length / pageSize)
      setMinIndex(0)
      setMaxIndex(pageSize)
    }
    // eslint-disable-next-line
  }, [liveSingledata]);

  const handleChange = (page) => {
    setCurrent(page)
    setMinIndex((page - 1) * pageSize)
    setMaxIndex(page * pageSize)
  };


  const addPipeline = (singledata) => {
    console.log('addpipeline..', singledata);
    const addopportunity = {
      opportunity_id: singledata._id,
      status: "complete"
    }
    props.addtoPipeline(addopportunity);
    console.log('addopportunity..', addopportunity);
  };

  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        return;

      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        return;

      default:
        form.setFieldsValue({
          note: "Hi there!",
        });
        return;
    }
  };

  // const handleMoreDetails = () => {
  //   history.push("/app/TabsOfLiveOpportunities")
  // }
  const handleChat = () => {
    history.push("/app/StickyChat");
  };

  const onFinish = (values) => {
    const searchData = {
      NAICSCodes: values.naicsCode ? values.naicsCode : "",
      solicitationNumber: values.solicitationNumber
        ? values.solicitationNumber
        : "",
      typeOfSetAside: values.typeOfSetAside ? values.typeOfSetAside : "",
      OpportunityType: values.opportunitiesid ? values.opportunitiesid : "",
    };
    const allData = {
      request: searchData,
    };
    dispatch(searchOpportunity(allData));
  };

  const { Header } = Layout;
  const { Panel } = Collapse;
  const suffix = (
    <ControlFilled
      style={{
        fontSize: 16,
        color: "#1F4173",
      }}
    />
  );

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xxl={18}>
          <div className="live_opportunites_heading">
            <div className="mt-3">
              <h3>Live Opportunities</h3>
            </div>
            <div className="live_opportunites_heading_button">
              <div>
                <Button className="heading_buttons">
                  <div style={{ display: "flex" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div className="totalnoof_first">
                        Total No. of Opportunities
                      </div>
                      <div className="special_no">{totalRecord}</div>
                    </div>
                    <div className="arrowicon_of_button">
                      <ArrowRightOutlined />
                    </div>
                  </div>
                </Button>
              </div>
              <div>
                <Button className="heading_buttons1">
                  <div style={{ display: "flex" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div className="totalnoof_first">
                        Total No. of Opportunities
                      </div>
                      <div className="special_no">{totalRecord}</div>
                    </div>
                    <div className="arrowicon_of_button">
                      <ArrowRightOutlined />
                    </div>
                  </div>
                </Button>
              </div>
              <div>
                <Button className="heading_buttons2">
                  <div style={{ display: "flex" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div className="totalnoof_first">
                        Total No. of Opportunities
                      </div>
                      <div className="special_no">{totalRecord}</div>
                    </div>
                    <div className="arrowicon_of_button">
                      <ArrowRightOutlined />
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Card>
        <Row className="firstrow_live_opportunites">
          <Col sm={18} xs={24} lg={7}>
            {/* <Col xs={24} sm={24} md={24} lg={24} xxl={18}> */}
            <Form.Item name="savedsearches" label="Saved Searches">
              <Select
                // style={{ width: "90%" }}
                className="saved_search_input_box1"
                onChange={onGenderChange}
                colon="true"
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>{" "}
              <span className="formoutlined_icon">
                <FormOutlined />
              </span>
            </Form.Item>
          </Col>
          <Col span={1}></Col>

          <Col sm={18} xs={24} lg={7}>
            <Form.Item name="keywords" label="Keywords">
              <Select
                style={{ width: "100%" }}
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={1}></Col>
          <Col sm={18} xs={24} lg={7}>
            <Form.Item
              name="contractvechicle"
              label={<img style={{ width: "30px" }} src={Document} alt="" />}
              className="thirdcoloumn_icon"
            >
              <Select
                style={{ width: "100%" }}
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            {/* <div className="live_opportunites_heading_button">
              <div className="ml-4"><Button className="clear_search_button">Clear Search</Button></div>
              <div  ><Button className="clear_search_button">Save Search</Button></div>
              <div><Button className="clear_search_button">Run Search</Button></div>
            </div> */}
          </Col>
        </Row>
        <Collapse bordered={false} defaultActiveKey={["2"]}>
          <Panel header="Advanced Filter" key="1">
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={onFinish}
            >
              <Row>
                {/* <Col sm={7} xs={24}> */}
                <Col sm={18} xs={24} lg={7}>
                  <Form.Item name="opportunitiesid" label="Opportunities ID">
                    <Input className="input_org_tier" />
                    {/* <Select

                      onChange={onGenderChange}
                      allowClear
                    >
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select> */}
                  </Form.Item>
                  <Form.Item name="orgtier1" label="Org Tier 1">
                    <Input.Group compact>
                      <Select defaultValue="All" style={{ width: "30%" }}>
                        <Option value="All">All</Option>
                        <Option value="Option2">Option2</Option>
                      </Select>
                      <Select style={{ width: "70%" }}>
                        <Option value="Option1">Option1</Option>
                        <Option value="Option2">Option2</Option>
                      </Select>
                    </Input.Group>
                  </Form.Item>
                  <div className="mb-5">
                    <Form.Item name="orgtier2" label="Org Tier 2">
                      <Input className="input_org_tier" />
                    </Form.Item>
                  </div>
                  <div className="mb-5 mt-5">
                    <Form.Item name="orgtier3" label="Org Tier 3">
                      <Input className="input_org_tier" />
                    </Form.Item>
                  </div>
                </Col>
                <Col span={1}></Col>
                {/* <Col sm={7} xs={24}> */}
                <Col sm={18} xs={24} lg={7}>
                  <Form.Item
                    name="solicitationNumber"
                    label={
                      <div className="rfp_input">
                        <div>
                          <p className="commodity_input_tag">
                            Solicitation<br></br>Number
                          </p>
                        </div>
                        <div className="colon_with_adjustment">:</div>
                      </div>
                    }
                    colon={false}
                  >
                    <Input className="input_org_tier" />
                    {/* <Select

                      onChange={onGenderChange}
                      allowClear
                    >
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select> */}
                  </Form.Item>

                  <Form.Item
                    name="naicsCode"
                    label={
                      <div className="rfp_input">
                        <div>
                          <p className="commodity_input_tag">
                            Commodity/<br></br> Service Code
                          </p>
                        </div>
                        <div className="colon_with_adjustment">:</div>
                      </div>
                    }
                    colon={false}
                  >
                    {/* <Input.Group compact>
                      <Select defaultValue="NACIS" style={{ width: "30%" }}>
                        <Option value="NACIS">NACIS</Option>
                        <Option value="Option2">Option2</Option>
                      </Select> */}
                    <Input
                      style={{
                        width: "70%",
                        backgroundColor: "rgb(233,236,241)",
                      }}
                    />
                    {/* </Input.Group> */}
                  </Form.Item>

                  <Form.Item
                    name="facilityclearance"
                    label={
                      <div className="rfp_input">
                        <div>
                          <p className="commodity_input_tag">
                            Facility<br></br> Clearance
                          </p>
                        </div>
                        <div className="colon_with_adjustment">:</div>
                      </div>
                    }
                    colon={false}
                  >
                    <Select onChange={onGenderChange} allowClear>
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="contracttype" label="Contract Type">
                    <Select onChange={onGenderChange} allowClear>
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item name="awardtype" label="Award Type">
                    <Select onChange={onGenderChange} allowClear>
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="awardee" label="Awardee">
                    <Select onChange={onGenderChange} allowClear>
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="contacttask" label="Contact/Task #">
                    <Select onChange={onGenderChange} allowClear>
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Award Value"
                    style={{
                      marginBottom: 0,
                    }}
                  >
                    <Form.Item
                      style={{
                        display: "inline-block",
                        width: "calc(50% - 12px)",
                      }}
                    >
                      <Input className="input_org_tier" />
                    </Form.Item>
                    <span
                      style={{
                        display: "inline-block",
                        width: "24px",
                        lineHeight: "32px",
                        textAlign: "center",
                      }}
                    >
                      -
                    </span>
                    <Form.Item
                      style={{
                        display: "inline-block",
                        width: "calc(50% - 12px)",
                      }}
                    >
                      <Input className="input_org_tier" />
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col span={1}></Col>
                {/* <Col sm={7} xs={24}> */}
                <Col sm={18} xs={24} lg={7}>
                  {/* label={ < div className='rfp_input'>
                      <div><p className='commodity_input_tag'>Solicitation<br></br>Number</p></div>
                      <div className='colon_with_adjustment'>:</div>
                    </div>}
                    colon={false}   */}

                  <Form.Item
                    name="contractvechicle"
                    label={
                      <div className="rfp_input">
                        <div>
                          <p className="commodity_input_tag">
                            Contract<br></br>Vechicle
                          </p>
                        </div>
                        <div className="colon_with_adjustment">:</div>
                      </div>
                    }
                    colon={false}
                  >
                    <Select onChange={onGenderChange} allowClear>
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="acquisitionstatus"
                    label={
                      <div className="rfp_input">
                        <div>
                          <p className="commodity_input_tag">
                            Acquisition<br></br>Status
                          </p>
                        </div>
                        <div className="colon_with_adjustment">:</div>
                      </div>
                    }
                    colon={false}
                  >
                    <Select onChange={onGenderChange} allowClear>
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="daterange" label="Date Range">
                    <Space direction="vertical" size={16}>
                      <RangePicker size="large" />
                    </Space>
                  </Form.Item>
                  <Form.Item
                    name="createdupdatedstatus"
                    // label="Created/Updated Status"
                    label={
                      <div className="rfp_input">
                        <div>
                          <p
                            className="commodity_input_tag"
                            style={{ fontSize: "14px", color: "#1a3353" }}
                          >
                            Created/<br></br> Updated Status
                          </p>
                        </div>
                        <div className="colon_with_adjustment">:</div>
                      </div>
                    }
                    colon={false}
                  >
                    <Select onChange={onGenderChange} allowClear>
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="daterange" label="Date Range">
                    <Space direction="vertical">
                      <RangePicker size="large" />
                    </Space>
                  </Form.Item>
                  <Form.Item name="typeOfSetAside" label="Set Aside">
                    <Input className="input_org_tier" />
                    {/* <Select
                      onChange={onGenderChange}
                      allowClear
                    >
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select> */}
                  </Form.Item>
                  <Form.Item
                    name="evaluationcriteria"
                    label={
                      <div className="rfp_input">
                        <div>
                          <p className="commodity_input_tag">
                            Evaluation<br></br>Criteria
                          </p>
                        </div>
                        <div className="colon_with_adjustment">:</div>
                      </div>
                    }
                    colon={false}
                  >
                    <Select onChange={onGenderChange} allowClear>
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="placeofperformance"
                    // label="Place of Performance"
                    label={
                      <div className="rfp_input">
                        <div>
                          <p className="commodity_input_tag">
                            Place of<br></br> Performance
                          </p>
                        </div>
                        <div className="colon_with_adjustment">:</div>
                      </div>
                    }
                    colon={false}
                  >
                    <Select onChange={onGenderChange} allowClear>
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>
                  <div className="live_opportunites_heading_button13">
                    <div className="clear_search_button_before">
                      <Button
                        onClick={onCancle}
                        className="clear_search_button"
                      >
                        Clear Search
                      </Button>
                    </div>
                    <div>
                      <Button className="clear_search_button">
                        Save Search
                      </Button>
                    </div>
                    <div>
                      <Button className="clear_search_button" htmlType="submit">
                        Run Search
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Form>
          </Panel>
        </Collapse>
      </Card>
      <Card>
        <Row className="live_opportunities_pagination_row">
          {/* <Col sm={7} xs={24}> */}
          {/* <Col sm={5} xs={24} className='live_opportunities_pagination'> */}
          <Col sm={10} xs={24} lg={6} className="live_opportunities_pagination">
            <Pagination defaultCurrent={1} total={50} />
          </Col>
          {/* <Col span={1.5}> */}
          <Col sm={7} xs={24} lg={2} className="live_opportunities_number">
            {/* className="ml-1 mt-1" */}
            <p>1 - 100 Of 12550899</p>
          </Col>
          {/* <Col span={1.5}> */}
          <Col sm={7} xs={24} lg={2}>
            <Form.Item name="placeofperformance">
              <Select
                // style={{ width: '126%' }}
                className="input_box_with_value_100"
                onChange={onGenderChange}
                allowClear
                defaultValue="100"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={10} xs={24} lg={2} className="items_per_classk">
            {/* className='ml-5 mt-2' */}
            Items per...
          </Col>
          <Col sm={12} xs={1.5} lg={4} className="matchedtext_classk">
            {/* Col span={3.5} */}
            {/* className='ml-5' */}
            <Form.Item name="matchedtext" label="Matched Text">
              <Select onChange={onGenderChange} allowClear defaultValue="show">
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          {/* Col span={4.5} */}
          <Col sm={11} xs={1.5} lg={4} className="ml-3">
            <Form.Item name="sortby" label="Sort By">
              <Select
                onChange={onGenderChange}
                allowClear
                defaultValue="Relevance"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={12} xs={1.5} lg={4} className="view_input_box_with">
            {/* Col span={4} */}
            {/* ml-3 */}
            <Form.Item name="view" label="View">
              <Select
                className="view_input_box_with_input"
                onChange={onGenderChange}
                allowClear
                defaultValue="Show"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Card>
      <div className="liveopportunities_third_card">
        <Card className="mr-4">
          <div style={{ borderBottom: "1px solid #DEE2FF", width: "100%" }}>
            <h5 className="liveopportunities_implement_heading">
              Implement all Search & Filter requirements here
            </h5>
          </div>
          <div className="mt-3">
            <Form.Item name="orgtier1">
              <div className="liveopportunities_display_flex">
                <div>
                  <Input
                    placeholder="Search here"
                    className="liveopportunities_input_box"
                    suffix={suffix}
                  />
                </div>
                {/* <div className='liveopportunities_input_icon sds' >< ControlFilled />
                    </div> */}
              </div>
            </Form.Item>
          </div>
          <SideCard />
        </Card>
        <div className="liveopportunities_third_card2">
          <Card>
            <Row className="asdad">
              <Col sm={24} xs={24} className="yodadsasdasdsa">
                {singledata.map((index, data) =>
                  data >= minIndex &&
                  data < maxIndex &&
                  (
                    <div key={index._id}>
                      <Layout className="yodadssa mt-3">
                        <Header className="liveopportunities_third_card_heading">
                          <p>{index.title}</p>
                        </Header>
                      </Layout>
                      <div className="live_mobile_table">
                        <table className="live_opportunities_table mt-5">
                          <tr>
                            <th>Oppotunities Status</th>
                            <th>Solicitaterterterterterte5rteion Number</th>
                            <th>Publish Date</th>
                            <th>Due Date</th>
                            <th>Facility Clearance</th>
                            <th>Place of Performance</th>
                          </tr>

                          <tr>
                            <td>{index.archiveType}</td>
                            <td>{index.solicitationNumber}</td>
                            <td>{index.archiveDate}</td>
                            <td>{index.postedDate}</td>
                            <td></td>
                            <td>
                              {index.placeOfPerformance &&
                                index.placeOfPerformance.country &&
                                index.placeOfPerformance.country.name
                                ? index.placeOfPerformance.country.name
                                : ""}
                            </td>
                          </tr>
                        </table>
                      </div>
                      <div className="description_paragraph">
                        <div style={{ width: "80%" }}>
                          <Row>
                            <Col sm={20} xs={20} lg={20} md={20} className="mt-2">
                              <h5 className="mt-2">Description</h5>
                              <p>{index.description}</p>
                            </Col>
                            <Col sm={4} xs={4} lg={4} md={4}>
                              <div className="live_opportunites_heading_button_para">
                                <div>
                                  <Button
                                    className="clear_search_button"
                                    style={{ width: "160px" }}
                                    onClick={() => addPipeline(index)}
                                  >
                                    Add to pipeline
                                  </Button>
                                </div>
                                <div>
                                  <Button className="clear_search_button">
                                    Email Opportunitity
                                  </Button>
                                </div>
                                {/* <div><Button className='clear_search_button' style={{ width: '160px' }}
                            onClick={handleMoreDetails} data={singledata}>More Details</Button>
                          </div> */}
                                <Link
                                  to={{
                                    pathname: `/app/TabsOfLiveOpportunities`,
                                    state: index,
                                  }}
                                  className="ml-3 more-details-btn"
                                >
                                  More Details
                                </Link>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={12} xs={12} lg={12} md={12}>
                              <div>
                                <span className="d-flex">
                                  <h5 className="mr-2">Department : </h5>
                                  <p>{index.department}</p>
                                </span>
                                <span className="d-flex">
                                  <h5 className="mr-2">Sub-Tier:  </h5>
                                  <p>{index.subTier}</p>
                                </span>
                                <span className="d-flex">
                                  <h5 className="mr-2">Office:  </h5>
                                  <p>{index.office}</p>
                                </span>
                              </div>
                            </Col>
                            <Col sm={12} xs={12} lg={12} md={12}>
                              <div>
                                <span className="d-flex">
                                  <h5 className="mr-2">Set-Aside:  </h5>
                                  <p>{index.typeOfSetAside}</p>
                                </span>
                                <span className="d-flex">
                                  <h5 className="mr-2">NAICS Code : </h5>
                                  <p>{index.naicsCode}</p>
                                </span>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  ))}

              </Col>
            </Row>
            <div className="wechat_sticky_icon" onClick={handleChat}>
              <WechatOutlined />
            </div>
            <Pagination
              pageSize={pageSize}
              current={current}
              total={totalPage}
              onChange={handleChange}
            />
          </Card>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ liveopportunity }) => {
  const { liveOppotunityData, error, loading } = liveopportunity;
  return { liveOppotunityData, error, loading };
};

const mapDispatchToProps = {
  liveOpportunity,
  addtoPipeline,
};
export default connect(mapStateToProps, mapDispatchToProps)(AnalyticDashboard);
