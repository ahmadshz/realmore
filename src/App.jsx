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
import OverviewMetrics from './Pages/Dashboard/DashboardBank/OverviewMetrics'
import LoginRealEstate from './Pages/Auth/AuthRealEstate/LoginRealEstate'
import RegisterRealEstate from './Pages/Auth/AuthRealEstate/RegisterRealEstate'
import DashboardRealEstate from './Pages/Dashboard/DashboardRealEstate/DashboardRealEstate'
import InformationRealEstate from './Pages/Dashboard/DashboardRealEstate/InformationRealEstate'
import ClientPageRealEstate from './Pages/Dashboard/DashboardRealEstate/ClientPageRealEstate'
import OverviewRealEstate from './Pages/Dashboard/DashboardRealEstate/OverviewRealEstate'
import LoginIndividual from './Pages/Auth/AuthIndividual/LoginIndividual'
import RegisterIndividual from './Pages/Auth/AuthIndividual/RegisterIndividual'
import DashboardIndividual from './Pages/Dashboard/DashboardIndividual/DashboardIndividual'
import InformationIndividual from './Pages/Dashboard/DashboardIndividual/InformationIndividual'
import ConsulatePage from './Pages/Dashboard/DashboardIndividual/ConsulatePage'
import OverViewIndividual from './Pages/Dashboard/DashboardIndividual/OverViewIndividual'
import AddIndividual from './Pages/Dashboard/DashboardIndividual/AddIndividual'
import LoginAdmin from './Pages/Auth/AuthAdmin/LoginAdmin'
import DashboardAdmin from './Pages/Dashboard/DashboardAdmin/DashboardAdmin'
import InformationAdmin from './Pages/Dashboard/DashboardAdmin/InformationAdmin'

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

        {/* Auth Individual */}
        <Route path="/loginIndividual" element={<LoginIndividual />} />
        <Route path='/registerIndividual' element={<RegisterIndividual />} />\

        {/* Auth Admin */}
        <Route path="/loginAdmin" element={<LoginAdmin />} />


        {/* Dashboard Bank Employee */}
        <Route path="/bankemployee" element={<DashboardBank />} >
          <Route path="dashboard" element={<InformationClients />} />
          <Route path="clientPage" element={<ClientPage />} />
          <Route path="clientPage/addClient" element={<AddClient />} />
          <Route path="overview" element={<OverviewMetrics />} />
        </Route>

        {/* Dashboard Real Estate */}
        <Route path="/realEstate" element={<DashboardRealEstate />} >
          <Route path="dashboard" element={<InformationRealEstate />} />
          <Route path="clientPage" element={<ClientPageRealEstate />} />
          <Route path="overview" element={<OverviewRealEstate />} />
        </Route>

        {/* Dashboard Individual */}
        <Route path="/individual" element={<DashboardIndividual />} >
          <Route path="dashboard" element={<InformationIndividual />} />
          <Route path="consultant" element={<ConsulatePage />} />
          <Route path="consultant/AddTaskInfo" element={<AddIndividual />} />
          <Route path="overview" element={<OverViewIndividual />} />
        </Route>

        {/* Dashboard Admin */}
        <Route path="/admin" element={<DashboardAdmin />} >
          <Route path="dashboard" element={<InformationAdmin />} />
      
        </Route>

      </Routes>
    </div>
  )
}

export default App
