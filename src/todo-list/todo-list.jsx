import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import TaskItem from '../task-item//task-item';
import AddItem from '../task-item/add-item';
import * as todoListActions from './todo-list-actions';

import {
    SET_TASK_TODO,
    SET_TASK_DOING,
    SET_TASK_DONE,
    REMOVE_TASK_TODO,
    REMOVE_TASK_DOING,
    REMOVE_TASK_DONE
} from './todo-list-actions';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        maxWidth: 450,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2)
    }
}));

export function TodoList(props) {
    const classes = useStyles();
    const { todoTasks, doingTasks, doneTasks, setTask, removeTask } = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Typography>Tasks Todo</Typography>
                    <br></br>
                    < AddItem setTask={setTask} type={SET_TASK_TODO} />
                    <br></br>
                    <br></br>
                    {
                        todoTasks.map((task, index) => {
                            return <React.Fragment>
                                <TaskItem task={task} index={index} />

                                <IconButton edge="end" title="Remove" aria-label="delete" onClick={() => removeTask(index, REMOVE_TASK_TODO)}>
                                    <DeleteIcon />
                                </IconButton>

                                <IconButton edge="end" title="To Doing" aria-label="to doing" onClick={() => { setTask(task.title, task.description, SET_TASK_DOING); removeTask(index, REMOVE_TASK_TODO) }}>
                                    <ArrowForwardIcon />
                                </IconButton>

                            </React.Fragment>
                        })
                    }
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography>Tasks Doing</Typography>
                    <br></br>

                    < AddItem setTask={setTask} type={SET_TASK_DOING} />
                    <br></br>
                    <br></br>
                    {
                        doingTasks.map((task, index) => {
                            return <React.Fragment>

                                <TaskItem task={task} />

                                <IconButton edge="end" title="To Do" aria-label="to do" onClick={() => { setTask(task.title, task.description, SET_TASK_TODO); removeTask(index, REMOVE_TASK_DOING) }}>
                                    <ArrowBackIcon />
                                </IconButton>

                                <IconButton edge="end" title="Remove" aria-label="delete" onClick={() => removeTask(index, REMOVE_TASK_DOING)}>
                                    <DeleteIcon />
                                </IconButton>

                                <IconButton edge="end" title="To Done" aria-label="To done" onClick={() => { setTask(task.title, task.description, SET_TASK_DONE); removeTask(index, REMOVE_TASK_DOING) }}>
                                    <ArrowForwardIcon />
                                </IconButton>

                            </React.Fragment>
                        })
                    }
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography>Tasks Done</Typography>
                    <br></br>

                    < AddItem setTask={setTask} type={SET_TASK_DONE} />
                    <br></br>
                    <br></br>
                    {
                        doneTasks.map((task, index) => {
                            return <React.Fragment>
                                <TaskItem task={task} />

                                <IconButton edge="end" title="Remove" aria-label="delete" onClick={() => { setTask(task.title, task.description, SET_TASK_DOING); removeTask(index, REMOVE_TASK_DONE) }}>
                                    <ArrowBackIcon />
                                </IconButton>

                                <IconButton edge="end" title="To Doing" aria-label="delete" onClick={() => removeTask(index, REMOVE_TASK_DONE)}>
                                    <DeleteIcon />
                                </IconButton>

                            </React.Fragment>
                        })
                    }
                </Grid>
            </Grid>
        </div>
    );
}

const mapStateToProps = ({ taskList }) => {
    return {
        todoTasks: taskList.todoTasks,
        doingTasks: taskList.doingTasks,
        doneTasks: taskList.doneTasks
    };
};

const mapDispatchToProps = {
    setTask: todoListActions.setTask,
    removeTask: todoListActions.removeTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
