import React from "react";
import { useDisclosure } from '@chakra-ui/react'
import { Box, Flex, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { AddCustomerModal } from "../components";
import { SendRequestPopUp } from "../components"

const Dashboardtwo = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()





  return (
    <div className="max-w-[1440px] mx-auto sm:px-16 px-6">
      <h1 className="flex items-start mt-10 justify-center text-blue-500 text-[50px] font-bold">
        Welcome to the user Dashboard Two
      </h1>

  
      <SendRequestPopUp isOpenProps={isOpen} onCloseProps={onClose} />


      <Flex direction="row" align="right" justify="end" mx="auto" py="30px">
        <Button
          leftIcon={<AddIcon />}
          bg="transparent"
          color="#b7076b"
          border={"1px solid #000000"}
          onClick={onOpen}
        >
          Send Request
        </Button>
      </Flex>
    </div>
  )
}

export default Dashboardtwo
