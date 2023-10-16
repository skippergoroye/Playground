import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    Button,
    Input,
    Text,
    Stack,
    Image
  } from '@chakra-ui/react'
  import { WhatsApp, Gmail, Contact } from "../../assets"

const SendRequestPopUp = ({ isOpenProps, onCloseProps }) => {
    


  return (
    <Modal onClose={onCloseProps} isOpen={isOpenProps} size="md" >
    <ModalOverlay />
    <ModalContent pb="20px" borderRadius="15px">
      <ModalHeader color='#344054' fontWeight="320" fontSize='23px' fontFamily="font-Avenir">Share Link</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="411px"
            maxW="100%"
            >
            <Input
                size="sm"
                w="100%"
                placeholder="https://fitted.//add measurement/syqiey4rfw"
                _placeholder={{ color: "#344054", fontSize: "12px" }}
                border="1px solid #CBD5E1"
                boxShadow='xs'
                borderRadius="8px"
                borderRight="0px"
                borderRightRadius="0px"
            />
            <Button
                bgColor="#5773FF"
                size="sm"
                color="#fff"
                fontSize="10px"
                borderRadius="8px"
                boxShadow='xs'
                w="20%"
                marginLeft="-10px"
                _hover={{ bgColor: "#030bfc" }}
            >
                Copy Link
            </Button>
        </Box>
        <Box mt="15px">
            <Text color="#7F8691" fontSize="16px" fontWeight="400" fontFamily="font-Avenir">or share to</Text>
            <Stack direction='row' mt="15px">
                <Image
                    boxSize='40px'
                    objectFit='cover'
                    src={WhatsApp}
                    alt='whatsapp icon'
                />
                <Image
                    boxSize='40px'
                    objectFit='cover'
                    src={Gmail}
                    alt='gmail icon'
                />
                <Image
                    boxSize='40px'
                    objectFit='cover'
                    src={Contact}
                    alt='contact icon'
                />
            </Stack>
        </Box>
      </ModalBody>
      {/* <ModalFooter>
        <Button onClick={onCloseProps}>Close</Button>
      </ModalFooter> */}
    </ModalContent>
  </Modal>
  )
}

export default SendRequestPopUp
