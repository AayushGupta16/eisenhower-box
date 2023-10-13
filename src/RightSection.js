// RightSection.js
import { Box, Flex, Text } from "@chakra-ui/react";

const RightSection = () => {
  return (
    <Box
      w="22%"
      h="95vh"
      mt="100px"  // Adjust this value to move the box up or down
      mr="25px"
      bg="#FDF4E3"
      p={4}
      borderRadius="10px"
    >
      {/* Title Box */}
      <Flex
        mt="-15px"  
        ml="-8px"
        top={0}
        right={0}
        w="102%"
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
