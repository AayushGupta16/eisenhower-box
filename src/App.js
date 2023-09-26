import React, { useState } from 'react';
import styled from '@emotion/styled';
import './App.css';




const Container = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  background-color: #f4f6f8;
  padding: 20px;
  height: 100vh;
`;

const Column = styled.div`
  flex: 1;
  margin: 10px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow: auto;
`;

const TaskComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 8px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const TaskText = styled.div`
  cursor: pointer;
`;

const TaskActions = styled.div`
  display: flex;
  gap: 10px;
`;

const DeleteIcon = styled.span`
  color: red;
  cursor: pointer;
`;

const DescriptionBox = styled.textarea`
  width: 100%;
  min-height: 150px;
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-size: 16px;
  margin-top: 20px;
  resize: vertical;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

function App() {
  const [tasks, setTasks] = useState({
    'urgent-important': [],
    'not-urgent-important': [],
    'urgent-not-important': [],
    'not-urgent-not-important': [],
    'quick-tasks': [],
  });

  const [completedTasks, setCompletedTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [description, setDescription] = useState('');
  const [descriptionInput, setDescriptionInput] = useState("");

  const addTask = (quadrant, task) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [quadrant]: [...prevTasks[quadrant], { title: task, description: '' }],
    }));
  };

  const deleteTask = (quadrant, index) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks[quadrant]];
      newTasks.splice(index, 1);
      return { ...prevTasks, [quadrant]: newTasks };
    });
  };

  const markAsComplete = (quadrant, index) => {
    const taskToComplete = tasks[quadrant][index];
    setCompletedTasks([...completedTasks, taskToComplete]);
    deleteTask(quadrant, index);
  };

  
  const handleTaskCompletion = (task, quadrant) => {
    // Move task to completed tasks
    setCompletedTasks(prevTasks => [...prevTasks, task]);

    // Remove task from its current quadrant
    setTasks(prevTasks => {
        const updatedTasks = { ...prevTasks };
        updatedTasks[quadrant] = updatedTasks[quadrant].filter(t => t !== task);
        return updatedTasks;
    });
};

const updateTaskDescription = (selectedTask, newDescription) => {
  // Find the quadrant or section the task belongs to
  const taskType = Object.keys(tasks).find(key => 
      tasks[key].some(task => task.title === selectedTask.title)
  );

  if (taskType) {
      // Find the specific task
      const taskIndex = tasks[taskType].findIndex(task => task.title === selectedTask.title);
      
      // Create a copy of the tasks object to avoid mutating state directly
      const updatedTasks = { ...tasks };

      // Update the task's description
      if (updatedTasks[taskType][taskIndex]) {
          updatedTasks[taskType][taskIndex].description = newDescription;
      }

      // Update the tasks state
      setTasks(updatedTasks);
  }
}

const handleTaskDeletion = (task, quadrant) => {
    // Remove task from its current quadrant
    setTasks(prevTasks => {
        const updatedTasks = { ...prevTasks };
        updatedTasks[quadrant] = updatedTasks[quadrant].filter(t => t !== task);
        return updatedTasks;
    });
};

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setDescription(task.description);
  };
  
  return (
    <div className="App">
        <header>
            <h1>Eisenhower Box</h1>
        </header>
        
        <div className="main-content">
            <div className="side-tasks left-side">
                <section className="completed-tasks">
                    <h2>Completed Tasks</h2>
                    <button onClick={() => setCompletedTasks([])}>Clear Completed</button>
                    <ul>
                        {completedTasks.map((task, index) => (
                            <li key={index}>
                                <span className="task" onClick={() => handleTaskClick(task)}>{task.title}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            <div className="eisenhower-box">
                {Object.keys(tasks).filter(key => key !== 'quick-tasks').map(key => (
                    <div className="quadrant" key={key}>
                        <h2>{key.replace(/-/g, ' ').toUpperCase()}</h2>
                        <ul>
                            {tasks[key].map((task, index) => (
                                <li key={index}>
                                    <span className="task" onClick={() => handleTaskClick(task)}>{task.title}</span>
                                    <div className="task-actions">
                                        <button className="task-done" onClick={() => handleTaskCompletion(task, key)}>Done</button>
                                        <button className="task-cancel" onClick={() => handleTaskDeletion(task, key)}>Cancel</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <input
                            type="text"
                            placeholder={`Add task to ${key.replace(/-/g, ' ')}`}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && e.target.value) {
                                    addTask(key, e.target.value);
                                    e.target.value = "";
                                }
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="side-tasks right-side">
                <section className="quick-tasks">
                    <h2>Quick Tasks</h2>
                    {tasks['quick-tasks'].map((task, index) => (
                        <div className="task-component" key={index}>
                            <span className="task" onClick={() => handleTaskClick(task)}>{task.title}</span>
                            <div className="task-actions">
                                <button className="task-done" onClick={() => handleTaskCompletion(task, 'quick-tasks')}>Done</button>
                                <button className="task-cancel" onClick={() => handleTaskDeletion(task, 'quick-tasks')}>Cancel</button>
                            </div>
                        </div>
                    ))}
                    <input
                        type="text"
                        placeholder="Add quick task"
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && e.target.value) {
                                addTask('quick-tasks', e.target.value);
                                e.target.value = "";
                            }
                        }}
                    />
                </section>
            </div>
        </div>

        {selectedTask && (
    <div className="task-detail">
        <h3>{selectedTask.title}</h3>
        <textarea
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
            placeholder="Enter or edit description..."
        />
        <button onClick={() => {
            updateTaskDescription(selectedTask, descriptionInput);
            setSelectedTask(null); // Deselect task after update
        }}>
            Save Description
        </button>
    </div>
)}
    </div>
);
        }
export default App;

