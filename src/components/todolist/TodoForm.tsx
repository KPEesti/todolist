import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import { Todo } from 'models/todo';
import React from 'react'
import { useController, useFormContext } from 'react-hook-form';

export const TodoForm: React.FC = React.memo(() => {
    const form = useFormContext<Todo>();

    const nameController = useController({
        name: 'title',
        control: form.control,
        rules: {
            required: 'Обязательное поле!'
        }
    })

    return (
        <Form>
            <Form.Item
                label='Название'
                status={nameController.fieldState.invalid ? 'error' : undefined}
                validateStatus = {nameController.fieldState.invalid ? 'error' : undefined}
                help = {nameController.fieldState.error?.message}
                colon={false}>
                <Input {...nameController.field} />
            </Form.Item>
        </Form>
    );
})