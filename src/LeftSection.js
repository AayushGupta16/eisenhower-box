import React, { useEffect } from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";

const LeftSection = ({ completedTasks, resetTasks }) => { // Included resetTasks as a prop

  const calculateTimeUntil5am = () => {
    const now = new Date();
    const fiveAM = new Date(now);
    fiveAM.setHours(5, 0, 0, 0);
    if (now > fiveAM) {
      fiveAM.setDate(fiveAM.getDate() + 1); // It's already past 5am today, set for 5am next day
    }
    return fiveAM - now;
  };

  useEffect(() => {
    const timeUntil5am = calculateTimeUntil5am();
    const timerId = setTimeout(() => {
      resetTasks();
    }, timeUntil5am);

    return () => clearTimeout(timerId); // Cleanup on unmount or if dependencies change
  }, [resetTasks]);

  return (
    <Box
      w="22%"
      h="85vh"
      bg="#FDF4E3"
      p={4}
      mt="90px"
      ml="25px"
      border="1px solid #CDCDCD"
      borderRadius="10px"
      position="relative"
    >
      {/* Title Box */}
      <Flex
        mt="-5px"
        ml="-5px"
        top={0}
        left={0}
        w="101%"
        h="6%"
        bg='rgba(135, 200, 134, 0.67)'
        border="1px solid #7A7A7A"
        borderRadius="10px"
        justify="center"
        align="center"
        padding={2}
        mb={4}
      >
        <Text fontSize="20px">Completed Tasks</Text>
      </Flex>

      <Box bg="#FDF4E4" p={4} h="full">
        {completedTasks.map((task, index) => (
          <Text key={index} mb={2}>{task}</Text>
        ))}
      </Box>

      {/* Updated this part */}
      <Flex
        position="absolute"
        bottom={5}
        left="50%"
        transform="translateX(-50%)"
        mb={4}
      >
        <Text fontSize="14px">{completedTasks.length} Tasks Completed Today</Text> 
      </Flex>
    </Box>
  );
};

export default LeftSection;
