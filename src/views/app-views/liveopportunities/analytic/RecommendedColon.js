import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Select, Pagination, Button, Form, Layout, Input } from 'antd';
import { ControlFilled, WechatOutlined } from '@ant-design/icons';
// import { List, Typography } from 'antd';
import { useHistory } from 'react-router';
import './LiveOpportunities.css';
import SideCard from '../../dashboards/analytic/SideCard';
import { connect, useDispatch } from "react-redux";
import { liveOpportunity } from 'redux/actions/LiveOpportunity';
import { Link } from "react-router-dom";

const { Option } = Select;

// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
const suffix = (
  <ControlFilled
    style={{
      fontSize: 16,
      color: "#1F4173",
    }}
  />
);
export const RecommendedColon = (props) => {
  console.log('props....', props);

  const [recommendsingledata, setRecommendsingledata] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(liveOpportunity());
  }, [dispatch]);

  const recommentData =
    props.liveOppotunityData && props.liveOppotunityData.opportunityData;

  useEffect(() => {
    if (
      recommentData !== "" &&
      recommentData !== undefined &&
      recommentData !== null
    ) {
      setRecommendsingledata(recommentData);
    }
  }, [recommentData]);


  console.log('recommentData....', recommentData);
  const [form] = Form.useForm();
  // const [uniqueVisitorsData, setUniqueVisitorsData] = useState(uniqueVisitorsDataWeek)
  // const { direction } = useSelector(state => state.theme)
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      default:
        form.setFieldsValue({
          note: 'Hi there!',
        });
        return;
    }
  };
  const history = useHistory();

  // const handleMoreDetails = () => {
  //   history.push("/app/TabsOfLiveOpportunities")
  // }
  const handleChat = () => {
    history.push("/app/StickyChat")
  }

  const { Header } = Layout;


  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xxl={18}>
          <div className="live_opportunites_heading">
            <div className='mt-3'><h3>Recommended opportunities </h3></div>
          </div>
        </Col>
      </Row>


      <Card>
        <Row>
          <Col span={5}><Pagination defaultCurrent={1} total={50} />
          </Col>
          <Col span={3} className="ml-1 mt-1"><p>1 - 100 Of 12550899</p></Col>
          <Col span={1.5}> <Form.Item
            name="placeofperformance"
          >
            <Select
              style={{ width: '126%' }}
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
          <Col span={1.5} className='ml-5 mt-2'>Items per...</Col>
          <Col span={3.5} className='ml-5'> <Form.Item
            name="matchedtext"
            label="Matched Text"
          >
            <Select
              onChange={onGenderChange}
              allowClear
              defaultValue="show"
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          </Col>
          <Col span={4.5} className='ml-3'> <Form.Item
            name="sortby"
            label="Sort By"
          >
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
          <Col span={4} className='ml-3'>
            <Form.Item
              name="view"
              label="View"
            >
              <Select
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
          <Card >
            <Row className="asdad">
              <Col sm={24} xs={24} className="yodadsasdasdsa table-scroll">
                {
                  recommendsingledata.map((index) => (
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
                                  <h5 className="mr-2">Sub-Tier : </h5>
                                  <p>{index.subTier}</p>
                                </span>
                                <span className="d-flex">
                                  <h5 className="mr-2">Office : </h5>
                                  <p>{index.office}</p>
                                </span>
                              </div>
                            </Col>
                            <Col sm={12} xs={12} lg={12} md={12}>
                              <div>
                                <span className="d-flex">
                                  <h5 className="mr-2">Set-Aside : </h5>
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
          </Card>


          {/* <Card >
            <Row className="asdad">
              <Col span={24} className="yodadsasdasdsa">
                <Layout className="yodadssa">
                  <Header className="liveopportunities_third_card_heading"><p>National Science Laboratories Research chemical supply National Science Laboratories</p></Header>
                </Layout>
                <table style={{ width: "100%", marginTop: "30px" }} className="live_opportunities_table">
                  <tr>
                    <th>Oppotunities Status</th>
                    <th>Solicitation Number</th>
                    <th>Publish Date</th>
                    <th>Due Date</th>
                    <th>Facility Clearance</th>
                    <th>Place of Performance</th>
                  </tr>
                  <tr>
                    <td>Solicitation</td>
                    <td>N3458660192</td>
                    <td>1 Feb, 2021</td>
                    <td>10 Feb, 2021</td>
                    <td>Top-Secret</td>
                    <td>Greece</td>
                  </tr>
                </table>
                <div className="description_paragraph">
                  <div style={{ width: '80%' }}>
                    <h5 className="mt-2">Description</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....<a href="/"> Read More</a>
                    </p>
                    <div className="description_paragraph_list">
                      <div >
                        <List
                          dataSource={data}
                          renderItem={item => (
                            <List.Item>
                              <Typography.Text mark><span>Department : </span></Typography.Text> {item}
                            </List.Item>
                          )}
                        />
                        <List
                          dataSource={data1}
                          renderItem={item => (
                            <List.Item>
                              <Typography.Text mark><span>Sub-Tier : </span></Typography.Text> {item}
                            </List.Item>
                          )}
                        />
                        <List
                          dataSource={data2}
                          renderItem={item => (
                            <List.Item>
                              <Typography.Text mark><span>Office : </span></Typography.Text> {item}
                            </List.Item>
                          )}
                        />
                      </div>
                      <div className="ml-5">
                        <List
                          dataSource={data3}
                          renderItem={item => (
                            <List.Item>
                              <Typography.Text mark><span>Set-Aside : </span></Typography.Text> {item}
                            </List.Item>
                          )}
                        />
                        <List
                          dataSource={data4}
                          renderItem={item => (
                            <List.Item>
                              <Typography.Text mark><span>NAICS Code : </span></Typography.Text> {item}
                            </List.Item>
                          )}
                        />
                      </div>
                    </div>
                  </div>


                  <div className="live_opportunites_heading_button_para">
                    <div><Button className='clear_search_button' style={{ width: '160px' }}>Add to pipeline</Button></div>
                    <div><Button className='clear_search_button'>Email Opportunitity</Button></div>
                    <div><Button className='clear_search_button' style={{ width: '160px' }}
                      onClick={handleMoreDetails}>More Details</Button></div>


                  </div>
                </div>

              </Col>
            </Row>
          </Card>


          <Card>
            <Row>
              <Col span={24}>
                <Layout >
                  <Header className="liveopportunities_third_card_heading"><p>National Science Laboratories Research chemical supply National Science Laboratories</p></Header>
                </Layout>

                <table style={{ width: "100%", marginTop: "30px" }} className="live_opportunities_table">
                  <tr>
                    <th>Oppotunities Status</th>
                    <th>Solicitation Number</th>
                    <th>Publish Date</th>
                    <th>Due Date</th>
                    <th>Facility Clearance</th>
                    <th>Place of Performance</th>
                  </tr>
                  <tr>
                    <td>Solicitation</td>
                    <td>N3458660192</td>
                    <td>1 Feb, 2021</td>
                    <td>10 Feb, 2021</td>
                    <td>Top-Secret</td>
                    <td>Greece</td>
                  </tr>
                </table>
                <div className="description_paragraph">
                  <div style={{ width: '80%' }}>
                    <h5 className="mt-2">Description</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....<a href="/"> Read More</a>
                    </p>
                    <div className="description_paragraph_list">
                      <div >
                        <List
                          dataSource={data}
                          renderItem={item => (
                            <List.Item>
                              <Typography.Text mark><span>Department : </span></Typography.Text> {item}
                            </List.Item>
                          )}
                        />
                        <List
                          dataSource={data1}
                          renderItem={item => (
                            <List.Item>
                              <Typography.Text mark><span>Sub-Tier : </span></Typography.Text> {item}
                            </List.Item>
                          )}
                        />
                        <List
                          dataSource={data2}
                          renderItem={item => (
                            <List.Item>
                              <Typography.Text mark><span>Office : </span></Typography.Text> {item}
                            </List.Item>
                          )}
                        />
                      </div>
                      <div className="ml-5">
                        <List
                          dataSource={data3}
                          renderItem={item => (
                            <List.Item>
                              <Typography.Text mark><span>Set-Aside : </span></Typography.Text> {item}
                            </List.Item>
                          )}
                        />
                        <List
                          dataSource={data4}
                          renderItem={item => (
                            <List.Item>
                              <Typography.Text mark><span>NAICS Code : </span></Typography.Text> {item}
                            </List.Item>
                          )}
                        />
                      </div>
                    </div>
                  </div>


                  <div className="live_opportunites_heading_button_para">
                    <div><Button className='clear_search_button' style={{ width: '160px' }}>Add to pipeline</Button></div>
                    <div><Button className='clear_search_button'>Email Opportunitity</Button></div>
                    <div><Button className='clear_search_button' style={{ width: '160px' }} onClick={handleMoreDetails}>More Details</Button></div>
                     <div className='wechat_sticky_icon' onClick={handleChat} ><WechatOutlined /></div>

                  </div>
                </div>

              </Col>
            </Row>
          </Card> */}
           <div className='wechat_sticky_icon' onClick={handleChat} ><WechatOutlined /></div>
        </div>
      </div>



    </>
  )
}
const mapStateToProps = ({ liveopportunity }) => {
  const { liveOppotunityData, error, loading } = liveopportunity;
  return { liveOppotunityData, error, loading };
};

const mapDispatchToProps = {
  liveOpportunity,
};
export default connect(mapStateToProps, mapDispatchToProps)(RecommendedColon);
