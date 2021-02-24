import React from 'react'
import { TextField } from '@material-ui/core'
import { AddButton } from './AddButton'
import { TodoList } from './TodoList'
import { v4 as uuidv4 } from 'uuid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    textField: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '30ch',
    },
}))

export const TodoApp = ({ text, setText, todos, setTodos }) => {
    const classes = useStyles()

    //Handlers
    const handleTextChange = (event) => {
        if (event.target.key === 'Enter') {
            event.preventDefault()
        }

        /*         if (event.target.value === '') {
            alert('Please add Todos')
            return false
        } */

        setText(event.target.value)
    }

    const handleAddTodo = () => {
        const newTodo = {
            id: uuidv4(),
            text,
            complete: false,
        }
        setTodos([...todos, newTodo])
        setText('')
    }

    //KeyPress Handler
    const handleEnterKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleAddTodo()
        }
    }

    //CheckBoxHandlers
    const completeCheckBoxHandler = (id) => {
        setTodos(
            todos.map((item) => {
                if (item.id !== id) {
                    return item
                }
                return {
                    ...item,
                    complete: !item.complete,
                }
            })
        )
    }

    return (
        <div>
            <TextField
                label="Add Todo"
                value={text}
                onChange={handleTextChange}
                onKeyDown={handleEnterKeyDown}
                color="secondary"
                className={classes.textField}
            />
            <AddButton onClick={handleAddTodo} />
            <TodoList
                text={text}
                todos={todos}
                setText={setText}
                setTodos={setTodos}
                onComplete={completeCheckBoxHandler}
            />
        </div>
    )
}
