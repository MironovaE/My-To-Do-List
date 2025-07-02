import {type IToDoEntity, ToDoItem, type TToDoItem} from "~/components/TODO/ToDoItem";

import './todoList.styles.css';
import React from "react";

interface IToDoList extends Pick<TToDoItem, 'onChangeItem' | 'onSaveItem' | 'onRemoveItem'>{
    todoList: IToDoEntity[]
}

export const ToDoList = ({todoList, onChangeItem, onSaveItem, onRemoveItem}: IToDoList) => {

    return (
        <div className="todoList">
            {todoList?.length  > 0 ?
                todoList.map(item => (
                    <ToDoItem
                        key={item.id}
                        item={item}
                        onChangeItem={onChangeItem}
                        onSaveItem={onSaveItem}
                        onRemoveItem={onRemoveItem}
                    />
                ))
                : <p className="todo-list-empty-wrapper">Список задач пуст!</p>
            }
        </div>
    )
}