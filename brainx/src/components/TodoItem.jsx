import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import {FaTrash} from "react-icons/fa";

const shrink = keyframes`
0%{
    transform: scale(1);
} 50%{
    transform: scale(0.9);
} 100%{
    transform: scale(1);
}
`
const primaryColor = "#3ad4b0";
const  TodoItemStyle = styled.li`
list-style-type = none;
color: ${(props)=> (props.checked ? "gray": "#fff")};
border: 1px solid ${primaryColor};
border-radius: 5px;
margin: 1rem;
display: flex;
justify-content: space-between;
transition: all 0.3s ease-in-out;
button{
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    color: ${primaryColor};
    transition: alll 0.3s ease-in-out;
    padding: 0.35rem 1rem;
    
}
&:hover{
    background-color: #d44a4a;
    h4, button{
        color: gray;
    }
}
&.checked{
    animation: ${shrink} 0.3s ease-in-out;
}
span{
    display : flex;
    align-items : center;
    
    h4{
        margin-right: 1rem;
        margin-left: 0.5rem;
        color: ${primaryColor};
    }
    h3{
         text-decoration: ${(props)=> props.checked && "line-through" } ; 
         margin: 1rem;
    }
    h2{
        color: ${primaryColor};
    }
}
`;


export default function TodoItem({nr, todo, category, deleteTodo}){
    const [isChecked, setIsChecked] = useState({
        completed: false,
        button: false,
    });


const handleCheckItem = () =>{
    setIsChecked({completed: !isChecked.completed,
         button: !isChecked.button,
        });
};

  return(
    <TodoItemStyle {...{checked: isChecked.completed}} 
    onClick={handleCheckItem}
    className={isChecked.completed && "checked"}>
        
        <span>
            <h4>{nr + 1}</h4>
            <h3>{todo}</h3>
            <h2>{category}</h2>
           
        </span>
        {isChecked.button && (
        <button onClick={deleteTodo}><FaTrash/></button>
        )}
    </TodoItemStyle>

  )   
}
