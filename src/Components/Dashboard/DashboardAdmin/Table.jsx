import React, { useState } from 'react'

const Table = () => {

    const usersData = [
        { name: 'Full Name', role: 'Role', permissions: ['Read'] },
        { name: 'Full Name', role: 'Role', permissions: ['Read', 'Write'] },
        { name: 'Full Name', role: 'Role', permissions: ['Read', 'Write', 'Admin'] },
        { name: 'Full Name', role: 'Role', permissions: ['Read', 'Write'] },
        { name: 'Full Name', role: 'Role', permissions: ['Read', 'Write'] },
    ];
    const [users, setUsers] = useState(usersData);

    const allPermissions = ['Read', 'Write', 'Admin'];


    const togglePermission = (userIndex, permission) => {
        const updatedUsers = [...users];
        const hasPermission = updatedUsers[userIndex].permissions.includes(permission);

        if (hasPermission) {
            updatedUsers[userIndex].permissions = updatedUsers[userIndex].permissions.filter(p => p !== permission);
        } else {
            updatedUsers[userIndex].permissions.push(permission);
        }

        setUsers(updatedUsers);
    };


    return (
        <section className='flex flex-col gap-[24px]'>

            {/* Search Filters Section */}
            <div className='flex flex-wrap 2xl:flex-nowrap gap-[24px] xl:gap-x-[40px] items-end'>

                {/* Full Name Input */}
                <div className='grid grid-cols-1 gap-[4px] w-full  2xl:w-[516px]'>
                    <label className='text-[14px] font-bold'>Full Name</label>
                    <input
                        type='text'
                        className='w-full h-[36px] border border-[#0000001A] rounded-[6px] px-[12px]'
                        placeholder='Enter full name'
                    />
                </div>

                {/* Filter Buttons */}
                <div className='grid grid-cols-1 gap-[4px] w-full lg:w-[276px] xl:w-[297px]'>
                    <label className='text-[14px] font-bold'>Filter</label>
                    <div className='flex  gap-[8px]'>
                        <div className='px-[14px] h-[36px] min-w-[132px] text-[12px]  flex justify-center items-center rounded-[6px] cursor-pointer bg-black text-white font-bold'>
                            Estate Consultant
                        </div>
                        <div className='px-[14px] h-[36px] text-[14px] w-fit flex justify-center items-center rounded-[6px] cursor-pointer bg-[#0000000D]'>
                            Developer
                        </div>
                        <div className='px-[14px] h-[36px] text-[14px] w-fit flex justify-center items-center rounded-[6px] cursor-pointer bg-[#0000000D]'>
                            QA
                        </div>
                    </div>
                </div>

                {/* Search Button */}
                <div className='w-full lg:w-[38%] 2xl:w-[238px] h-[48px] bg-[#D3D3D3] rounded-[8px] text-[16px] font-bold flex justify-center items-center cursor-pointer'>
                    Search
                </div>
            </div>


            {/* Users Table */}
            <div className='px-[24px] py-[20px] border rounded-[6px]'>
                <table className='w-full border border-[#eee] rounded-[8px] overflow-hidden'>
                    <thead>
                        <tr className='bg-white text-left border-b text-[#000] font-bold text-[14px]'>
                            <th className='py-3 px-4 w-[250px] lg:w-[400px] border-r border-dashed border-[#ccc]'>User Name</th>
                            <th className='py-3 px-4 border-r border-dashed border-[#ccc]'>Role</th>
                            <th className='py-3 px-4'>Permissions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => (
                            <tr key={idx}>
                                <td className='py-3 px-4 border-r border-dashed border-[#ccc]'>{user.name}</td>
                                <td className='py-3 px-4 border-r border-dashed border-[#ccc]'>{user.role}</td>
                                <td className='py-3 px-4'>
                                    <div className='flex gap-2'>
                                        {allPermissions.map((perm) => (
                                            <button
                                                key={perm}
                                                onClick={() => togglePermission(idx, perm)}
                                                className={`px-3 py-[6px] text-[12px] rounded-[4px] font-medium
                                            ${user.permissions.includes(perm)
                                                        ? 'bg-black text-white'
                                                        : 'bg-[#eee] text-black'}`}
                                            >
                                                {perm}
                                            </button>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Button Update Data */}
            <div className='flex justify-between items-center'>
                <div />
                <div className='bg-black text-white text-[16px] font-bold w-[238px] h-[48px] rounded-[8px] flex justify-center items-center cursor-pointer '>
                    Update Data
                </div>
            </div>
        </section>
    )
}

export default Table