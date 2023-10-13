// NestedContainers.js
import { Box, Grid, Flex, Text } from "@chakra-ui/react";

const titles = [
  'Important & Urgent',
  'Important & Non-Urgent',
  'Non-Important & Urgent',
  'Staging Area'
];  

const NestedContainers = () => {
  return (
    <Box
      position="absolute"
      top="20%"
      w="55%"
      mx="auto"
      left={0}
      right={0}
      h="85%"
      borderRadius="10px"
    >
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={6}
        h="100%"
        autoRows="1fr"
      >
        {titles.map((title, i) => (
          <Box
            key={i}
            w="95%"
            h="95%"
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
              bg="#EFEFEF"
              border="1px solid #7A7A7A"  // Changed to use border property
              borderRadius="10px"
              justify="center"
              align="center"
              padding={2}
              zIndex="1"  // Ensure that the title box is above the container
            >
              <Text>{title}</Text>
            </Flex>

            {`Container ${i + 1}`}
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default NestedContainers;
