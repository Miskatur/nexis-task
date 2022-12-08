import React, { useEffect, useState } from 'react';
import DatabaseInfo from './DatabaseInfo/DatabaseInfo';

const Attendence = () => {
    const [datas, setdatas] = useState({})
    useEffect(() => {
        fetch(`https://test.nexisltd.com/test `, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setdatas(data)
            })
    }, [])
    const finalData = Object.values(datas)
    return (
        <section className="w-full lg:w-10/12 mx-auto px-4 lg:px-0 mb-10 lg:mb-0">
            <div className='flex justify-center items-center mb-10'>
                <h3 className='bg-primary text-center inline-block text-2xl py-4 px-7 rounded text-white font-semibold leading-10'>Attendance information</h3>
            </div>

            <table className="min-w-full leading-normal w-10/12 mx-auto">
                <thead>
                    <tr>
                        <th
                            className="px-5 py-3 border-b-2 text-left text-black font-semibold uppercase border-gray-200 bg-gray-100 tracking-wider"
                        >
                            Date
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 text-left text-black font-semibold uppercase border-gray-200 bg-gray-100 tracking-wider"
                        >
                            Employee Name
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 text-left text-black font-semibold uppercase border-gray-200 bg-gray-100 tracking-wider"
                        >
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        finalData?.map((data, i) => <DatabaseInfo
                            key={i}
                            data={data}
                        ></DatabaseInfo>)
                    }
                </tbody>
            </table>
        </section>
    );
};

export default Attendence;