import { Button, Text, Image } from '@chakra-ui/react'
import React from 'react'

const GuideButton = ({ text, icon}) => {
  return (
    <Button  
      _hover={{
      color: "#fff",
      bgColor: "#D53F8C",
      border: "1px solid #B7076B",
      }}
  
      bgColor="#B7076B"
      color="#fff"
      fontSize="14px"
      px="22px"
      minW="216px"
      gap="10px"
    >
      {icon && <Image src={icon} />}
      {text}
    </Button>
  )
}

export default GuideButton