import React, { useState } from 'react';
import { Box, Flex, Text, Input, IconButton } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'; // Import icons

const RightSection = ({ onTaskComplete }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [tasks, setTasks] = useState([]);

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
          <Flex key={index} mb={2} align="center">
            <Text flex="1">{task}</Text>
            <IconButton icon={<CheckIcon />} onClick={() => completeTask(index)} /> {/* Changed here */}
            <IconButton icon={<CloseIcon />} onClick={() => removeTask(index)} ml={2} /> {/* Changed here */}
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
