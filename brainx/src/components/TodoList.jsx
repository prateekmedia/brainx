import React, {useState, useEffect} from "react";
import styled from "styled-components"
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";


const primaryColor = "#3ad4b0";
const TodoListStyle = styled.div`
margin : 0 auto;
padding : 1 rem;
width: 500px;
background-color: #141414;
border-radius: 5px;
box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
h1, h2{
    color: #ddd;
    text-align: center;
    margin-bottom: 1rem;
}
form{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
}
input, select{
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

    //const [todos, setTodos] = useState([]);

    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
      });
      

    const [inputValue, setInputValue] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Academic");

    document.body.style = "background:#3ad4b0";

      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);
    
     
      const handleSubmit = (e) => {
        e.preventDefault();
      
        if (inputValue === "") {
          alert("Add item");
          return;
        }
      
        const newTodo = {
          id: uuidv4(), 
          todo: inputValue.toUpperCase(),
          category: selectedCategory,
        };
      
        setTodos([...todos, newTodo]);
        setInputValue("");
      };
   
      const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    };
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
      };
    const handleDeleteTodo = (index)=>{
        if(!window.confirm("Are you sure you want to delete this item?")){
            return;
        }
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return(
        <TodoListStyle>
            <h1>BrainX</h1>
            <h2>Taskmaster</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Add Task" value={inputValue} onChange={handleInputChange}/>
                
                <select name="category" 
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}>
                <option value="Academic">Academic</option>
                <option value="Leisure">Leisure</option>
                <option value="Business">Business</option>
                
                </select> 

                <button type="submit">Add</button>
            </form>

            <ul>
                {/* <TodoItem/>
                <TodoItem/>
                <TodoItem/> */}

                {todos.map((todo, index)=>(<TodoItem    key={index}
                nr={index}
                todo={todo.todo}
                category={todo.category}
                deleteTodo={() => handleDeleteTodo(index)} />))}
            </ul>
        </TodoListStyle>
    )
}

       
      
    



