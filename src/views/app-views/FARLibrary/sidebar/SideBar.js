import React from "react";
import { Card } from 'antd';


 const SideBar = () =>{

    const number = [1, 2, 3, 4, 5]
    const number1 = [6, 7, 8, 9, 10]
    const number2 = [11, 12, 13, 14, 15]
    const number3 = [16, 17, 18, 19, 20]
    const number4 = [21, 22, 23, 24, 25]
    const number5 = [26, 27, 28, 29, 30]
    const number6 = [31, 32, 33, 34, 35]

    return(
        <React.Fragment>
            <Card>
                        <div className='far-part'>
                            <h5 className='p-2 text-light'>Far Part</h5>
                        </div>
                        <div>
                            <ul className='list-group list-style-none'>
                                <li className='list-group-item'>Index</li>
                                <li className='list-group-item'>List of Sections Affected</li>
                                <li className='list-group-item'>DOD Deviations</li>
                                <li className='list-group-item'>CAAC Deviations</li>
                            </ul>
                            <ul className="far-list-style">
                                {
                                    number.map((i, index) => {
                                        return <li key={index}>{i}</li>
                                    })
                                }
                            </ul>
                            <ul className="far-list-style">
                                {
                                    number1.map((i, index) => {
                                        return <li key={index}>{i}</li>
                                    })
                                }
                            </ul>
                            <ul className="far-list-style">
                                {
                                    number2.map((i, index) => {
                                        return <li key={index}>{i}</li>
                                    })
                                }
                            </ul>
                            <ul className="far-list-style">
                                {
                                    number3.map((i, index) => {
                                        return <li key={index}>{i}</li>
                                    })
                                }
                            </ul>
                            <ul className="far-list-style">
                                {
                                    number4.map((i, index) => {
                                        return <li key={index}>{i}</li>
                                    })
                                }
                            </ul>
                            <ul className="far-list-style">
                                {
                                    number5.map((i, index) => {
                                        return <li key={index}>{i}</li>
                                    })
                                }
                            </ul>
                            <ul className="far-list-style">
                                {
                                    number6.map((i, index) => {
                                        return <li key={index}>{i}</li>
                                    })
                                }
                            </ul>

                        </div>
                    </Card>
        </React.Fragment>
    )
 };

 export default SideBar;