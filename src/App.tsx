import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addNewTodoHandler = (text: string) => {
		setTodos((prevTodos) => {
			return prevTodos.concat(new Todo(text));
		});
	};

	const deleteTodoHandler = (id: string) => {
		const updatedTodos = todos.filter((item) => item.id !== id);
		setTodos(updatedTodos);
	};
	return (
		<div className="App">
			<NewTodo onAddNewTodo={addNewTodoHandler} />
			<Todos items={todos} deleteTodoHandler={deleteTodoHandler} />
		</div>
	);
}

export default App;
