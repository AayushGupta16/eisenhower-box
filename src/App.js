// App.js
import {ChakraProvider, Box, Flex } from "@chakra-ui/react";
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import CenterTopSection from './CenterTopSection';
import NestedContainers from './NestedContainers';
import './App.css';


function App() {
  return (
    <Box bg="#F3EAF1" minH="100vh" position="relative">
      <Flex width="full">
        <LeftSection />
        <CenterTopSection />
        <Box flex="1">
          <NestedContainers />
        </Box>
        <RightSection />
      </Flex>
    </Box>

  );
}

export default App;
