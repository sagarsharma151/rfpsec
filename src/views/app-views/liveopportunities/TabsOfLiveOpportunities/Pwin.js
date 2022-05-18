import React, { useState } from 'react';
import { Button, Row, Col, Card, Table, Tooltip } from 'antd';
import { CloseCircleOutlined, PicLeftOutlined } from '@ant-design/icons';


const PWIN = () => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
        console.log("color....", isActive)
    };

    const text = <span className='bg-white text-dark'><PicLeftOutlined className='pr-2' />&nbsp;Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do
        amet sint.</span>;

    const columns = [
        {
            title: '',
            dataIndex: 'name',
        },
        {
            title: 'Date Generated',
            dataIndex: 'dategenerate',
        },
        {
            title: 'Pwin Score',
            dataIndex: 'pwinscore',
        },
        {
            title: 'Competition E..',
            dataIndex: 'competition',
        },
        {
            title: 'Customer Desi..',
            dataIndex: 'customerdesi',
        },
        {
            title: 'Customer Rela..',
            dataIndex: 'customerrela',
        },
        {
            title: 'Management..',
            dataIndex: 'management',
        },
        {
            title: 'Positioning',
            dataIndex: 'positioning',
        },
        {
            title: 'Price To Win',
            dataIndex: 'pricetowin',
        },
        {
            title: 'Technical Capa.',
            dataIndex: 'technicalcapa',
        },
        {
            title: '',
            dataIndex: 'crossicon',
        },
    ];

    const data = [
        {
            key: '1',
            name: <>
                <Tooltip placement="bottom" title={text} className='tooltip-button'>
                    <Tooltip placement="bottom" title={text} className='tooltip-button'>
                        <Button className='text-info'>Improve PWIN</Button>
                    </Tooltip>
                </Tooltip>
            </>,
            dategenerate: 'Mon, Jul 30, 2021, 11:39 PM',
            pwinscore: '89%',
            competition: <><Button className='highactive'>Medium</Button></>,
            customerdesi: <><Button className={isActive ? 'highactive' : null}
                onClick={toggleClass} >High</Button></>,
            customerrela: <><Button className='highactive'>High</Button></>,
            management: <><Button className='highactive'>High</Button></>,
            positioning: <><Button className='highactive'>Medium</Button></>,
            pricetowin: <><Button className='highactive'>Medium</Button></>,
            technicalcapa: <><Button className='highactive'>High</Button></>,
            crossicon: <><CloseCircleOutlined /></>,
        },
        {
            key: '2',
            name: <> <Tooltip placement="bottom" title={text} className='tooltip-button'>
                <Button className='text-info'>Improve PWIN</Button>
            </Tooltip></>,
            dategenerate: 'Mon, Jul 30, 2021, 11:39 PM',
            pwinscore: '89%',
            competition: <><Button className={isActive ? 'highactivesecond' : null}
                onClick={toggleClass}>Medium</Button></>,
            customerdesi: <><Button className='highactivesecond'>High</Button></>,
            customerrela: <><Button className='highactivesecond'>High</Button></>,
            management: <><Button className='highactivesecond'>High</Button></>,
            positioning: <><Button className='highactivesecond'>Medium</Button></>,
            pricetowin: <><Button className='highactivesecond'>Medium</Button></>,
            technicalcapa: <><Button className='highactivesecond'>High</Button></>,
            crossicon: <><CloseCircleOutlined /></>,
        },
        {
            key: '3',
            name: <> <Tooltip placement="bottom" title={text} className='tooltip-button'>
                <Button className='text-info'>Improve PWIN</Button>
            </Tooltip></>,
            dategenerate: 'Mon, Jul 30, 2021, 11:39 PM',
            pwinscore: '89%',
            competition: <><Button className='highactivethird'>Medium</Button></>,
            customerdesi: <><Button className='highactivethird'>High</Button></>,
            customerrela: <><Button className='highactivethird'>High</Button></>,
            management: <><Button className='highactivethird'>High</Button></>,
            positioning: <><Button className='highactivethird'>Medium</Button></>,
            pricetowin: <><Button className='highactivethird'>Medium</Button></>,
            technicalcapa: <><Button className='highactivethird'>High</Button></>,
            crossicon: <><CloseCircleOutlined /></>,
        },
        {
            key: '4',
            name: <> <Tooltip placement="bottom" title={text} className='tooltip-button'>
                <Button className='text-info'>Improve PWIN</Button>
            </Tooltip></>,
            dategenerate: 'Mon, Jul 30, 2021, 11:39 PM',
            pwinscore: '89%',
            competition: <><Button className='highactivesecond'>Medium</Button></>,
            customerdesi: <><Button className='highactivesecond'>High</Button></>,
            customerrela: <><Button className='highactivesecond'>High</Button></>,
            management: <><Button className='highactivesecond'>High</Button></>,
            positioning: <><Button className='highactivesecond'>Medium</Button></>,
            pricetowin: <><Button className='highactivesecond'>Medium</Button></>,
            technicalcapa: <><Button className='highactivesecond'>High</Button></>,
            crossicon: <><CloseCircleOutlined /></>,
        },
        {
            key: '5',
            name: <> <Tooltip placement="bottom" title={text} className='tooltip-button'>
                <Button className='text-info'>Improve PWIN</Button>
            </Tooltip></>,
            dategenerate: 'Mon, Jul 30, 2021, 11:39 PM',
            pwinscore: '89%',
            competition: <><Button className='highactivesecond'>Medium</Button></>,
            customerdesi: <><Button className='highactivesecond'>High</Button></>,
            customerrela: <><Button className='highactivesecond'>High</Button></>,
            management: <><Button className='highactivesecond'>High</Button></>,
            positioning: <><Button className='highactivesecond'>Medium</Button></>,
            pricetowin: <><Button className='highactivesecond'>Medium</Button></>,
            technicalcapa: <><Button className='highactivesecond'>High</Button></>,
            crossicon: <><CloseCircleOutlined /></>,
        },
        {
            key: '6',
            name: <> <Tooltip placement="bottom" title={text} className='tooltip-button'>
                <Button className='text-info'>Improve PWIN</Button>
            </Tooltip></>,
            dategenerate: 'Mon, Jul 30, 2021, 11:39 PM',
            pwinscore: '89%',
            competition: <><Button className='highactivesecond'>Medium</Button></>,
            customerdesi: <><Button className='highactivesecond'>High</Button></>,
            customerrela: <><Button className='highactivesecond'>High</Button></>,
            management: <><Button className='highactivesecond'>High</Button></>,
            positioning: <><Button className='highactivesecond'>Medium</Button></>,
            pricetowin: <><Button className='highactivesecond'>Medium</Button></>,
            technicalcapa: <><Button className='highactivesecond'>High</Button></>,
            crossicon: <><CloseCircleOutlined /></>,
        },
        {
            key: '7',
            name: <> <Tooltip placement="bottom" title={text} className='tooltip-button'>
                <Button className='text-info'>Improve PWIN</Button>
            </Tooltip></>,
            dategenerate: 'Mon, Jul 30, 2021, 11:39 PM',
            pwinscore: '89%',
            competition: <><Button className='highactivethird'>Medium</Button></>,
            customerdesi: <><Button className='highactivethird'>High</Button></>,
            customerrela: <><Button className='highactivethird'>High</Button></>,
            management: <><Button className='highactivethird'>High</Button></>,
            positioning: <><Button className='highactivethird'>Medium</Button></>,
            pricetowin: <><Button className='highactivethird'>Medium</Button></>,
            technicalcapa: <><Button className='highactivethird'>High</Button></>,
            crossicon: <><CloseCircleOutlined /></>,
        },


    ];

    return (
        <React.Fragment>
            <Card>
                <Row gutter={[16, 16]}>
                    <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                        <Table columns={columns} dataSource={data} size="middle" />
                    </Col>
                </Row>
            </Card>
        </React.Fragment>
    );
}
export default PWIN;