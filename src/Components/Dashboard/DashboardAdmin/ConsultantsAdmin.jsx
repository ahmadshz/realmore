import React from 'react'
import ClientList from '../DashboardEstate/ClientList';

const ConsultantsAdmin = () => {
    const clients = [
        {
            name: "Client Name",
            phone: "05 123 456 78",
            consultant: "Consultant Name",
            mortgage: {
                budget: "5,000,000",
                loan: "1,000,000",
            },
            properties: [
                { label: "Property City", value: "Jedda" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property City", value: "Jedda" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property District", value: "Albawadi" },
            ],
        },
        {
            name: "Ahmad",
            phone: "05 123 456 78",
            consultant: "Consultant Name",
            mortgage: {
                budget: "5,000,000",
                loan: "1,000,000",
            },
            properties: [
                { label: "Property City", value: "Jedda" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property City", value: "Jedda" },
                { label: "Property District", value: "Albawadi" },
                { label: "Property District", value: "Albawadi" },
            ],
        },


    ];
    return (
        <div>
            <ClientList
                mt={'mt-0'}
                clients={clients}
                add="Add Consultant"
                bg={'bg-black'}
                search="Search Consultants"
                title='Consultants'
                closedDeals
                notes
                bgDeal={'bg-[#FFF1DD]'}
                textColor={'text-[#EA9A22]'}
            />
        </div>
    )
}

export default ConsultantsAdmin