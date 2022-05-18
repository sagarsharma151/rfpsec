import React from 'react';
import { Table } from 'antd';




const MyOpportunity = (props) =>{

const myOpportunityData = props.data;

const columns = [
  {
    title: 'Alert',
    dataIndex: 'alert',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
];

const data = myOpportunityData.map((item, i) => {
  return {
      keys: item.id,
      alert: item.title,
      date: item.date,
  }
});

    return(
    <>
    <Table
        columns={columns}
        dataSource={data}
      />
    </>
    )
};


export default MyOpportunity;