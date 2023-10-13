import { Box, Grid, Flex, Text, Input, IconButton } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import posthog from 'posthog-js';

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

const NestedContainers = ({ onTaskComplete }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [[], [], []];
  });

  const [isAdding, setIsAdding] = useState([false, false, false]);
  const [showIcons, setShowIcons] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleKeyPress = (e, index) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[index].push(e.target.value.trim());
      setTasks(updatedTasks);
      setIsAdding([false, false, false]);
      posthog.capture('Task Entered', { section: titles[index] });
    }
  };

  const handleComplete = (boxIndex, taskIndex) => {
    onTaskComplete(tasks[boxIndex][taskIndex]);
    const updatedTasks = [...tasks];
    updatedTasks[boxIndex].splice(taskIndex, 1);
    setTasks(updatedTasks);
    posthog.capture('Task Completed', { section: titles[boxIndex] });
  };

  const handleRemove = (boxIndex, taskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[boxIndex].splice(taskIndex, 1);
    setTasks(updatedTasks);
    posthog.capture('Task Removed', { section: titles[boxIndex] });
  };
  
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
            w="98%"
            h="100%"
            bg="#FDF4E3"
            p={0}
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

            {/* New wrapping Box for tasks */}
            <Box 
              position="absolute"
              top="13%"  
              left="0"
              h="87%"  
              w="100%"
            >
              <Box bg="#FDF4E4" p={8} h="full">
                {tasks[i].map((task, index) => (
                  <Flex 
                    borderRadius="5"
                    className="taskItem"
                    onMouseEnter={() => setShowIcons({taskIndex: index, sectionIndex: i})}
                    onMouseLeave={() => setShowIcons(null)}
                  >
                    <Text flex="1" mb={0} lineHeight="tight" pl={2} minH="0">{task}</Text>
                    {showIcons && showIcons.taskIndex === index && showIcons.sectionIndex === i && (
                      <>
                        <IconButton 
                          icon={<CheckIcon />} 
                          onClick={() => handleComplete(i, index)} 
                          borderRadius="5"
                        />
                        <IconButton 
                          icon={<CloseIcon />} 
                          onClick={() => handleRemove(i, index)} 
                          borderRadius="5"
                        />
                      </>
                    )}
                  </Flex>
                ))}
              </Box>
            </Box>

            {/* Add Task Text */}
            {isAdding[i] ? (
              <Input
                position="absolute"
                bottom={5}
                left="50%"
                transform="translateX(-50%)"
                onKeyPress={(e) => handleKeyPress(e, i)}
                onBlur={() => setIsAdding([false, false, false])}
                autoFocus
                borderRadius="10px"
                bg="#FDF4E3"
                placeholder=""
              />
            ) : (
              <Flex
                position="absolute"
                bottom={5}
                mb="2"
                left="50%"
                transform="translateX(-50%)"
                zIndex="1"
                onClick={() => {
                  let addingState = [false, false, false];
                  addingState[i] = true;
                  setIsAdding(addingState);
                }}
                cursor="pointer"
              >
                <Text fontSize="14px">+ Add Task</Text>
              </Flex>
            )}
          </Box>
        ))}

        {/* Staging Area */}
        <Box
          gridColumn="span 2"
          w="99%"
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
            w="100%" 
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

          {/* New wrapping Box for tasks */}
          <Box 
            position="absolute"
            top="13%"  
            left="0"
            h="87%"  
            w="100%"
          >
            <Box bg="#FDF4E4" p={8} h="full">
              {tasks[2].map((task, index) => (
                <Flex 
                  borderRadius="5"
                  className="taskItem"
                  onMouseEnter={() => setShowIcons({taskIndex: index, sectionIndex: 2})}
                  onMouseLeave={() => setShowIcons(null)}
                >
                  <Text flex="1" mb={0} lineHeight="tight" pl={2} minH="0">{task}</Text>
                  {showIcons && showIcons.taskIndex === index && showIcons.sectionIndex === 2 && (
                    <>
                      <IconButton 
                        icon={<CheckIcon />} 
                        onClick={() => handleComplete(2, index)} 
                        borderRadius="5"
                      />
                      <IconButton 
                        icon={<CloseIcon />} 
                        onClick={() => handleRemove(2, index)} 
                        borderRadius="5"
                      />
                    </>
                  )}
                </Flex>
              ))}
            </Box>
          </Box>

          {/* Add Task Text */}
          {isAdding[2] ? (
            <Input
              position="absolute"
              bottom={15}
              left="50%"
              transform="translateX(-50%)"
              onKeyPress={(e) => handleKeyPress(e, 2)}
              onBlur={() => setIsAdding([false, false, false])}
              autoFocus
              borderRadius="10px"
              bg="#FDF4E3"
              placeholder=""
            />
          ) : (
            <Flex
              position="absolute"
              bottom={5}
              left="50%"
              transform="translateX(-50%)"
              zIndex="1"
              onClick={() => {
                let addingState = [false, false, false];
                addingState[2] = true;
                setIsAdding(addingState);
              }}
              cursor="pointer"
            >
              <Text fontSize="14px">+ Add Task</Text>
            </Flex>
          )}
        </Box>
      </Grid>
    </Box>
  );
};

export default NestedContainers;
