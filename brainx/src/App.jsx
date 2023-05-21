import './App.css';
import TodoList from './components/TodoList';
import MemoryStack from './components/MemoryStack';

function App() {
  return (
    <div className="App">
      <div className="left">
        <TodoList />
      </div>
      <div className="right">
        <MemoryStack />
      </div>
    </div>
  );
}

export default App;
