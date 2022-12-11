import { bindActionCreators } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as todoActionCreators from  '../../store/slices/todos';
import styles from './TodoItem.module.scss';

const TodoItem = (props) => {
    const {todo : {id, title, isDone}} = props;
    const dispatch = useDispatch();

    const { setIsDone, remove } = bindActionCreators(
        { ...todoActionCreators },
        dispatch
    );

    return (
        <div className={styles.todoItem}>
            <div className={styles.todoItemTitle}>{title}</div>
            <input type="checkbox" 
                name={id} 
                checked={isDone} 
                onChange={ () => setIsDone(+id) }
                className={styles.checkBox}
            />
            <button type="button" name={id} onClick={() => remove(+id)} className={styles.deleteBtn}>X</button>
        </div>);   
}

export default TodoItem;
