// RightSection.js
import { Box, Flex, Text } from "@chakra-ui/react";

const RightSection = () => {
  return (
    <Box
      w="22%"
      h="85vh"
      mt="90px"
      mr="25px"
      bg="#FDF4E3"
      p={4}
      border="1px solid #7A7A7A"
      borderRadius="10px"
    >
      {/* Title Box */}
      <Flex
        mt="-5px"  
        ml="-5px"
        top={0}
        right={0}
        w="101%"
        h="6%"

        bg='rgba(68, 116, 238, 0.61)'
        border="1px solid #7A7A7A"
        borderRadius="10px"
        justify="center"
        align="center"
        padding={2}
        mb={4}
      >
        <Text fontSize="20px">Quick Tasks</Text>
      </Flex>

      <Box
        bg="#FDF4E3"
        p={8}
        h="full"
      >
        {"Content Here"}
      </Box>
    </Box>
  );
};

export default RightSection;
