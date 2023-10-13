import React from 'react';
import styled from '@emotion/styled';
import { Flex, Button } from "@chakra-ui/react";

const ResponsiveText = styled.h1`
  font-size: 40px;
  font-weight: normal;  // Add this line to make the text not bold

  @media (max-width: 1200px) {
    font-size: 36px;
  }

  @media (max-width: 900px) {
    font-size: 30px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const CenterTopSection = () => {
  return (
    <Flex 
      direction="column"
      align="center"
      position="absolute"
      top="-1%"
      left="50%"
      transform="translate(-50%, 0)"
      zIndex="2" 
    >
      <ResponsiveText>The Eisenhower Matrix</ResponsiveText>
      <Flex mt={-20}>
        <LinkBox href="https://pomofocus.io" text="Pomodoro" />
        <LinkBox href="https://calendar.google.com" text="Calendar" />
        <LinkBox href="https://elms.umd.edu/" text="Canvas" />
        {/* <LinkBox href="https://www.gradescope.com/" text="Gradescope" /> */}

      </Flex>
    </Flex>
  );
};

const LinkBox = ({ text, href }) => {
  return (
    <Button 
      as="a" 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      m={10} 
      p={4} 
      borderRadius="10px"
      bg="#E3DCF9"
      border="1px solid #7A7A7A"
      textDecoration="none"  
      color="black"  
      width="120px"  
    >
      {text}
    </Button>
  );
};

export default CenterTopSection;
