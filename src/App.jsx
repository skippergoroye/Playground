import React, { useState } from 'react'
import ChakraTest from './components/ChakraTest'
import { Box, Text, Heading } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AddCustomerModal, DashboardGuide, ButtonTabs, ClientProfile, RollingText, Textf, AddProfile, ImageUpload, Avater, UseMemo, SendRequestPopUp, CreateUnauthenticatedMeasurement, Test } from './components'
import { Dashboard, Dashboardtwo } from './pages'




const App = () => {
 
  
 
  return (
     <Router>
      {/* <h1>welcome</h1>  */}
      <Routes>
         <Route path="/addcustomer" element={<AddCustomerModal />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/dashboardtwo" element={<Dashboardtwo />} />
         <Route path="/dashboardguide" element={<DashboardGuide />} />
         <Route path="/buttontabs" element={<ButtonTabs />} />
         <Route path="/clientprofile" element={<ClientProfile />} />
         <Route path="/rollingtext" element={<RollingText />} />
         <Route path="/addprofile" element={<AddProfile />} />
         <Route path="/imageupload" element={<ImageUpload />} />
         <Route path="/avater" element={<Avater />} />
         <Route path="/textground" element={<Test />} />
         <Route path="/usememo" element={<UseMemo />} />
         <Route path="/measurement/create/:tailorId" element={<CreateUnauthenticatedMeasurement />} />
         <Route path="/sendrequestpopup" element={<SendRequestPopUp />} />
         <Route path="/textf" element={<Textf />} />
      </Routes>
    </Router> 
   
    // <div>
    //   <Box bg="red" w="300px" h="400px" mx="auto" mt="80px">
    //     <Text fontSize="6xl" align="center">This is a style props example</Text>
    //   </Box>
    // </div> */}
  )
}

export default App