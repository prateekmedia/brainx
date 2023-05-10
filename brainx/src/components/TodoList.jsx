import React from "react";
import styled from "styled-components"

const TodoListStyle = styled.div`
margin : 0 auto;
padding : 1 rem;
width: 500px;
background-color: #141414;
border-radius: 5px;
`;

export default function TodoList(){
    document.body.style = "background:#3ad4b0";
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    }

    return(
        <TodoListStyle>
            <h1>Brainx</h1>
            <form onSubmit={""}>
                <input placeholder="Add Task" />
                <button type="submit">Add</button>
            </form>

            <ul>
                <li>task1</li>
                <li>task2</li>
                <li>task3</li>
            </ul>
        </TodoListStyle>
    )
}