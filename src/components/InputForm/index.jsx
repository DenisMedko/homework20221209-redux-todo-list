import React from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import * as todoActionCreators from  '../../store/slices/todos';
import { Field, Form, Formik } from 'formik';
import cx from 'classnames';

import styles from './styles.module.scss'

const InputForm = () => {
    const initialState = {
        title : '',
    }; 

    const dispatch = useDispatch();

    const { add } = bindActionCreators(
        { ...todoActionCreators },
        dispatch
    );

    const handleAddBtn = (values, formikBag) => {
        add(values.title);
        formikBag.resetForm();
    };

    const TODO_ITEM_SCHEMA = yup.object({
        title: yup
          .string()
          .required('You must enter the title')
      });
                    
    return (
        <Formik 
            initialValues={initialState} 
            onSubmit={handleAddBtn}
            validationSchema={TODO_ITEM_SCHEMA}>
                {({ errors }) => {
                    const inputClassName = cx(styles.todoInput, 
                         {[styles.todoInvalidInput]: errors.title}
                    );
                    return (
                        <Form className={styles.form}>
                            <Field 
                                type="text" 
                                name="title" 
                                className={inputClassName} 
                                placeholder={errors.title ? errors.title : "To do title"}/>
                            <button type="submit" className={styles.todoAddBtn}>Add</button> 
                        </Form>   
                    );
                }}
            
        </Formik>
    );
}

export default InputForm;
