import React from 'react';
import { Table } from 'antd';


const TopAgency = (props) => {


  const topagencyspend = props.data;
     const results = topagencyspend.results;
// console.log('topagencyspend', results);

  const columns = [
    {
      title: 'Agency Name',
      dataIndex: 'agencyname',
    },
    {
      title: '$ Value',
      dataIndex: 'value',
    },
  ];

  const data = results && results.map((item, i) => {
    return {
      keys: item.id,
      agencyname: item.name,
      value: item.amount,
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


export default TopAgency;