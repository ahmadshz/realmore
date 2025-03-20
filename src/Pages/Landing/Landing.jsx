import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    const path = window.innerWidth < 768 ? '/loginBank/mobile' : '/loginBank';


    return (
        <div>
            <Link className='text-3xl text-red-400' to={path}>
                Login
            </Link>
            <br/>
            <Link className='text-3xl text-red-400' to={'/registerRealEstate'}>
                registerRealEstate
            </Link>
            <br/>
            <Link className='text-3xl text-red-400' to={'/loginRealEstate'}>
                loginRealEstate
            </Link>
            <br />
            { window.innerWidth < 768 ? "" :
                <Link className='text-3xl text-red-400' to={'/registerBank'}>
                    Register
                </Link>}
            <br />
            <Link className='text-3xl text-red-400' to={'/bankemployee/dashboard'}>
                Bank Employee
            </Link>
            <br/>
            <Link className='text-3xl text-red-400' to={'/realEstate'}>
                Real Estate Dashboard
            </Link>
        </div>
    )
}

export default Landing
