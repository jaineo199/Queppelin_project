import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import women from '../images/women.png';
import Robot from '../images/Mask Group 10.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor:'#13a7f0'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} style={{ backgroundColor:'#51a4ed'}} >
        <Grid item md={4}>
                 {/* <Paper className={classes.paper}  elevation={0} > */}
                      <Typography variant="h3" style={{color:'white', padding:'84px'}} >
                            AR/VR <br/> AND <br/> AI SERVICES
                         </Typography>
                         {/* </Paper> */}
        
        </Grid>
       
            <Grid item md={4}>
                 {/* <Paper className={classes.paper}  elevation={0} > */}
              <img src={women} style={{ width:'90%'}}/>
                    {/* </Paper> */}
        </Grid>
         <Grid item md={4}>
                 {/* <Paper className={classes.paper}  elevation={0} > */}
              <img src={Robot} style={{ width:'100%', height:'383px', }}/>
                    {/* </Paper> */}
        </Grid>
        
     
             
         
     
       
      </Grid>
    </div>
  );
}
