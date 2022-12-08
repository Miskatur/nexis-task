import React from 'react';

const DatabaseInfo = ({ data, i }) => {
    const { name, attendance } = data;
    const date = Object.keys(attendance)[6];
    const status = Object.values(attendance)[6].status;
    return (
        <tr className='text-black border-gray-200 bg-white'>

            <td className="px-5 py-5 border-b  text-sm">
                {date}
            </td>
            <td className="px-5 py-5 border-b  text-sm">
                {name}
            </td>
            <td className="px-5 py-5 border-b  text-sm capitalize">
                {status}
            </td>
        </tr>
    );
};

export default DatabaseInfo;