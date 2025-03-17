import React from 'react'
import about from '../../assets/icons/aboutus.png'
import privacy from '../../assets/icons/privacy.png'
import contact from '../../assets/icons/contact.png'
import services from '../../assets/icons/services.png'
import Information from '../Pages/Information'

const RightSection = () => {
    return (
        <div className='hidden fixed right-0 lg:w-[280px] xl:w-[331px] 2xl:w-[400px] border-l h-screen lg:flex flex-col justify-between items-center py-[40px]'>

            <div />
            <div />

            <Information about={about} privacy={privacy} contact={contact} services={services} />
        </div>
    )
}

export default RightSection
