import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../storing/storage';
import Tasks from './Tasks';

const MainContent: FC = () => {
    const selectedList = useSelector((state: RootState) => state.list.selectedList)

    return(
        <div className="column is-8">
            <div className="box">
                {
                    selectedList && 
                        <Tasks selectedList={selectedList}/>
                }
            </div>
        </div>
    )
}

export default MainContent;