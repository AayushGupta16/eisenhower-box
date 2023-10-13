import { Box, Flex, Text, Input, Button, VStack } from "@chakra-ui/react";
import { useState } from 'react';

const RightSection = () => {
  const [tasks, setTasks] = useState([]);  // State to store tasks
  const [inputValue, setInputValue] = useState('');  // State to store input value

  const handleAddTask = () => {  // Function to add task
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <Box
      w="22%"
      h="95vh"
      mt="100px"
      mr="25px"
      bg="#FDF4E3"
      p={4}
      borderRadius="10px"
    >
      {/* Title Box */}
      <Flex
        top={0}
        right={0}
        w="100%"
        bg='rgba(68, 116, 238, 0.61)'
        border="1px solid #7A7A7A"
        borderRadius="10px"
        justify="center"
        align="center"
        padding={2}
        mb={4}
      >
        <Text>Quick Tasks</Text>
      </Flex>

      <Box
        bg="#FDF4E3"
        p={4}
        h="full"
      >
        <Input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
          mb={4}
        />
        <Button onClick={handleAddTask} mb={4}>Add Task</Button>
        <VStack align="start" spacing={2}>
          {tasks.map((task, index) => (
            <Text key={index}>{task}</Text>  // Display each task
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default RightSection;
