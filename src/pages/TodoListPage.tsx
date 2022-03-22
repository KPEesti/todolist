import Space from 'antd/lib/space'
import { AddTodoButton } from 'components/todolist/AddTodoButton'
import { TodoList } from 'components/todolist/TodoList'
import React from 'react'
 
export const TodoListPage: React.FC = React.memo(()=>{
 return(
    <Space
    direction='vertical'
    style={{ padding: 20, width: '100%' }}>
    <AddTodoButton />
    <TodoList />
  </Space>
 );
})