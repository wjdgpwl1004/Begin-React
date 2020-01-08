import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
    flex:1;
    padding: 20px 32px;
    padding-bottom:48px;
    overflow-y:auto;
`;

function TodoList() {
    const state = useTodoState();
    return (
        <TodoListBlock>
            <TodoItem text ="프로젝트 생성하기" done={true} />
            <TodoItem text ="프로젝트 생성하기1" done={true} />
            <TodoItem text ="프로젝트 생성하기2" done={true} />
            <TodoItem text ="프로젝트 생성하기3" done={false} />
            <TodoItem text ="프로젝트 생성하기4" done={true} />
        </TodoListBlock>
    );
}

export default TodoList; 