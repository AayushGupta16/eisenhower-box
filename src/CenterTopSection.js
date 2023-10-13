// CenterTopSection.js
import { Box, Flex, Text } from "@chakra-ui/react"; 

const CenterTopSection = () => {
  return (
    <Box 
      position="relative"
      top="5%" 
      w="50%" 
      left="25%"
      h="10vh"
      bg="#FDF4E3"
      p={4}
      borderRadius="10px"
    >
      {/* Title Box */}
      <Flex
        position="absolute"
        top="0%"  
        left="50%"  
        transform="translate(-50%, -50%)"
        bg="#EFEFEF"
        border="1px solid #7A7A7A"
        borderRadius="10px"
        justify="center"
        align="center"
        padding={2}
        minW="40%"  // Added minimum width property to make the title box wider
      >
        <Text>Suggested Next Tasks</Text>
      </Flex>

      {"Top Center"}
    </Box>
  );
};

export default CenterTopSection;
