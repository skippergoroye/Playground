import React from 'react'
import ChakraTest from './components/ChakraTest'
import { Box, Text, Heading } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AddCustomerModal } from './components'
import { Dashboard } from './pages'

import ApplyMeasurementGuide from './components/DashboardModalGuide/ApplyMeasurementGuide'
import AddMeasurementGuide from './components/DashboardModalGuide/AddMeasurementGuide'
import CreateMeasurementGuide from './components/DashboardModalGuide/CreateMeasurementGuide'
import DashboardGuide from './components/DashboardGuide/DashboardGuide'


const App = () => {
  return (
    <Router>
      {/* <h1>welcome</h1> */}
      <Routes>
         <Route path="/addcustomer" element={<AddCustomerModal />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/text" element={<DashboardGuide />} />
      </Routes>
    </Router>
    
    // <div>
    //   <Box bg="red" w="300px" h="400px" mx="auto" mt="80px">
    //     <Text fontSize="6xl" align="center">This is a style props example</Text>
    //   </Box>
    // </div>
  )
}

export default App