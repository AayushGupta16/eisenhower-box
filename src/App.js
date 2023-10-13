import React, { useEffect } from 'react';
import {ChakraProvider, Box, Flex } from "@chakra-ui/react";
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import CenterTopSection from './CenterTopSection';
import NestedContainers from './NestedContainers';
import './App.css';

function App() {

  useEffect(() => {
    const maxScroll = 200; 
    const onScroll = () => {
      if (window.scrollY > maxScroll) {
        window.scrollTo(0, maxScroll);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
