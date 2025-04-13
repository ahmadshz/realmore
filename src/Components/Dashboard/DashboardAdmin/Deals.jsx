import React, { useState } from 'react'
import ClientList from '../DashboardEstate/ClientList';

const Deals = () => {
    const [selected, setSelected] = useState('All Deals')

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
        <div >
            <ClientList
                mt={'mt-0'}
                clients={clients}
                add="Add Deals"
                bg={'bg-black'}
                search="Search clients"
                title='Deals'
                filterType
                selected={selected}
                setSelected={setSelected}
                closedDeals
                notes
                bgDeal={'bg-[#DDFFE3]'}
                textColor={'text-[#1BC13F]'}
            />
        </div>
    )
}

export default Deals