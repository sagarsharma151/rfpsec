import React from 'react';
import { Table } from 'antd';


const AllAlerts = (props) => {


  const dashboardData = props.data;

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

  const data = dashboardData.length >0 && dashboardData.map((item, i) => {
    return {
      keys: item.id,
      alert: item.title,
      date: item.date,
    }
  });

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
      />
    </>
  )
};


export default AllAlerts;