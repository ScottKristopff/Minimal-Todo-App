import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@material-ui/core'
/* import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline' */
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
export const DeleteTodoButton = ({ todos, setTodos, id, text }) => {
    const [open, setOpen] = useState(false)

    const handleDeleteButtonClose = () => {
        setOpen(false)
    }

    const handleDeleteButtonOpen = () => {
        setOpen(true)
    }

    const handleDeleteTodoItem = (id) => {
        const updatedTodos = todos.filter((todo) => {
            return todo.id !== id
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <DeleteRoundedIcon onClick={handleDeleteButtonOpen} color="black" />
            <Dialog open={open} onClose={handleDeleteButtonClose} keepMounted>
                <DialogTitle>Delete Todo</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure you want to delete the todo: "{text}"
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => handleDeleteTodoItem(id)}
                        color="secondary"
                    >
                        Confirm
                    </Button>
                    <Button color="secondary" onClick={handleDeleteButtonClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
