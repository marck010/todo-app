import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        width: 570,
        height: 30,
        margin: `${theme.spacing(1)}px auto`,
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
    fab: {
        margin: theme.spacing(1),
    },
}));

export default function Add(props) {
    const classes = useStyles();

    const { setTask, type } = props;

    const [title, setTaskTitle] = useState("");
    const [description, setTaskDescription] = useState("");

    const addTask = (title, description) => {
        if (title && description) {
            setTask(title, description, type);
        }

        setTaskTitle("");
        setTaskDescription("");
    }

    return (
        <Paper className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Task Title"
                inputProps={{ 'aria-label': 'Task Title' }}
                onBlur={(event) => { setTaskTitle(event.target.value) }}
            />
            <InputBase
                className={classes.input}
                placeholder="Task Description"
                inputProps={{ 'aria-label': 'Tast Description' }}
                onBlur={(event) => { setTaskDescription(event.target.value) }}
            />
            <Divider className={classes.divider} />
            <Fab size="small" color="primary" aria-label="add" onClick={() => addTask(title, description)} className={classes.fab}>
                <AddIcon />
            </Fab>
        </Paper>
    );
}
