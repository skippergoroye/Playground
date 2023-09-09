import React from 'react'
import { ApplyMeasurement } from '../../assets'
import { Flex, Box, Text, Image } from "@chakra-ui/react"
import GuideButton from './GuideButton'

const ApplyMeasurementGuide = () => {
  return (
    <Flex direction="column" align="center" justify="center" mt="10px" gap="20px">
      <Image src={ApplyMeasurement} alt="apply measurement" />

      <Box align="center">
        <Text fontSize="18px" fontWeight="500">Apply to be a vetted tailor</Text>
        <Text fontSize="14px">Aliquet ante in morbi nibh feugiat facilisis ipsum venenatis. Egestas enim tortor nulla montes.</Text>
      </Box>

      <GuideButton text="Apply Now" />
    </Flex>
  )
}

export default ApplyMeasurementGuide
