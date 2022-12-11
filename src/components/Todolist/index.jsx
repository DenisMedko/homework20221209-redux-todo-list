import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import styles from './TodoList.module.scss';

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todosArr);
    const itemsList = todos.map( todo => <TodoItem key={todo.id} todo={todo}/>);
    return (    
        <div className={styles.itemsList}>
            {itemsList}  
        </div>
    );
}

export default TodoList;
