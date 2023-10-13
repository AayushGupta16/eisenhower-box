// NestedContainers.js
import { Box, Grid, Flex, Text } from "@chakra-ui/react";

const titles = [
  'Urgent',
  'Not Urgent',
  'Staging Area'
];

// Updated the colors array to reflect the removal of the "Non-Important & Urgent" section
const titleBoxColors = [
  'rgba(244, 107, 107, 0.72)', 
  '#FFBA7A', 
  '#7A7A7A'
];  

const NestedContainers = () => {
  return (
    <Box
      position="absolute"
      top="20%"
      w="50%"
      mx="auto"
      left={0}
      right={0}
      h="85%"
      borderRadius="10px"
    >
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="auto auto" 
        gap={6}
        h="100%"
      >
        {titles.slice(0, 2).map((title, i) => (  
          <Box
            key={i}
            w="95%"
            h="100%"
            bg="#FDF4E3"
            p={4}
            boxShadow="lg"
            borderRadius="10px"
            position="relative"
          >
            {/* Title Box */}
            <Flex
              position="absolute"
              top={0}
              left={0}
              w="100%" 
              bg={titleBoxColors[i]}  // Applied colors from the titleBoxColors array
              border="1px solid #7A7A7A"
              borderRadius="10px"
              justify="center"
              align="center"
              padding={2}
              zIndex="1"
            >
              <Text fontSize="20px">{title}</Text> 
            </Flex>
          </Box>
        ))}
        {/* Staging Area */}
        <Box
          gridColumn="span 2" 
          w="95%"
          h="80%"
          mt={25}  // Added margin-top here
          bg="#FDF4E3"
          p={4}
          boxShadow="lg"
          borderRadius="10px"
          position="relative"
        >
          {/* Title Box */}
          <Flex
            position="absolute"
            top={0}
            left={0}
            w="100%" 
            bg={titleBoxColors[2]}  // Applied the third color from the titleBoxColors array
            border="1px solid #7A7A7A"
            borderRadius="10px"
            justify="center"
            align="center"
            padding={2}
            zIndex="1"
          >
            <Text fontSize="20px">{titles[2]}</Text>  
          </Flex>

          Container 3
        </Box>
      </Grid>
    </Box>
  );
};

export default NestedContainers;
