import React from 'react'
import GuideButton from './GuideButton'
import { AddMeasurement, PlusIcon } from '../../assets'
import { Flex, Image, Box, Text } from "@chakra-ui/react"


const AddMeasurementGuide = () => {
  return (
    <Flex direction="column" align="center" justify="center" gap="20px">
      <Image src={AddMeasurement} alt="add measurement" />

      <Box align="center">
        <Text fontSize="18px" fontWeight="500">Add customers</Text>
        <Text fontSize="14px">Add measurements of your customers to the fitted platform </Text>
      </Box>

      <GuideButton text="Add Customers" icon={PlusIcon} />
    </Flex>
  )
}

export default AddMeasurementGuide
