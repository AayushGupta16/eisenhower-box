// LeftSection.js
import { Box, Flex, Text } from "@chakra-ui/react";

const LeftSection = () => {
  return (
    <Box
      w="22%"
      h="95vh"
      bg="#FDF4E3"
      p={4}
      mt="100px"  // Adjust this value to move the box up or down
      ml="25px"
      borderRadius="10px"
    >
      {/* Title Box */}
      <Flex
        position="relative"
        top={0}
        left={0}
        w="100%"
        bg='rgba(135, 200, 134, 0.67)'
        border="1px solid #7A7A7A"
        borderRadius="10px"
        justify="center"
        align="center"
        padding={2}
        mb={4}
      >
        <Text>Completed Tasks</Text>
      </Flex>

      <Box
        bg="#FDF4E4"
        p={4}
        h="full"
      >
        {"no Here"}
      </Box>
    </Box>
  );
};

export default LeftSection;
