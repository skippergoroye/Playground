import React from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Box,
  VStack,




} from "@chakra-ui/react";

const AddCustomerModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };


  return (
    <>
      <Button
        onClick={() => handleSizeClick(size)}
        key={size}
        m={4}
      >Add Customer</Button>


      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
        <VStack>
          <ModalHeader>Add customers</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Text>kmkmkmkmkmkm km k</Text>
          </ModalBody>

              <ModalFooter>
                <Button onClick={onClose} colorScheme='pink' w="300px">Add Customer</Button>
              </ModalFooter>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCustomerModal;
