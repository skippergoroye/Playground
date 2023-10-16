import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
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
  VStack,
  Text,
  Image,
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  useToast,
  Avatar,
  HStack,
} from "@chakra-ui/react";

const AddCustomerModal = ({ isOpen, onOpen, onClose }) => {
  const toast = useToast();
  const [gender, setGender] = useState("");



  const initialValues = {
    fullName: "",
    phone: "",
    email: "",
    address: "",
    gender: "",
    profileImage: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    phone: Yup.string().required("phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });



  const handleSubmit = (values ) => {
    console.log("Form Data Submitted:", values);
    
  };





  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader color="gray.600" fontWeight="400" fontSize="24px">
        Add customers
      </ModalHeader>
      <ModalCloseButton mt="10px" />
      <ModalBody>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <VStack spacing={4} color="black.600" mb="4">
                <HStack>
                  <Field name="skiiooo">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.profileImage &&
                          form.touched.profileImage
                        }
                      >
                        <Box
                          as="label"
                          htmlFor="fileInput"
                          w="200px"
                          h="200px"
                          // bg={`url('src/assets/profile.png')`}
                          // bgImage="url('src/assets/profile.png')"
                          bgSize="cover"
                          bgPos="center"
                          cursor="pointer"
                          overflow="hidden"
                          borderRadius="md"
                          boxShadow="md"
                        >
                          <Image
                            src={Profile}
                            alt="Dan Abramov"
                            boxSize="70px"
                          />
                          <Input
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            display="none"
                            onChange={(event) => {
                              form.setFieldValue(
                                "profileImage",
                                event.currentTarget.files[0]
                              );
                            }}
                          />
                        </Box>
                        <FormErrorMessage>
                          {form.errors.profileImage}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </HStack>

                {/* Display the uploaded image */}
                {formik.values.profileImage && (
                  <Avatar
                    src={URL.createObjectURL(formik.values.profileImage)}
                    alt="Profile"
                    size="xl"
                    borderRadius="full"
                    style={{ margin: "-80px 0 10px 0", zIndex: "40" }}
                  />
                )}

                <Field name="fullName">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.fullName && form.touched.fullName
                      }
                      isRequired
                    >
                      <FormLabel htmlFor="fullName">Full Name</FormLabel>
                      <Input
                        {...field}
                        id="fullName"
                        placeholder="Full Name"
                      />
                      <FormErrorMessage>
                        {form.errors.fullName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>




              {/* <Field name="phone">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.phone && form.touched.phone}
              >
                <FormLabel fontSize={{ base: "14px", lg: "16px" }}>
                  Phone number
                </FormLabel>
                <PhoneInput
                  {...field}
                  // style={{ height: "5px" }}
                  className="react-phone-input"
                  id="phone"
                  international
                  // countryCallingCodeEditable={false}
                  // defaultCountry="NG"
                  // value={phone}
                  onChange={(e) => {
                    if (!form?.touched.phone)
                      form?.setFieldTouched("phone", true);
                    // const { error, value } = validatephone(e);
                    // form?.setFieldValue("phone", value, false);
                    // form?.setFieldError("phone", error, false);
                    // setPhoneNo(value);
                    initialValues.phone = value;
                  }}
                />
                <FormErrorMessage>
                  {form.errors.phone
                    ? "Phone number is a required field"
                    : ""}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field> */}




                   

            
                <Field name="phone">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.phone && form.touched.phone} isRequired
                    >
                      <FormLabel htmlFor="phone">Phone Number</FormLabel>
                      <Input
                        {...field}
                        type="number"
                        id="phone"
                        placeholder="Phone Number"
                      />
                      <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>




                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                      isRequired
                    >
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        {...field}
                        type="email"
                        id="email"
                        placeholder="Email"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="address">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.address && form.touched.address}
                    >
                      <FormLabel htmlFor="address">
                        Address (optional)
                      </FormLabel>
                      <Input {...field} id="address" placeholder="Address" />
                      <FormErrorMessage>
                        {form.errors.address}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="gender">
                  {({ field, form }) => (
                    <>
                      <Box mt="24px">
                        <Text mr="200px" mb="10px">
                          Gender (optional)
                        </Text>

                        <Flex gap="10px">
                          <Box
                            borderRadius="5px"
                            padding="10px"
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
                              setGender("male");
                              form.setFieldTouched("gender", true);
                              form.setFieldValue("gender", "male");
                            }}
                          >
                            <Image src={manImage} alt="man" />
                            <Text align="center">Male</Text>
                          </Box>
                          <Box
                            padding="10px"
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
                  mt={4}
                  colorScheme="pink"
                  w="full"
                  mb="65px"
                  type="submit"
                  onClick={onClose}
                >
                  Add Customer
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </ModalContent>
  </Modal>
  )
}

export default AddCustomerModal
