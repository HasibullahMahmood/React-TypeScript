import Todo from '../models/Todo';
import TodoItem from './TodoItem';
import styles from './todos.module.css';

const Todos: React.FC<{ items: Todo[]; deleteTodoHandler: (id: string) => void }> = (props) => {
	const deleteTodoHandler = (id: string) => {
		props.deleteTodoHandler(id);
	};
	return (
		<ul className={styles.todos}>
			{props.items.map((item) => {
				return <TodoItem key={item.id} id={item.id} text={item.text} onDeleteTodo={deleteTodoHandler} />;
			})}
		</ul>
	);
};

export default Todos;
