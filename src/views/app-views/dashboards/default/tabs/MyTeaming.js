import React from 'react';
import { Table } from 'antd';


const MyTeaming = (props) =>{

  const teamingalerts = props.data;

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

  const data = teamingalerts.map((item, i) => {
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

export default MyTeaming;