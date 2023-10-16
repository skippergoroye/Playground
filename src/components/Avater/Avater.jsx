import React, { useState } from 'react';
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Center,
  Image,
} from '@chakra-ui/react';
import { Profile } from '../../assets';

const Avater = () => {
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

};
  return (
    <Center height="100vh">
    <FormControl>
      <Box
        as="label"
        htmlFor="fileInput"
        w="200px"
        h="200px"
        bg={`url('src/assets/profile.png')`}
        // bgImage="url('src/assets/profile.png')" 
        bgSize="cover"
          bgPos="center"
          cursor="pointer"
          overflow="hidden"
          borderRadius="md"
          boxShadow="md"
      >
        <Image src={Profile} alt='Dan Abramov' boxSize='70px' />
        <Input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
          display="none"
        />
      </Box>
      {selectedFile && (
        <Box mt={4}>
          <FormLabel>Selected File:</FormLabel>
          <Image src={URL.createObjectURL(selectedFile)} alt="Selected" w="200px" />
        </Box>
      )}
    </FormControl>
  </Center>
  )
}

export default Avater
