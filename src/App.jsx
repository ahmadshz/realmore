import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Login from './Pages/Auth/AuthBank/Login'
import Register from './Pages/Auth/AuthBank/Register'
import DashboardBank from './Pages/Dashboard/DashboardBank/DashboardBank'
import InformationClients from './Pages/Dashboard/DashboardBank/InformationClients'
import AddClient from './Pages/Dashboard/DashboardBank/AddClient'
import LoginMobileBank from './Pages/Auth/AuthBank/LoginMobileBank'
import AuthMobile from './Components/Auth/AuthMobile'
import ClientPage from './Pages/Dashboard/DashboardBank/ClientPage'

const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Landing />} />

        {/* Auth Bank Employee */}
        <Route path="/loginBank" element={<Login />} />
        <Route path="/registerBank" element={<Register />} />
        <Route path='/loginBank/mobile' element={<AuthMobile />} />


        {/* Dashboard Bank Employee */}
        <Route path="/bankemployee" element={<DashboardBank />} >
          <Route path="dashboard" element={<InformationClients />} />
          <Route path="clientPage" element={<ClientPage />} />
          <Route path="clientPage/addClient" element={<AddClient />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
