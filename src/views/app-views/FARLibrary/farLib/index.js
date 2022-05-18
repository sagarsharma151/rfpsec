import React from "react";
// import { useHistory } from 'react-router';
import { Row, Col, Card, Input, Button, Table } from 'antd';
import {
    ControlOutlined, FilePdfOutlined, FileWordOutlined, DiffOutlined, CustomerServiceOutlined, Html5Outlined,
    FileExcelOutlined, PrinterOutlined, IdcardOutlined
} from '@ant-design/icons';
import "../farlibrary.css"; import SideBar from "../sidebar/SideBar";
import { Link } from "react-router-dom";
;

const { Search } = Input;

const FarLibraryPage = () => {

    const onSearch = value => console.log(value);

    const suffix = (
        <ControlOutlined
            style={{
                fontSize: 16,
                color: '#1F4173',
            }}
        />
    )

    const columns = [
        {
            title: 'FAC Number',
            dataIndex: 'facname',
        },
        {
            title: 'Effective Date',
            dataIndex: 'effectivedate',
        },
        {
            title: 'HTML',
            dataIndex: 'html',
        },
        {
            title: 'XML',
            dataIndex: 'xml',
        },
        {
            title: 'PDF',
            dataIndex: 'pdf',
        },
        {
            title: 'Word',
            dataIndex: 'word',
        },
        {
            title: 'EPub',
            dataIndex: 'epub',
        },
        {
            title: 'ITunes',
            dataIndex: 'itunes',
        },
        {
            title: 'Kindle',
            dataIndex: 'kindle',
        },
    ];

    const data = [
        {
            facname: '2021-07',
            effectivedate: '09-10-2021',
            html: <></>,
            xml: <></>,
            pdf: <><a href="/img/HRA Group Report.pdf" download=".pdf"> <FilePdfOutlined style={{ color: '#1565C0' }} /></a></>,
            word: <><a href="/img/HRA Group Report.pdf" download=".docx"><FileWordOutlined style={{ color: '#007934' }} /></a></>,
            epub: <><a href="/img/HRA Group Report.pdf" download=""><DiffOutlined style={{ color: '#B87FD9' }} /></a></>,
            itunes: <><a href="/img/HRA Group Report.pdf" download=".mp3"><CustomerServiceOutlined style={{ color: '#1565C0' }} /></a></>,
            kindle: <><IdcardOutlined style={{ color: "" }} /></>,
        },


    ];

    const columnssec = [
        {
            title: 'Parts/Subparts',
            dataIndex: 'partssub',
        },
        {
            title: 'HTML',
            dataIndex: 'html',
        },
        {
            title: 'XML',
            dataIndex: 'xml',
        },
        {
            title: 'Print',
            dataIndex: 'print',
        },
    ];

    const datasec = [
        {
            partssub: 'Part 1 - Federal Acquisition Regulations System',
            html: <><a href="/img/HRA Group Report.pdf" download><Html5Outlined /></a></>,
            xml: <><a href="/img/HRA Group Report.pdf" download><FileExcelOutlined /></a></>,
            print: <><a href="/img/HRA Group Report.pdf" download><PrinterOutlined /></a></>,
        },
        {
            partssub: <div className="pl-5 text-info">
                <Link 
                to ={{pathname: '/app/library/farLibraryLink',
                state: 'Subpart 1.1 - Purpose, Authority, Issuance'}}
                 className="text-info">Subpart 1.1 - Purpose, Authority, Issuance</Link>
            </div>,
            html: <><a href="/img/HRA Group Report.pdf" download><Html5Outlined /></a></>,
            xml: <><a href="/img/HRA Group Report.pdf" download><FileExcelOutlined /></a></>,
            print: <><a href="/img/HRA Group Report.pdf" download><PrinterOutlined /></a></>,
        },
        {
            partssub: <div className="pl-5">
                <Link to ={{pathname: '/app/library/farLibraryLink',
                state: 'Subpart 1.2 - Administration'}} className="text-info">Subpart 1.2 - Administration</Link>
            </div>,
            html: <><a href="/img/HRA Group Report.pdf" download><Html5Outlined /></a></>,
            xml: <><a href="/img/HRA Group Report.pdf" download><FileExcelOutlined /></a></>,
            print: <><a href="/img/HRA Group Report.pdf" download><PrinterOutlined /></a></>,
        },
        {
            partssub: <div className="pl-5">
                <Link to ={{pathname: '/app/library/farLibraryLink',
                state: 'Subpart 1.3 - Agency Acquisition Regulations'}} className="text-info">Subpart 1.3 - Agency Acquisition Regulations</Link>
            </div>,
            html: <><a href="/img/HRA Group Report.pdf" download><Html5Outlined /></a></>,
            xml: <><a href="/img/HRA Group Report.pdf" download><FileExcelOutlined /></a></>,
            print: <><a href="/img/HRA Group Report.pdf" download><PrinterOutlined /></a></>,
        },
        {
            partssub: <div className="pl-5">
                <Link to ={{pathname: '/app/library/farLibraryLink',
                state: 'Subpart 1.4 - Deviations from the FAR'}} className="text-info">Subpart 1.4 - Deviations from the FAR</Link>
            </div>,
            html: <><a href="/img/HRA Group Report.pdf" download><Html5Outlined /></a></>,
            xml: <><a href="/img/HRA Group Report.pdf" download><FileExcelOutlined /></a></>,
            print: <><a href="/img/HRA Group Report.pdf" download><PrinterOutlined /></a></>,
        },
        {
            partssub: <div className="pl-5">
                <Link to ={{pathname: '/app/library/farLibraryLink',
                state: 'Subpart 1.5 - Agency and Public Participation'}} className="text-info">Subpart 1.5 - Agency and Public Participation</Link>
            </div>,
            html: <><a href="/img/HRA Group Report.pdf" download><Html5Outlined /></a></>,
            xml: <><a href="/img/HRA Group Report.pdf" download><FileExcelOutlined /></a></>,
            print: <><a href="/img/HRA Group Report.pdf" download><PrinterOutlined /></a></>,
        },

    ];

    // const goToPage = (item) => {
    //     history.push('/app/library/farLibraryLink', item);

    // }
    return (
        <React.Fragment>
            <Row gutter={[16, 16]}>
                <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                    <h2>FAR Library</h2>
                </Col>
                <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                    <div style={{ textAlign: 'right', marginBottom: 15 }}>
                        <Search placeholder="Search" suffix={suffix} onSearch={onSearch} style={{ width: 300 }} className="search-input-color mr-4 mb-2" />
                        <Button className='open-background'>Save Search | Export</Button>
                    </div>
                </Col>
            </Row>
            <hr></hr>
            <Row gutter={[16, 16]} className='mt-4'>
                <Col sm={24} xs={24} md={10} lg={6} xl={6}>
                    <SideBar />
                </Col>
                <Col sm={24} xs={24} md={14} lg={18} xl={18}>
                    <Card>
                        <div className="mb-5">
                            <h4>Full FAR Download in Various Formats</h4>
                        </div>
                        <Table columns={columns} dataSource={data} className="table-striped-rows" size="middle" />
                        <div className="mt-5">
                            <h4>Browse FAR Part/Subpart and Download in Various Formats</h4>
                        </div>
                        <Table columns={columnssec} dataSource={datasec} className="table-striped-rows" size="middle" />
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default FarLibraryPage;