import './App.css';
import Header from './components/Header';
import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import Sidebar from './components/Sidebar';
import Notification from './components/Notification';
import { RootState } from './storing/storage';

const App: FC = () => {
  const notificationMsg = useSelector((state: RootState) => state.notification.message);

  return (
    <div className="App">
      <Header title="Taskly" subtitle="Check out your lists and add some tasks to them!"/>
      <div className="container px-5">
        <div className="columns">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;