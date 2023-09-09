import {
  Box,
  Flex,
  Text,
  Image,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import UpArrowIcon from "/src/assets/arrowUp-2.svg";
import Checkbox from "../../components/checkbox/Checkbox";


export default function DashboardGuide() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bgColor="#efefef" pt="20px">
      <Box
        padding="24px 18px 20px"
        borderRadius="8px"
        border="1px solid #E6E7EC"
        bgColor="#fff"
        w={{ base: "95%", md: "92%" }}
        mx="auto"
        overflow="hidden"
      >
        <Flex justify="space-between" mb={isOpen ? "19px" : "0px"}>
          <Text as="h3" fontSize="16px">
            Get started
          </Text>
          <Image
            onClick={onToggle}
            src={UpArrowIcon}
            alt="up arrow icon"
            cursor="pointer"
            className={isOpen ? "toggle-arrow rotate" : "toggle-arrow"}
          />
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Flex direction="column" gap="19px">
            <Flex gap="10px">
              <Checkbox />

              <Box w="95%">
                <Text fontSize="14px">Create a measurement</Text>
                <Text fontSize="12px" color="#98A2B3">
                  Add measurements of your customers to the fitted platform{" "}
                </Text>
              </Box>
            </Flex>

            <Flex gap="10px">
              <Checkbox />

              <Box w="95%">
                <Text fontSize="14px">Add a customer</Text>
                <Text fontSize="12px" color="#98A2B3" mb="10px">
                  Add measurements of your customers to the fitted platform{" "}
                </Text>
                <Text fontSize="12px" color="#B7076B" fontWeight="500">
                  Add customer{" "}
                  <Box as="span" ml="4px">
                    &#8250;
                  </Box>
                </Text>
              </Box>
            </Flex>

            <Flex gap="10px">
              <Checkbox />

              <Box w="95%">
                <Text fontSize="14px">Create a measurement</Text>
                <Text fontSize="12px" color="#98A2B3" mb="10px">
                  Aliquet ante in morbi nibh feugiat facilisis ipsum venenatis.
                  Egestas enim tortor nulla montes.
                </Text>
                <Text fontSize="12px" color="#B7076B" fontWeight="500">
                  Apply now{" "}
                  <Box as="span" ml="4px">
                    &#8250;
                  </Box>
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Collapse>
      </Box>
    </Box>
  );
}
