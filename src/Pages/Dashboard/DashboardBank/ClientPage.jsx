import React, { useEffect, useState } from 'react';
import HeaderSection from '../../../Components/Auth/HeaderSection';
import HeaderDashboard from '../../../Components/Dashboard/DashboardBank/HeaderDashboard';
import addClient from '../../../assets/IconDashboard/addClient.png';
import notification from '../../../assets/IconDashboard/notification.png';
import { Link } from 'react-router-dom';
import ClientsSummaryCard from '../../../Components/Dashboard/DashboardBank/ClientsSummaryCard';
import ScrollBarList from '../../../Components/Dashboard/DashboardBank/ScrollBarList';
import Status from '../../../Components/Dashboard/DashboardBank/Status';
import axios from 'axios';
import { baseUrl } from '../../../Api/Api';
import Cookies from 'universal-cookie';

const ClientPage = () => {
  const [clients, setClients] = useState([]);

  const cookis = new Cookies()
  const token = cookis.get('auth_token')

  const firstTitle = "Hello, Welcome Bank Employee";
  const titleSeconde = "Manage your properties efficiently.";

  useEffect(() => {
    axios.get(`${baseUrl}/bankclient/clients`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => { setClients(response.data) })
  }, [])

  return (
    <div>
      <HeaderDashboard />
      <div className='min-h-screen flex flex-col xl:w-[850px] 2xl:w-[1217px]
                      pt-[55px] lg:pt-[97px] px-[18px] md:px-[40px] lg:px-[20px] xl:px-[40px] 2xl:px-[60px]'>
        <HeaderSection titleSeconde={titleSeconde} firstTitle={firstTitle} notification={notification} />
        <div className='mt-[40px] flex flex-col gap-[20px]'>
          {/* Clients Header */}
          <div className='flex justify-between items-center'>
            <h1 className='hidden lg:block font-bold text-[22px]'>Clients</h1>
            <Link
              className='w-[124px] h-[28px] rounded-[4px] py-[4px] px-[12px] bg-[#076152] text-white text-[14px] font-bold flex justify-center items-center gap-[10px]'
              to={'/bankemployee/clientPage/addClient'}
            >
              <img src={addClient} alt='Add Client' />
              <span>Add Client</span>
            </Link>
          </div>

          {/* Scrollable Clients List */}
          <ScrollBarList>
            <div className='flex lg:flex-col overflow-x-scroll custom-scrollbar  gap-2'>
              {clients.map((item, index) => (
                <ClientsSummaryCard
                  key={index}
                  name={`${item.firstName} ${item.lastName}`}
                  budget={item.budget}
                  amount={item.approvedLoanAmount}
                  city={item.propertyCity}
                />
              ))}
            </div>
          </ScrollBarList>
          {/*Status */}
          <Status />
        </div>
      </div>
    </div>
  );
};

export default ClientPage;