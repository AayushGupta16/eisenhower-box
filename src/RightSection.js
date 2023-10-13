// RightSection.js
import { Box, Flex, Text } from "@chakra-ui/react";

const RightSection = () => {
  return (
    <Box
      w="20%"
      h="95vh"
      mt="50px"  // Adjust this value to move the box up or down
      bg="#FDF4E3"
      p={4}
      borderRadius="10px"
    >
      {/* Title Box */}
      <Flex
        top={0}
        right={0}
        w="100%"
        bg="#EFEFEF"
        border="1px solid #7A7A7A"
        borderRadius="10px"
        justify="center"
        align="center"
        padding={2}
        mb={4}
      >
        <Text>Quick Tasks</Text>
      </Flex>

      <Box
        bg="#FDF4E3"
        p={4}
        h="full"
      >
        {"Content Here"}
      </Box>
    </Box>
  );
};

export default RightSection;
