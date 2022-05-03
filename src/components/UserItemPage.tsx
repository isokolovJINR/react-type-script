import React, {FC, useEffect, useState} from 'react';
import {IUser} from "./types/types";
import axios from "axios";
import {useParams} from "react-router-dom";


export type UserItemsPageParams ={
    id: string

}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params  = useParams() as UserItemsPageParams;

    useEffect( () => {
        fetchUsers();

    }, []);

    async function fetchUsers() {
        try {
            const response = await  axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUser(response.data)

        } catch (e) {
            alert(e)
        }

    }
    return (
        <div>
            <button>Back</button>
            <h1> Page User {user?.email}</h1>
            <div>{user?.name}</div>
        </div>
    );
};

export default UserItemPage;