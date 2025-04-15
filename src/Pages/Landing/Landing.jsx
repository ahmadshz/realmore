import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    const path = window.innerWidth < 768 ? '/loginBank/mobile' : '/loginBank';


    return (
        <div>
            <h1 className='text-3xl'> Bankk</h1>
            <Link className='text-3xl text-red-400' to={path}>
                Login
            </Link>
            <br />
            {window.innerWidth < 768 ? "" :
                <Link className='text-3xl text-red-400' to={'/registerBank'}>
                    Register
                </Link>}
            <br />
            <Link className='text-3xl text-red-400' to={'/bankemployee/dashboard'}>
                Bank Employee dashboard
            </Link>
            <br />
            <br />
            <br />

            <h1 className='text-3xl'>Real Estate</h1>
            <Link className='text-3xl text-red-400' to={'/registerRealEstate'}>
                registerRealEstate
            </Link>
            <br />
            <Link className='text-3xl text-red-400' to={'/loginRealEstate'}>
                loginRealEstate
            </Link>
            <br />
            <Link className='text-3xl text-red-400' to={'/realEstate/dashboard'}>
                Real Estate Dashboard
            </Link>
            <br />
            <br />
            <br />

            <h1 className='text-3xl'>Individual</h1>
            <Link className='text-3xl text-red-400' to={'/registerIndividual'}>
                registerIndividual
            </Link>
            <br />
            <Link className='text-3xl text-red-400' to={'/loginIndividual'}>
                loginIndividual
            </Link>
            <br />
            <Link className='text-3xl text-red-400' to={'/individual/dashboard'}>
                Individual Dashboard
            </Link>
            <br />
            <br />
            <br />

            <h1 className='text-3xl'>QA</h1>

            <br />
            <Link className='text-3xl text-red-400' to={'/loginQA'}>
                login QA
            </Link>
            <br />
            <Link className='text-3xl text-red-400' to={'/QA/dashboard'}>
                Dashboard QA
            </Link>
            <br />
            <br />
            <br />

            <h1 className='text-3xl'>Admin</h1>
            <br />
            <Link className='text-3xl text-red-400' to={'/loginAdmin'}>
                login Admin
            </Link>
            <br />
            <Link className='text-3xl text-red-400' to={'/admin/dashboard'}>
                Dashboard Admin
            </Link>
            <br />
            <br />
            <br />

        </div>
    )
}

export default Landing
