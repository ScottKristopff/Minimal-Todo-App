import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

// Don't need to declare variable just for styles, use object directly
const useStyles = makeStyles({
    addbutton: {
        marginTop: '12px',
        marginLeft: '25px',
        marginRight: '25px',
        marginBottom: '5px',
        padding: '10px 60px',
    },
})

export const AddButton = ({ onClick }) => {
    const classes = useStyles()
    return (
        <Button
            className={classes.addbutton}
            onClick={onClick}
            variant="contained"
            color="secondary"
            disableElevation
        >
            <Typography variant="button">Add</Typography>
        </Button>
    )
}
