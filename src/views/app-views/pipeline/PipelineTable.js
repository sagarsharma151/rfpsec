import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table, Modal } from 'antd';
import { connect, useDispatch } from 'react-redux';
import './pipeline.css';
import { pipelineDelete, pipelineRequest } from 'redux/actions/Pipeline';
import { CloseCircleOutlined } from '@ant-design/icons';
import { getProfile } from 'redux/actions/Auth';
const { confirm } = Modal;



const PipelineTable = (props) => {
  console.log('props', props);

  const [pipelinelist, setPipelinelist] = useState([]);

  const token = localStorage.getItem('auth_token')
  console.log(token);


  const pipelineList = props.pipelineData;

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(pipelineRequest());
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(getProfile(token));
  //   // eslint-disable-next-line
  // }, [token])


  useEffect(() => {
    if (pipelineList !== '' && pipelineList !== undefined && pipelineList !== null) {
      setPipelinelist(pipelineList);
    }
  }, [pipelineList])

  const handleDelete = (pipelinelist) =>{
    confirm({
      title: 'Are you sure delete this items?',
      icon: <CloseCircleOutlined className='text-danger' />,
      onOk(){
        const idRequest ={
          deleteid: pipelinelist._id
        }
        props.pipelineDelete(idRequest);
      },
      onCancel() {
      },
     
    });
    
  }


  const columns = [
    {
      title: 'Opportunity Name',
      dataIndex: 'opportunityname',
    },
    {
      title: 'Opportunity Type',
      dataIndex: 'opportunitytype',
    },
    {
      title: 'Due Date',
      dataIndex: 'duedate',
    },
    {
      title: 'Capture Manager',
      dataIndex: 'capturemanager',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  
  const data = pipelinelist.map((item, i) => {
    return {
        keys: item._id,
        opportunityname: item.title,
        opportunitytype: item.type,
        duedate: item.responseDeadLine,
        capturemanager: item.classificationCode,
        status: item.active,
        action: <Row gutter={[8, 8]} className='d-block'>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <Button className="view-button">View</Button>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <Button className="delete-button" onClick={()=>handleDelete(item)}>Delete</Button>
      </Col>
    </Row>,
    }  
  });


  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Table
            columns={columns}
            dataSource={data}
          />
        </Col>
      </Row>
    </>
  )
};

const mapStateToProps = ({ pipeline }) => {
  const { pipelineData, error, loading, profile } = pipeline;
  return { pipelineData, error, loading, profile }
}

const mapDispatchToProps = {
  pipelineRequest,
  pipelineDelete,
  getProfile,
}
export default connect(mapStateToProps, mapDispatchToProps)(PipelineTable)