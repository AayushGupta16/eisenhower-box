import React, { useEffect, useState } from 'react';
import { Box, Flex } from "@chakra-ui/react";
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import CenterTopSection from './CenterTopSection';
import NestedContainers from './NestedContainers';
import './App.css';

function App() {
  const [completedTasks, setCompletedTasks] = useState([]);

  const loadCompletedTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setCompletedTasks(tasks);
  };

  useEffect(() => {
    loadCompletedTasks();
  }, []);

  const handleTaskComplete = (task) => {
    setCompletedTasks(prevTasks => {
      const updatedTasks = [...prevTasks, task];
      localStorage.setItem('completedTasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const resetTasks = () => {
    setCompletedTasks([]);
    localStorage.removeItem('completedTasks');
  };

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
        <LeftSection 
          completedTasks={completedTasks} 
          resetTasks={resetTasks}
        />
        <CenterTopSection />
        <Box flex="1">
          <NestedContainers onTaskComplete={handleTaskComplete} />
        </Box>
        <RightSection onTaskComplete={handleTaskComplete} />
      </Flex>
    </Box>
  );
}

export default App;
