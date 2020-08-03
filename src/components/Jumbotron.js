import React from 'react'
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: "100%",
            height: "300px",
        },
    },
}));




export const Jumbotron = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper align="center" component="span" m={1} style={{ backgroundImage: 'url("https://i.pinimg.com/originals/cb/e7/69/cbe769fcb2f807a212b4e989e3f2ec1e.jpg")', backgroundSize: "cover" }}>
            <div className="darken-overlay"> 
                <Typography className="jumboText" style={{ color: "white" }} variant="h1"  gutterBottom>
                    
                       Cassy Pearson
                
                </Typography>
                <Typography style={{ color: "white" }} variant="h4" gutterBottom>
                        Front End Web Developer
                </Typography>
                </div>
            </Paper>
        </div>
    )
}

export default Jumbotron