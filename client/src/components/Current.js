import React from 'react';
// Material UI
import TripCard from '../components/TripCard.js';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    
    root: { flexGrow: 1 },
    paper: {
        padding: theme.spacing(2),
        marginTop:'50px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width:'100%'
        
    }
}));

function Current(props) {
    const classes = useStyles();
    return (
        
        <div className={classes.root} >
            
            <Paper className={classes.paper} >
                <Grid item xs={12} >
                    <Typography variant="h4" color="textSecondary"gutterBottom="true">My Current Adventures</Typography>
                </Grid>
                <Grid container spacing={4} >
                    {props.data.map((trip) => (
                        <Grid item xs={12} md={6} lg={4} >
                            <TripCard data={trip} />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </div>
    );
}

export default Current;