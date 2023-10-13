import { Box, Grid, Flex, Text } from "@chakra-ui/react";

const titles = [
  'Urgent',
  'Not Urgent',
  'Staging Area'
];

const titleBoxColors = [
  'rgba(244, 107, 107, 0.72)', 
  '#FFBA7A', 
  '#D4D4D4'
];  

const NestedContainers = () => {
  return (
    <Box
      position="absolute"
      top="18%"
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
        gap={2}
        h="100%"
      >
        {titles.slice(0, 2).map((title, i) => (  
          <Box
            key={i}
            w="95%"
            h="100%"
            bg="#FDF4E3"
            p={2}
            boxShadow="lg"
            borderRadius="10px"
            position="relative"
            border="1px solid #CDCDCD"

          >
            {/* Title Box */}
            <Flex
              position="absolute"
              top={0}
              left={0}
              h="13%" 
              w="99%" 
              bg={titleBoxColors[i]}
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
          w="97%"
          h="80%"
          mt={15} 
          bg="#FDF4E3"
          p={2}
          boxShadow="lg"
          borderRadius="10px"
          position="relative"
          border="1px solid #CDCDCD"
        >
          {/* Title Box */}
          <Flex
            position="absolute"
            top={0}
            left={0}
            h="13%" 
            w="99.5%" 
            bg={titleBoxColors[2]}
            border="1px solid #7A7A7A"
            borderRadius="10px"
            justify="center"
            align="center"
            padding={2}
            zIndex="1"
          >
            <Text fontSize="20px">{titles[2]}</Text>  
          </Flex>

        </Box>
      </Grid>
    </Box>
  );
};

export default NestedContainers;
