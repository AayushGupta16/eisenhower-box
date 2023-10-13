
import React from 'react';
import { Flex, Text, Button } from "@chakra-ui/react";

const CenterTopSection = () => {
  return (
    <Flex 
      direction="column"
      align="center"
      position="absolute"
      top="-2%"
      left="50%"
      transform="translate(-50%, 0)"
      zIndex="2" 
    >
      <Text fontSize="48px">Eisenhower Matrix</Text>
      <Flex mt={-30}>
        <LinkBox href="https://pomofocus.io" text="Pomodoro" />
        <LinkBox href="https://calendar.google.com" text="Calendar" />
        <LinkBox href="https://elms.umd.edu/" text="Canvas" />
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
      m={5} 
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

//FOR ADD EVENT 
/** 
import React, { useState, useEffect } from 'react';
import {
  Box, Flex, Text, Button, Input, IconButton
} from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons';

const CenterTopSection = () => {
  const [links, setLinks] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newLink, setNewLink] = useState({ text: '', href: '' });

  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem('links')) || [];
    setLinks(savedLinks);
  }, []);

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));
  }, [links]);

  const addLink = () => {
    if (newLink.text && newLink.href) {
      setLinks([...links, newLink]);
      setNewLink({ text: '', href: '' });
      setIsAdding(false);
    }
  };

  const deleteLink = (text) => {
    const updatedLinks = links.filter(link => link.text !== text);
    setLinks(updatedLinks);
  };

  return (
    <Flex 
      direction="column"
      align="center"
      position="absolute"
      top="0%"
      left="50%"
      transform="translate(-50%, 0)"
      zIndex="2" 
    >
      <Text fontSize="48px">The Eisenhower Box</Text>
      <Flex mt={-25}>
        <LinkBox href="https://pomofocus.io" text="Pomodoro" />
        <LinkBox href="https://calendar.google.com" text="Calendar" />
        {links.map((link, index) => (
          <Box key={index} position="relative">
            <LinkBox href={link.href} text={link.text} />
            <IconButton 
              icon={<CloseIcon />} 
              size="xs" 
              position="absolute" 
              top="0" 
              right="0" 
              onClick={() => deleteLink(link.text)} 
            />
          </Box>
        ))}
        {isAdding ? (
          <>
            <Input 
              value={newLink.text}
              onChange={(e) => setNewLink({ ...newLink, text: e.target.value })}
              onBlur={addLink}
              size="sm"
            />
            <Input 
              placeholder="URL"
              value={newLink.href}
              onChange={(e) => setNewLink({ ...newLink, href: e.target.value })}
              onBlur={addLink}
              onKeyPress={(e) => e.key === 'Enter' && addLink()}
              size="sm"
            />
          </>
        ) : (
          <Button onClick={() => setIsAdding(true)}>
            + Add Link
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

const LinkBox = ({ text, href, onDelete }) => {
  const fullUrl = href.startsWith('http://') || href.startsWith('https://')
    ? href
    : `http://${href}`;

  return (
    <Button 
      as="a" 
      href={fullUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      m={2} 
      p={4} 
      borderRadius="md"
      bg="#EFEFEF"
      border="1px solid #7A7A7A"
    >
      {text}
    </Button>
  );
};


export default CenterTopSection;
*/