import { useState, useEffect } from "react";
import styled from "styled-components";
import { handleFormSubmit } from "./memoryStackUtils";
import { useExtensionHandler } from './extensionHandler';

const MemoryStackStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 16px;
    margin-bottom: 20px;
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  input {
    width: 90%;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    outline: none;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
  }

  .block {
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 4px;
  }
    button{
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0px 5px 5px 0px;
    background: #FFF;
    color: #141414;
    font-weight: 600;
    cursor: pointer;
}
   
`;

const TextBlock = styled.div`
    background-color: #fff
    max-width: 50px; 
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 4px;

    .delete{
      color: #ff0000;
      border-radius: 500px;
    }
`;


export default function MemoryStack() {
  const [blocks, setBlocks] = useState(() => {
    const storedBlocks = localStorage.getItem("blocks");
    return storedBlocks ? JSON.parse(storedBlocks) : [];
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.elements.blockInput.value;
    const updatedBlocks = handleFormSubmit(blocks, input);
    setBlocks(updatedBlocks);
    event.target.reset();
  };

  const handleDelete = (index) => {
    const newBlocks = [...blocks];
    newBlocks.splice(index, 1);
    setBlocks(newBlocks);
  }


  useEffect(() => {
    localStorage.setItem("blocks", JSON.stringify(blocks));
  }, [blocks]);

  useExtensionHandler(blocks, setBlocks);


  return (
    <MemoryStackStyle>
      <h1>Memory Stack</h1>
      <h2>Whatever you need to know</h2>
      <form onSubmit={handleSubmit}>
        <input name="blockInput" placeholder="What's on your mind?" />
        <button type="submit">Add</button>
      </form>
      <div className="grid">
        {blocks.map((block, index) => (
          <TextBlock key={block.id}>
            <button onClick={() => handleDelete(index)}>x</button>
            {block.thumbnail && <img src={block.thumbnail} alt="Thumbnail" />}
            <p>{!block.thumbnail && block.content}</p>
          </TextBlock>
        ))}
      </div>
    </MemoryStackStyle>
  );
}
