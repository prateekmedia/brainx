import React, { useState, useEffect } from "react";
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
  
  button {
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
  background-color: #fff;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 4px;

  text-align: left;

  .delete {
    color: #ff0000;
    border-radius: 500px;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


const ContentRow = styled.div`
  display: flex;
  align-items: center;
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`;

const Chip = styled.div`
  background-color: #337ab7;
  padding: 5px 10px;
  border-radius: 4px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
`;

export default function MemoryStack() {

 const [searchTerm, setSearchTerm] = useState("");
 const [searchResults, setSearchResults] = useState([]);

 const handleSearch = (event) => {
  event.preventDefault();
  const term = event.target.elements.searchInput.value.toLowerCase();
  setSearchTerm(term);
};


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
      setSearchTerm(""); 
    };
    
  

  const handleDelete = (index) => {
    const newBlocks = [...blocks];
    newBlocks.splice(index, 1);
    setBlocks(newBlocks);
  };

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
      <form onSubmit={handleSearch}>
        <input name="searchInput" placeholder="Search tags..." />
        <button type="submit">Search</button>
      </form>
      <div className="grid">
      {(searchTerm.trim() === "" ? blocks : searchResults).map((block, index) =>(
          <TextBlock key={block.id}>
            <ContentRow>
              <button onClick={() => handleDelete(index)}>x</button>
              {block.thumbnail && <img src={block.thumbnail} alt="Thumbnail" />}
              <p>{!block.thumbnail && block.content}</p>
            </ContentRow>
            <ChipRow>
              {block.tags.map((tag, index) => (
                <Chip key={index}>{tag}</Chip>
              ))}
            </ChipRow>
          </TextBlock>
        ))}
      </div>
    </MemoryStackStyle>
  );
  
}
