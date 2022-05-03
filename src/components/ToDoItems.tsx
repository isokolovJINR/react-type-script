import React, {FC} from 'react';
import {ITodo} from "./types/types";

interface ToDoItemProps {
    todo: ITodo
}

const ToDoItems: FC<ToDoItemProps> = ({todo}) => {
    return (
        <div style={{padding: 15, border: '1px solid red'}}>
            <input type={'checkbox'} checked={todo.completed}/>
            {todo.id} . {todo.title}
        </div>
    );
};

export default ToDoItems;
