import React, {useState} from "react";
import styled from "styled-components"
import TodoItem from "./TodoItem";

const primaryColor = "#3ad4b0";
const TodoListStyle = styled.div`
margin : 0 auto;
padding : 1 rem;
width: 500px;
background-color: #141414;
border-radius: 5px;
box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
h1{
    color: #ddd;
    text-align: center;
    margin-bottom: 2rem;
}
form{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
}
input{
    padding: 0.5rem;
    background: #ddd;
    border: none;
    boder-radius: 5px 0 0 5px;
    width: 80%;
    transition: all 0.3s ease-in-out;
    &:hover{
        background: #fff;
        outline: none;
    }
    &:active{
        background: #fff;
        outline: none;
    }
    &:focus{
        background: #fff;
        outline: none;
    }
}
button{
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0px 5px 5px 0px;
    background: ${primaryColor};
    color: #141414;
    font-weight: 600;
    cursor: pointer;
}
`;

export default function TodoList(){

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");


    document.body.style = "background:#3ad4b0";
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");

        inputValue ==="" && alert("Add item");
        setTodos([...todos, inputValue.toUpperCase()]);
        setInputValue("");
    }

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    return(
        <TodoListStyle>
            <h1>Brainx</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Add Task" value={inputValue} onChange={handleInputChange}/>
                <button type="submit">Add</button>
            </form>

            <ul>
                {/* <TodoItem/>
                <TodoItem/>
                <TodoItem/> */}

                {todos.map((todo, index)=>(<TodoItem nr={index} todo={todo}/>))}
            </ul>
        </TodoListStyle>
    )
}

