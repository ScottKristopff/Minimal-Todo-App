import React from 'react'
import { Grid } from '@material-ui/core'
import { EditTodoButton } from './EditTodoButton'
import { DeleteTodoButton } from './DeleteTodoButton'
import { makeStyles } from '@material-ui/styles'
import {
    Checkbox,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    ListItemIcon,
} from '@material-ui/core'

const useStyles = makeStyles({
    completed: {
        textDecoration: 'line-through',
        opacity: '0.5',
    },
})

export const TodoList = ({ todos, setTodos, onComplete }) => {
    const classes = useStyles()
    return (
        <Grid container>
            {todos.map(({ id, text, complete }) => (
                <Grid item xs={12} key={id}>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <Checkbox
                                    checked={complete}
                                    onChange={() => onComplete(id)}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={text}
                                className={`${
                                    complete ? classes.completed : ' '
                                }`}
                            />
                            <ListItemSecondaryAction>
                                <IconButton>
                                    <EditTodoButton
                                        todos={todos}
                                        setTodos={setTodos}
                                        text={text}
                                        id={id}
                                    />
                                </IconButton>
                                <IconButton>
                                    <DeleteTodoButton
                                        todos={todos}
                                        setTodos={setTodos}
                                        text={text}
                                        id={id}
                                    />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Grid>
            ))}
        </Grid>
    )
}
