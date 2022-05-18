import React from 'react';
import { Table } from 'antd';



const MyAgency = (props) => {

  const myAgencyData = props.data;

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

  const data = myAgencyData.map((item, i) => {
    return {
      keys: item.id,
      alert: item.agencyList.agency_name,
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


export default MyAgency;