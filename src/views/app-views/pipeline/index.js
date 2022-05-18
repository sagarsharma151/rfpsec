import React from "react";
import { Row, Col, Input } from 'antd';
import PipelineTable from './PipelineTable';

const { Search } = Input;

const Pipeline = ({ ...props }) => {
  console.log('props', props)

    const onSearch = value => console.log(value);
    
    return(
        <>
        <React.Fragment>
        <div>
          <Row>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <h2 className="mt-3">Pipeline</h2>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <div style={{ textAlign: 'right', marginBottom: 15 }}>
                <Search placeholder="Search" onSearch={onSearch} style={{ width: 300 }} />
              </div>
            </Col>
          </Row>
       <PipelineTable />
       </div>
       </React.Fragment>
        </>
    )
};

export default Pipeline;