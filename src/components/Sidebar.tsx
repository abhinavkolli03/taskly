import React, { FC } from 'react';
import {useSelector} from 'react-redux'
import CreateNewList from './CreateNewList';
import Notification from './Notification';
import Lists from './Lists';
import { RootState } from '../storing/storage';


const Sidebar: FC = () => {
    const notificationMsg = useSelector((state: RootState) => state.notification.message);

    return(
        <div className="column is-5">
            <CreateNewList />
            <Notification msg={notificationMsg} />
            <Lists />
        </div>
    );
}

export default Sidebar;