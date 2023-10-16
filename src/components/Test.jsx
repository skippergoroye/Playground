import React from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';



const Test = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
      gender: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });



  return (
    <form onSubmit={formik.handleSubmit}>
    <FormControl>
      <FormLabel htmlFor="fullName">Full Name</FormLabel>
      <Input
        type="text"
        id="fullName"
        name="fullName"
        onChange={formik.handleChange}
        value={formik.values.fullName}
      />
    </FormControl>

    <FormControl>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
    </FormControl>

    <FormControl>
      <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
      <Input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
      />
    </FormControl>

    <FormControl>
      <FormLabel htmlFor="address">Address</FormLabel>
      <Input
        type="text"
        id="address"
        name="address"
        onChange={formik.handleChange}
        value={formik.values.address}
      />
    </FormControl>

    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup
        id="gender"
        name="gender"
        value={formik.values.gender}
        onChange={formik.handleChange}
      >
        <Stack direction="row">
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
          <Radio value="other">Other</Radio>
        </Stack>
      </RadioGroup>
    </FormControl>

    <Box mt={4}>
      <Button colorScheme="teal" type="submit">
        Submit
      </Button>
    </Box>
  </form>
  )
}

export default Test