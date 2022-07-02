import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../storing/storage';
import Header from './Header';
import Header2 from './Header2';
import Tasks from './Tasks';

const MainContent: FC = () => {
    const selectedList = useSelector((state: RootState) => state.list.selectedList)

    var choice = null;
    if(selectedList) {
        choice = <Tasks selectedList={selectedList}/>
    } else {
        choice = <Header2 title="No List Selected!" subtitle="Time to get productive..."/>
    }

    return(
        <div className="column is-8">
            <div className="box" style={{backgroundColor: '#fff'}}>
                {
                    choice
                }
            </div>
        </div>
    )
}

export default MainContent;