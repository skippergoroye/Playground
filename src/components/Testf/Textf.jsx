import React, { useState } from "react";
import {
  Box,
  HStack,
  Text,
  useRadio,
  useRadioGroup,
  IconButton,
  Flex
} from "@chakra-ui/react";







const RadioCard = (props) => {
    const { getInputProps, getRadioProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getRadioProps();


    return (
        <Box as="label">
        <input {...input} />

        <Box 
           {...checkbox} 
           cursor="pointer"
           borderWidth='1px'
           borderRadius='md'
           boxShadow='md'
           _checked={{
            bg: 'teal.600',
            color: 'white',
            borderColor: 'teal.600',
           }}
           _focus={{
            boxShadow: 'outline',
          }}
          px={5}
          py={5}
        >

        {props.children}
        </Box>
       </Box>
    )
}





// part two 

const Textf = () => {
    const [selected, setSelected] = useState("");
    const options = ["react", "vue", "svelte"];


    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "framework",
      onChange: setSelected
    });


    const group = getRootProps();


  return (
    <Box margin="4">
      <Text as="h1" paddingY={2} fontWeight="bold">
          Custom Radio Component
      </Text>
      <HStack {...group}>

        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>

              {value}
            </RadioCard>
          );
        })}
      </HStack>
      <Text paddingY={2}>Selected value: {selected}</Text>
    </Box>
  )
}

export default Textf


