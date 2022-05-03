import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./List";
import ToDoItems from "./ToDoItems";

const ToDoesPage: FC = () => {
    const [toDoes, setToDoes] = useState<ITodo[]>([]);

    useEffect( () => {

        fetchToDoes();

    }, []);

    async function fetchToDoes() {
        try {
            const response = await  axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setToDoes(response.data)

        } catch (e) {
            alert(e)
        }

    }    return (
        <div>
            <List items={toDoes}
                  renderItems={(toDo: ITodo) => <ToDoItems todo={toDo} key={toDo.id} /> }
            />
        </div>
    );
};

export default ToDoesPage;