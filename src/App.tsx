import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./components/types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import ToDoItems from "./components/ToDoItems";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import UserPage from "./components/UserPage";
import ToDoesPage from "./components/ToDoesPage";
import UserItemPage from "./components/UserItemPage";


function App() {

    // const users: IUser[] = [
    //     {
    //         id: 1,
    //         name: "Leanne Graham",
    //         email: "Sincere@april.biz",
    //         address: {street: "Kulas Light", city: "Gwenborough", zipcode: "92998-3874"}
    //     },
    //     {
    //         id: 2,
    //         email: "Sincere@april.bizsssss",
    //         name: "dfdfdfLeanne Graham2222",
    //         address: {street: "Kulas Light", city: "Gwenborough", zipcode: "92998-3874"}
    //     }
    // ]



  return (
    <div className="App">
        <BrowserRouter>
            <Link to={'/users'}> Users</Link>
            <Link to={'/todoes'}> ToDOes</Link>
        <Routes>

            <Route path={'/users'} element={<UserPage/>}/>
            <Route path={'/todoes'} element={ <ToDoesPage/>}/>
            <Route path={'/users/:id'} element={ <UserItemPage/>}/>

        </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
