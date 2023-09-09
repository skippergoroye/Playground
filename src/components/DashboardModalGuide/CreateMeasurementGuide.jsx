import React from 'react'
import { CreateMeasurement, PlusIcon } from '../../assets'
import GuideButton from "./GuideButton"
import { Box, Image, Flex, Text } from '@chakra-ui/react'

const CreateMeasurementGuide = () => {
  return (
    <Flex direction="column" justify="center" align="center" mt="5px" mb="50px" gap="20px">
        <Image src={CreateMeasurement} alt='Create measurement' />

        <Box align="center" >
          <Text fontSize="18px" fontWeight="500">Create measurement</Text>
          <Text fontSize="14px" fontWeight="400">Add measurements of your customers to the fitted platform </Text>
        </Box>

        <GuideButton text="Create measurement" icon={PlusIcon} />
    </Flex>
  )
}

export default CreateMeasurementGuide
