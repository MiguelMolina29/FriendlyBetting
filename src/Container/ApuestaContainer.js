import React, { useState, useEffect } from 'react';
import Task from '../Components/Task';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { TaskClass } from '../utils/TaskClass';

const ApuestaContainer = () => {
    const [tasks, setTasks] = useState(null);
    const URL = 'https://apuestas-d1f27.firebaseio.com/task.json';

    const getTasks = () => {
        axios.get(URL)
            .then((res) => setTasks(res.data))
            .catch((error) => alert(error));
    }

    const deleteTask = (id) =>{
        axios.delete(`https://apuestas-d1f27.firebaseio.com/task/${id}.json`)
        .then(() => getTasks())
        .catch((error) => alert(error))
    }

    const completeTask = (category,  title, monto,  done, id ) =>{
        const currentTask = new TaskClass(category, title, monto, done, id );
        console.log(currentTask);
        axios.patch(URL, currentTask)
        .then(() => getTasks())
        .catch((error) => alert(error))
    }

    useEffect(() => {
        getTasks();
    }, [])

    return (
        <React.Fragment>
            <main className="main-container">
                <Navbar />
                <div>
                    {tasks ? Object.keys(tasks).map((id) => <Task 
                    key={id} 
                    id={id} 
                    title={tasks[id].title} 
                    done={tasks[id].done} 
                    category={tasks[id].category}
                    monto={tasks[id].monto}
                    completeTask={completeTask}
                    deleteTask={deleteTask} />)
                        :<h1 className="text-primary text-center">No hay apuestas actuales</h1>
                }

                </div>
            </main>

        </React.Fragment>
    )
}

export default ApuestaContainer;
