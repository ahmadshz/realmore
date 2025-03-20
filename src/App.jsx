import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Login from './Pages/Auth/AuthBank/Login'
import Register from './Pages/Auth/AuthBank/Register'
import DashboardBank from './Pages/Dashboard/DashboardBank/DashboardBank'
import InformationClients from './Pages/Dashboard/DashboardBank/InformationClients'
import AddClient from './Pages/Dashboard/DashboardBank/AddClient'
import AuthMobile from './Components/Auth/AuthMobile'
import ClientPage from './Pages/Dashboard/DashboardBank/ClientPage'
import Overview from './Pages/Dashboard/DashboardBank/Overview'
import OverviewMetrics from './Pages/Dashboard/DashboardBank/OverviewMetrics'
import LoginRealEstate from './Pages/Auth/AuthRealEstate/LoginRealEstate'
import RegisterRealEstate from './Pages/Auth/AuthRealEstate/RegisterRealEstate'
import DashboardRealEstate from './Pages/Dashboard/DashboardRealEstate/DashboardRealEstate'
import InformationRealEstate from './Pages/Dashboard/DashboardRealEstate/InformationRealEstate'

const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Landing />} />

        {/* Auth Bank Employee */}
        <Route path="/loginBank" element={<Login />} />
        <Route path="/registerBank" element={<Register />} />
        <Route path='/loginBank/mobile' element={<AuthMobile />} />

        {/* Auth Real Estate */}
        <Route path="/loginRealEstate" element={<LoginRealEstate />} />
        <Route path="/registerRealEstate" element={<RegisterRealEstate />} />


        {/* Dashboard Bank Employee */}
        <Route path="/bankemployee" element={<DashboardBank />} >
          <Route path="dashboard" element={<InformationClients />} />
          <Route path="clientPage" element={<ClientPage />} />
          <Route path="clientPage/addClient" element={<AddClient />} />
          <Route path="overview" element={<Overview />} />
          <Route path="overview/metrics" element={<OverviewMetrics />} />
        </Route>

        {/* Dashboard Real Estate */}
        <Route path="/realEstate" element={<DashboardRealEstate />} >
          <Route path="dashboardRealEstate" element={<InformationRealEstate />} />
          <Route path="clientPage" element={<ClientPage />} />
          <Route path="clientPage/addClient" element={<AddClient />} />
          <Route path="overview" element={<Overview />} />
          <Route path="overview/metrics" element={<OverviewMetrics />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
