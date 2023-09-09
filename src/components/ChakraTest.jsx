import React, { useEffect } from "react";
import { useToast, Box, Text, Container } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const ChakraTest = () => {
  const toast = useToast();

  useEffect(() => {

    toast({
      status: "info",
      position: "top",
      duration: 3000,
      render: (props) => (
        <Container>
          <Box maxW="300px" color="#344054" p={3} bg="gray.300">
            <InfoIcon />
            <Text>
              The customer will be added to your customer list after creating the measurement.uuuuuuuuuuuuuuuuuuu
            </Text>
          </Box>
        </Container>
      ),
    });

  }, [toast]);

  return null
};

export default ChakraTest;
