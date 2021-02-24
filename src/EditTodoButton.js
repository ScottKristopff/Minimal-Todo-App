import React, { useState } from 'react'
import { EditTodoDialog } from './EditTodoDialog'
import EditIcon from '@material-ui/icons/Edit'

export const EditTodoButton = ({ todos, text, setTodos, id }) => {
    //State
    const [open, setOpen] = useState(false)
    const [editedTodoId, setEditedTodosId] = useState(undefined)

    //Handlers
    const handleClickOpen = (id) => {
        setEditedTodosId(id)
        setOpen(true)
    }

    const handleClickClose = () => {
        setEditedTodosId(undefined)
        setOpen(false)
    }

    const editItemHandler = (text) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === editedTodoId) {
                return { ...todo, text }
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    return (
        <div>
            <EditIcon color="secondary" onClick={() => handleClickOpen(id)} />
            <EditTodoDialog
                handleClickClose={handleClickClose}
                editItemHandler={editItemHandler}
                open={open}
                onClose={handleClickClose}
                onEdit={editItemHandler}
                text={text}
            />
        </div>
    )
}
