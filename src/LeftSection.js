// LeftSection.js
import { Box, Flex, Text } from "@chakra-ui/react";

const LeftSection = () => {
  return (
    <Box
      w="22%"
      h="85vh"
      bg="#FDF4E3"
      p={4}
      mt="90px"  // Adjust this value to move the box up or down
      ml="25px"
      border="1px solid #7A7A7A"
      borderRadius="10px"
    >
      {/* Title Box */}
      <Flex
        position="relative"
        mt="-5px"  
        ml="-5px"
        top={0}
        left={0}
        w="101%"
        h="6%"
        bg='rgba(135, 200, 134, 0.67)'
        border="1px solid #7A7A7A"
        borderRadius="10px"
        justify="center"
        align="center"
        padding={2}
        mb={4}
      >
        <Text fontSize="20px">Completed Tasks</Text>
      </Flex>

      <Box
        bg="#FDF4E4"
        p={4}
        h="full"
      >
        {"Content Here"}
      </Box>
    </Box>
  );
};

export default LeftSection;
