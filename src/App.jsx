import React, { useState } from 'react'
import ChakraTest from './components/ChakraTest'
import { Box, Text, Heading } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AddCustomerModal, DashboardGuide, ButtonTabs, Textf } from './components'
import { Dashboard } from './pages'




const App = () => {
 
  
 

  return (
     <Router>
      {/* <h1>welcome</h1>  */}
      <Routes>
         <Route path="/addcustomer" element={<AddCustomerModal />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/dashboardguide" element={<DashboardGuide />} />
         <Route path="/buttontabs" element={<ButtonTabs />} />
         <Route path="/text" element={<Textf />} />
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