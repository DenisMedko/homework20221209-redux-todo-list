import './App.css';
import InputForm from './components/InputForm';
import TodoList from './components/Todolist';

function App() {
  return (
    <div className="todo-container">
      <InputForm />
      <TodoList />
    </div>   
  );
}

export default App;
