import styles from './todoItem.module.css';

const TodoItem: React.FC<{ text: string; id: string; onDeleteTodo: (id: string) => void }> = (props) => {
	return (
		<li
			className={styles.item}
			onClick={() => {
				props.onDeleteTodo(props.id);
			}}
		>
			{props.text}
		</li>
	);
};

export default TodoItem;
