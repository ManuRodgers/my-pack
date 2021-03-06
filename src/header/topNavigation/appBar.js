import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableTemporaryDrawer from "./swipeDrawer";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background:theme.palette.secondary.main,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="sticky">
                <Toolbar>
                    <SwipeableTemporaryDrawer/>
                    <Typography variant="h6" className={classes.title}>
                        Ting 的小基地
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

