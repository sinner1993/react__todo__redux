import logo from './logo.svg';
import './App.css';
import { TodoForm } from './components/todoForm';
import { Todo } from './components/todo';
function App() {
  return (
    <div className="App">
       <TodoForm/>
       <Todo/>
    </div>
  );
}

export default App;
