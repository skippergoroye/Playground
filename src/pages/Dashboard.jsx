import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Dashboard = () => {
  return (
    <div>
      <h1 className="flex items-start mt-10 justify-center text-blue-500 text-[50px] font-bold">
        Welcome to the user Dashboard
      </h1>

      <Flex direction="row" align="right" justify="end" px="150px" mt="50px">
        <Button
          leftIcon={<AddIcon />}
          bg="transparent"
          color="#b7076b"
          border="1px solid #000000"
        >
          Customer
        </Button>
      </Flex>
    </div>
  );
};

export default Dashboard;
