import React, { useState  } from "react";
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Image,
  Text,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios"

const backgroundImageUrl = 'url("src/assets/profile.png")';

const divStyle = {
  backgroundImage: backgroundImageUrl,
  position: 'relative',
  borderRadius: '100%',
  backgroundColor: '#313131',
  backgroundSize: '70px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '70px',
  height: '70px',

};


function AddProfile () {
  const [profileImage, setprofileImage] = useState(null)
  console.log(profileImage)

  const initialValues = { 
    firstName: "", 
    lastName: "", 
    email: "", 
    profileImage: null
  }

  
  
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });




  const handleImage = (e) => {
    setprofileImage(e.target.files[0].name);
  };


  const handleSubmit = (values) => {
    console.log("Form Data Submitted:", values);
  };

  return (
    <Box p={4}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
              <Field name="address">
                {({ field, form }) => (
                    <Box display="flex" alignItems="center" justifyContent="center">
                      <FormLabel style={divStyle}>
                        <Input
                            {...field}
                            type="file"
                            id="profileImage"
                            accept=".jpeg, .jpg, .png, .gif, .svg"
                            style={{ display: "none"}}
                            onChange={(e) => {
                              form.setFieldValue("profileImage", e.currentTarget.files[0].name);
                            }}
                            // onChange={handleImage}
                          />
                      </FormLabel>
                    </Box>
                )}
              </Field>

          {/* 
            <Box display="flex" alignItems="center" justifyContent="center">
              <FormLabel style={divStyle}>
                <Input
                    type="file"
                    name="profileImage"
                    onChange={handleImage}
                    accept=".jpeg, .jpg, .png, .gif, .svg"
                    style={{ display: "none"}}
                  />
              </FormLabel>
            </Box> */}




            <Field name="firstName">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input {...field} id="firstName" placeholder="First Name" />
                  <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="lastName">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input {...field} id="lastName" placeholder="Last Name" />
                  <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="email">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input {...field} id="email" placeholder="Email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>



            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}



export default AddProfile;
