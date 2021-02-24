import React, { useState } from 'react'
import {
    Dialog,
    TextField,
    DialogTitle,
    Button,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    textField: {
        width: '45ch',
    },
}))

export const EditTodoDialog = ({ onClose, open, onEdit, text }) => {
    const classes = useStyles()
    //State
    const [updatedText, setUpdatedText] = useState('')

    //Handlers
    const handleClose = () => {
        onClose()
        setUpdatedText('')
    }

    const editChangeHandler = (e) => {
        setUpdatedText(e.target.value)
    }

    const handleEditButtonClick = () => {
        onEdit(updatedText)
        onClose()
        setUpdatedText('')
    }

    return (
        <div>
            <Dialog onClose={handleClose} open={open} keepMounted>
                <DialogTitle>Edit Todo "{text}"</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TextField
                            onChange={editChangeHandler}
                            value={updatedText}
                            label="Input change here"
                            color="secondary"
                            className={classes.textField}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditButtonClick} color="secondary">
                        Confirm
                    </Button>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
