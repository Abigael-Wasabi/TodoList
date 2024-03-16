import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import axios from 'axios';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [subtask, setSubTask] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleTaskChange = (event) =>{
        setTask(event.target.value);
        updateButtonState(event.target.value);
    };

    const handleSubTask = (event) =>{
        setSubTask(event.target.value);
        updateButtonState(event.target.value);
    };

    const isTaskValid = (name) => {
        const nameRegex = /^[a-zA-Z]+$/;
        return nameRegex.test(name);
    };

    const updateButtonState = (task) => {
        if (isTaskValid(task) && (subtask === '' || isTaskValid(subtask))) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    };

    const handleAddTask = async(event) => {
        event.preventDefault();
        console.log("Task:", task);
        try{
            const response= await axios.post('http://localhost:4000/tasks/addtask', {
                task:task,
                subtask:subtask,
            });
            console.log(response.data);//response from the server
            alert("Task added successfully");
    
            if (!isTaskValid(task) || !isTaskValid(subtask)) {
                console.log("Invalid task or subtask.");
                alert.log("Invalid task or subtask.");
                return;
            }
        }catch(err){
            if (err.response && err.response.status === 400) {
                alert(`Task with name ${task} already exists`);
                console.log(err.response.data.message);
            }
            else {
                alert('An error occurred. Please try again later.');
            }
            console.log(err.message);
        } finally {
            updateButtonState(task);
        }
    };

    useEffect(() => {
        const getTasks = async () => {
            try {
                const response = await axios.get('http://localhost:4000/tasks/gettasks');
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
                alert("Error displaying tasks");
            }
        };
        getTasks();
    }, []);

    const handleCompleteTask = async (taskId) => {
        try {
            const response= await axios.post('http://localhost:4000/tasks/complete',{taskId});
            setTask(response.data);
            alert('Task completed successfully');
        } catch (error) {
            console.error('Error completing task:', error);
            alert('Error completing task');
        }
    };

    const handleUndoCompleteTask = async (taskId) => {
        try {
            const response= await axios.post('http://localhost:4000/tasks/undoComplete',{taskId});
            setTask(response.data);
            console.log('Undo complete task:', taskId);
            alert('Task marked as incomplete');
        } catch (error) {
            console.error('Error undoing complete task:', error);
            alert('Error undoing complete task');
        }
    };

    return (
        <div style={{height: '100vh'}}>
            <Navbar/>
            <p style={{textAlign: 'center', fontWeight: 'bold'}}>MY TASKS &#128522;</p>
            <table className='table table-striped table-bordered'>
                <thead style={{textAlign:'center'}}>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                    <tr>
                        <td>
                            <input 
                                type="text"
                                value={task.name}
                                onChange={handleTaskChange}
                                placeholder='task'></input>

                            <input
                                type="text"
                                value={subtask}
                                onChange={handleSubTask}
                                placeholder='sub task'></input>

                            <button disabled={
                                !isTaskValid(task) ||
                                !isTaskValid(subtask) ||
                                isButtonDisabled}
                                onClick={handleAddTask}>Add task
                            </button>
                        </td>
                        
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td colSpan="4" style={{ textAlign: 'center',}}>
                            <DropdownButton title="My Tasks">
                                <table className='table table-striped table-bordered text-center'>
                                    <thead>
                                        <tr>
                                            <th>Task</th>
                                            <th>Subtask</th>
                                            <th>Complete</th>
                                            <th>Undo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tasks.map((taskItem) => (
                                            <tr key={taskItem.taskID}>
                                                <td>{taskItem.task}</td>
                                                <td>{taskItem.subtask}</td>
                                                <td>
                                                    <button onClick={() => handleCompleteTask(taskItem.taskID)}>Complete</button>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleUndoCompleteTask(taskItem.taskID)}>Undo Complete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </DropdownButton>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Footer/>
        </div>
    )
}

export default Tasks;
