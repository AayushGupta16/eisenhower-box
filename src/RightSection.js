import React, { useState, useEffect } from 'react';
import { Box, Grid, Flex, Text, Input, IconButton } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

const RightSection = ({ onTaskComplete }) => {
  const [showIcons, setShowIcons] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('rightTasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('rightTasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setTasks([...tasks, e.target.value]);
      setIsAdding(false);
    }
  };

  const completeTask = (index) => {
    onTaskComplete(tasks[index]);
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index)); // Updated this line
  };

  const removeTask = (index) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index)); // Updated this line
  };

  return (
    <Box
      w="22%"
      h="85vh"
      mt="90px"
      mr="25px"
      bg="#FDF4E3"
      p={4}
      border="1px solid #CDCDCD"
      borderRadius="10px"
      position="relative"
    >
      {/* Title Box */}
      <Flex
        mt="-5px"
        ml="-5px"
        top={0}
        right={0}
        w="101%"
        h="6%"
        bg='rgba(68, 116, 238, 0.61)'
        border="1px solid #7A7A7A"
        borderRadius="10px"
        justify="center"
        align="center"
        padding={2}
        mb={4}
      >
        <Text fontSize="20px">Quick Tasks</Text>
      </Flex>

      <Box
        bg="#FDF4E3"
        p={8}
        h="full"
      >
        {tasks.map((task, index) => (
          <Flex 
          key={index} 
          borderRadius="5"
          className="taskItem"
          onMouseEnter={() => setShowIcons(index)}
          onMouseLeave={() => setShowIcons(null)}
        >
          <Text flex="1" mb={0} lineHeight="tight" pl={2} minH="0">{task}</Text> {/* Added left padding here */}
          {showIcons === index && (
            <>
              <IconButton 
                icon={<CheckIcon />} 
                onClick={() => completeTask(index)} 
                borderRadius="5"
                ight margin here
              />
              <IconButton 
                icon={<CloseIcon />} 
                onClick={() => removeTask(index)} 
                borderRadius="5"
              />
            </>
          )}
        </Flex>
        ))}
      </Box>

      {isAdding ? (
        <Input
          position="absolute"
          bottom={15}
          left="50%"
          transform="translateX(-50%)"
          mb={4}
          onKeyPress={handleKeyPress}
          onBlur={() => setIsAdding(false)}
          autoFocus
          borderRadius="10px"  // Added rounded borders
          bg="#FDF4E3" // Set the background color to match the container
          placeholder="" // Placeholder text
        />
      ) : (
        <Flex
          position="absolute"
          bottom={5}
          left="50%"
          transform="translateX(-50%)"
          mb={4}
          onClick={handleAddClick}
          cursor="pointer"
        >
          <Text fontSize="14px">+ Add Task</Text>
        </Flex>
      )}
    </Box>
  );
};

export default RightSection;
