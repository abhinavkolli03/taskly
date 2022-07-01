import React, { FC, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { List, Task } from '../storing/types';
import { addTask, setNotification, setTaskToDelete, setTaskToEdit } from '../storing/actions';
import { RootState } from '../storing/storage';

interface TasksProps {
  selectedList: List;
}

const Tasks: FC<TasksProps> = ({ selectedList }) => {
    const dispatch = useDispatch();
    const list = useSelector((state: RootState) => state.list.selectedList!);
    const [taskName, setTaskName] = useState('');

    const setTaskToEditHandler = (task: Task) => {
        dispatch(setTaskToEdit(task, list));
    }

    const setTaskToDeleteHandler = (task: Task) => {
        dispatch(setTaskToDelete(task, list));
    }

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setTaskName(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(taskName.trim() === '') {
        return alert('Task name is required!');
        }

        const newTask: Task = {
        name: taskName,
        id: `task-${new Date().getTime()}`,
        completed: false
        }

        dispatch(addTask(newTask, list));
        dispatch(setNotification(`Added task to list "${list.name}"`));
        setTaskName('');
    }


    const tasksTable = (
        <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400">
        <table style={{borderCollapse: 'separate', borderSpacing: '0px 4px'}} className="table is-fullwidth">
        <thead>

        </thead>
        <tbody>
            {
            selectedList.tasks.map((task: Task) => (
                <tr key={task.id} className={task.completed ? 'completed table-body' : 'table-body'}>
                    <td>
                    {task.name}
                    </td>
                    <td className="has-text-centered">
                        <button className="button is-primary is-small" onClick={() => setTaskToEditHandler(task)}>
                        <span className="icon">
                            <i className="fas fa-edit"></i>
                        </span>
                        </button>
                    </td>
                    <td className="has-text-centered">
                        <button className="button is-danger is-small" onClick={() => setTaskToDeleteHandler(task)}>
                        <span className="icon">
                            <i className="fas fa-times"></i>
                        </span>
                        </button>
                    </td>
                    <br></br>
                </tr>
            ))
            }    
        </tbody>
        </table>
        <form className="htmlTable" onSubmit={submitHandler}>
            <div className="field row">
            <div className="control firstDiv">
                <input type="text" className="input" placeholder="" value={taskName} onChange={changeHandler} />
            </div>
            <div className="control mt-2 secondDiv">
                <input type="submit" value="+ Add New Task" className="button is-primary" />
            </div>
            </div>
        </form>
        </div>
    );

    const noTasks = (
        <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400">
        <p className="py-4 has-text-centered">No Tasks</p>
        <form className="htmlTable" onSubmit={submitHandler}>
            <div className="field row">
            <div className="control firstDiv">
                <input type="text" className="input" placeholder="" value={taskName} onChange={changeHandler} />
            </div>
            <div className="control mt-2 secondDiv">
                <input type="submit" value="+ Add New Task" className="button is-primary" />
            </div>
            </div>
        </form>
        </div>
    );

    return(
        <section>
        <h2 data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400" style={{marginLeft: '1%', color: 'orangered'}} className="is-size-4 has-text-left py-4"><b>{selectedList.name}</b></h2>
        {selectedList.tasks.length === 0 ? noTasks : tasksTable}
        </section>
    );
}

export default Tasks;