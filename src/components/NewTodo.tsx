import React, { useRef } from 'react';
import styles from './newTodo.module.css';

const NewTodo: React.FC<{ onAddNewTodo: (text: string) => void }> = (props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const todoText = inputRef.current!.value;
		if (todoText.trim().length === 0) {
			return;
		}
		props.onAddNewTodo(todoText);
	};
	return (
		<form onSubmit={todoSubmitHandler} className={styles.form}>
			<label htmlFor="text">Todo Text</label>
			<input type="text" name="text" id="text" ref={inputRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
