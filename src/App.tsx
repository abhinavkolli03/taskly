import './App.css';
import Header from './components/Header';
import React, {FC, useEffect} from 'react';
import Sidebar from './components/Sidebar';
import { RootState } from './storing/storage';
import { useSelector } from 'react-redux';
import DeleteListModal from './components/DeleteListModal';
import EditListModal from './components/EditListModal';
import MainContent from './components/MainContent';
import EditTaskModal from './components/EditTaskModal';
import DeleteTaskModal from './components/DeleteTaskModal';
import AOS from 'aos'
import 'aos/dist/aos.css'

const App: FC = () => {

  const listIdToDelete = useSelector((state: RootState) => state.list.listIdToDelete);
  const listToEdit = useSelector((state: RootState) => state.list.listToEdit);
  const taskToEdit = useSelector((state: RootState) => state.list.taskToEdit);
  const taskToDelete = useSelector((state: RootState) => state.list.taskToDelete);

  return (
    <div className="App">
      <Header title="Taskly" subtitle="Check out your lists and add some tasks to them!"/>
      <div className="container px-0">
        <div className="columns">
          <Sidebar />
          <MainContent />
        </div>
      </div>
      {listIdToDelete && <DeleteListModal listId={listIdToDelete}/>}
      {listToEdit && <EditListModal list={listToEdit}/>}
      {taskToEdit && <EditTaskModal taskToEdit={taskToEdit}/>}
      {taskToDelete && <DeleteTaskModal taskToDelete={taskToDelete}/>}
      <div style={{paddingTop: '50px'}}>
        <p style={{color: 'white'}} className="bottom-end">©{new Date().getFullYear()} Abhinav Kolli. All rights reserved.</p>
        <p style={{color: 'white'}} className="bottom-end">Check out the <a href="https://github.com/abhinavkolli03/taskly">repository!</a></p>
      </div>
    </div>
  );
}

export default App;