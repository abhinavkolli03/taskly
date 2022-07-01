import React, { FC, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../storing/storage';
import { getLists, setListToEdit, setListIdToDelete, addList, setNotification, setSelectedList } from '../storing/actions';
import { List } from '../storing/types';

const Lists: FC = () => {
    const dispatch = useDispatch();
    const lists = useSelector((state: RootState) => state.list.lists);
    const [listName, setListName] = useState('');

    useEffect(() => {
        dispatch(getLists());
    }, [dispatch]);

    const setListToEditHandler = (id: string) => {
        dispatch(setListToEdit(id));
    } 

    const setListIdToDeleteHandler = (id: string) => {
        dispatch(setListIdToDelete(id));
    }

    const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setListName(e.currentTarget.value);
    }
    
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(listName.trim() === '') {
            return alert('List name is required!')
        }

        const newList: List = {
            id: `list-${new Date().getTime()}`,
            name: listName,
            tasks: []
        }

        dispatch(addList(newList));
        dispatch(setNotification(`"${newList.name}" list was created!`))
        setListName("");
    }

    const setChangedListHandler = (id: string) => {
        dispatch(setSelectedList(id));
    }

    return(
        <div className="panel is-primary">
        <p className="panel-heading">Your lists</p>
        <div className="card mb-3">
                <div className="card-content">
                    <form className='htmlTable' onSubmit={submitHandler}>
                        <div style={{textAlign: 'center'}} className="field row">
                            <div className="control firstDiv">
                                <input 
                                    type="text"
                                    className="input"
                                    placeholder="Add New List"
                                    name="listName"
                                    value={listName}
                                    onChange={inputChangeHandler}
                                />
                            </div>
                            <div className="control secondDiv">
                                <button type="submit" className="button is-primary"><i className="fa-solid fa-circle-plus"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        <div>
            { Object.keys(lists).length === 0
            ?
                <p className="py-4 has-text-centered">No Lists</p>
            :
                <div>
                {Object.values(lists).map((list: List) => {
                    return (
                        <div className="panel-block is-justify-content-space-between py-5 " key={list.id}>
                            <p onClick={() => setChangedListHandler(list.id)}>{list.name}</p>
                            <div>
                                <span className="panel-icon has-text-info" onClick={() => setListToEditHandler(list.id)}>
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </span>
                                <span className="panel-icon has-text-danger" onClick={() => setListIdToDeleteHandler(list.id)}>
                                    <i className="fas fa-times-circle"></i>
                                </span>
                            </div>
                        </div>
                    )
                })}
                </div>
            }
        </div>
        </div>
    );
}

export default Lists;