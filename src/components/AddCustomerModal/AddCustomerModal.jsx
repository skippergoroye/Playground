import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { Profile } from '../../assets/index'
import manImage from "../../assets/man-setup.png"
import womanImage from "../../assets/woman-setup.png"
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  Text,
  Image,
  Box,
  Flex,

  
  Checkbox,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";






const AddCustomerModal = ({ isOpen, onOpen, onClose }) => {
  const [gender, setGender] = useState("");
  const [userGenderError, setUserGenderError] = useState(false);

  const AddCustomerHandler = {

  }

  
  const initialValues = {
    email: "",
    password: "",
    address: "",
    gender: "",
  }

  console.log(gender)


  const validationSchema = Yup.object ({
    fullName: Yup.string().required('Full name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email')
  });


 



  return (
      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        
        <ModalContent>
          <ModalHeader color='gray.600' fontWeight="400" fontSize="24px">Add customers</ModalHeader>
          <ModalCloseButton mt="10px" />
            <ModalBody>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={AddCustomerHandler}
              >

              {(props) => (
                <Form>
                  <VStack spacing={4} color='gray.600'>

                    <Box mt="-20px" align="center">
                      <Image src={Profile} alt='Dan Abramov' boxSize='70px' />
                      <Text as='u' color="#5773FF" fontSize="12px" mt>Add Photo</Text>
                    </Box>
                      


                      <Field name='fullName' validate={validationSchema}>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.fullName && form.touched.fullName} isRequired>
                            <FormLabel>Full name</FormLabel>
                            <Input {...field} type="text" placeholder='Full name' size='sm' />
                            <FormErrorMessage>{form.errors.fullName}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>

                      <Field name='phoneNumber' validate={validationSchema}>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.phoneNumber && form.touched.phoneNumber} isRequired>
                            <FormLabel>Phone number</FormLabel>
                            <InputGroup>
                              <InputLeftAddon children='+234' h='33px' />
                              <Input {...field} type="number" placeholder='Phone number' size='sm' />
                            </InputGroup>

                            <FormErrorMessage>{form.errors.phoneNumber}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>

                      <Field name='email' validate={validationSchema}>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.email && form.touched.email}>
                            <FormLabel>Email address (optional)</FormLabel>
                            <Input {...field} type="email" placeholder='Email address' size='sm'  />
                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>

                      <Field name='address' validate={validationSchema}>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.address && form.touched.address}>
                            <FormLabel>Address (optional)</FormLabel>
                            <Input {...field} type="text" placeholder='Home address' size='sm' />
                            <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>

                      </VStack>  


                      <Field name="gender">
                         {({ field, form }) => (
                           <>
                           <Box mt="24px">
                             <Text mr="200px" mb="10px">Gender (optional)</Text>


                              <Flex gap="10px">
                                <Box   
                                    borderRadius="5px"
                                    backgroundColor={
                                      gender === "male" ? "#fff" : "transparent"
                                    }
                                    border={`solid ${
                                      gender === "male"
                                        ? "1px #FF0000"
                                        : "0.636px #D0D5DD"
                                    }`}
                                    boxShadow="0px 0.6355586647987366px 1.2711173295974731px 0px rgba(16, 24, 40, 0.05)"
                                    cursor="pointer"
                                    onClick={() => {
                                      setUserGenderError(false);
                                      setGender("male");
                                      form.setFieldTouched("gender", true);
                                      form.setFieldValue("gender", "male");
                                    }}
                                  >
                                    <Image src={manImage} alt="man" />
                                    <Text align="center">Male</Text>
                                </Box>
                                <Box
                                    borderRadius="5px"
                                    backgroundColor={
                                      gender === "female" ? "#fff" : "transparent"
                                    }
                                    border={`solid ${
                                      gender === "female"
                                        ? "1px #FF0000"
                                        : "0.636px #D0D5DD"
                                    }`}
                                    onClick={() => {
                                      setUserGenderError(false);
                                      setGender("female");
                                      form.setFieldTouched("gender", true);
                                      form.setFieldValue("gender", "female");
                                    }}
                                    boxShadow="0px 0.6355586647987366px 1.2711173295974731px 0px rgba(16, 24, 40, 0.05)"
                                    cursor="pointer"
                                  >
                                    <Image src={womanImage} alt="woman" />
                                    <Text align="center">Female</Text>
                                </Box>
                              </Flex>
                            </Box>
                           </>
                         )}
                      </Field>



                     
                    <Button
                      mt={4} colorScheme='pink' w="full" mb="15px"
                      isLoading={props.isSubmitting}
                      type='submit'
                    >
                      Add Customer
                    </Button>
                </Form>
              )}
              </Formik>
            </ModalBody>
        </ModalContent>  
      </Modal>
  );
};

export default AddCustomerModal;
