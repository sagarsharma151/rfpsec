import React from 'react';
import { Select, Collapse, Form } from 'antd';
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const { Option } = Select;
const SideCard = () => {
  const [form] = Form.useForm();
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
  return (
    <>
      <Collapse defaultActiveKey={['1']} onChange={callback} expandIconPosition={'right'}>
        <Panel header="Federal Organizations" key="1" >
          <Form.Item
            name="orgtier1"

          >
            <Select
              placeholder="Enter Code or Name "
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        </Panel>
        <Panel header="Dates" key="2">
          <Form.Item
            name="orgtier1"
            label="Response/Date Offers Due"

          >
            <Select
              defaultValue="Anytime"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="Anytime">Anytime</Option>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="orgtier1"
            label="Updated Date"
          >
            <Select
              defaultValue="Anytime"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="Anytime">Anytime</Option>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        </Panel>
        <Panel header="Notice Type" key="3">
          <p>sdfsdfsd</p>
        </Panel>
        <Panel header="Product or Service..." key="4">
          <p>sdfsdfsd</p>
        </Panel>
        <Panel header="Set Aside" key="5">
          <p>sdfsdfsd</p>
        </Panel>
        <Panel header="Place of Perform..." key="6">
          <p>sdfsdfsd</p>
        </Panel>
        <Panel header="Contract Awardee" key="7">
          <p>sdfsdfsd</p>
        </Panel>
      </Collapse>
    </>
  );
}
export default SideCard;