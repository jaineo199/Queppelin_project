import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Red from '../images/Image -4.png';
import Group8 from '../images/Group 8.png';
import Mobile from '../images/Image -5.png';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      // padding: theme.spacing(2),
      textAlign: 'center',
    
    },
  }),
);

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={0} style={{marginTop:'70px'}}  className={classes.paper} >
        <Grid item xs={12} md={4} mt={2}>
          {/* <Paper className={classes.paper} elevation={0} > */}
            <img src={Red} />
            <Typography style={{color: '#0d6fbf', marginTop: '30px'}} > Top 100<br/> Red Herring Winner</Typography>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <Paper className={classes.paper} elevation={0} > */}
            <img src={Group8} />
               <Typography style={{color: '#0d6fbf', marginTop: '30px'}}>Top 100 <br/> Red Herring Winner</Typography>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <Paper className={classes.paper} elevation={0} > */}
            <img src={Mobile}  />
               <Typography style={{color: '#0d6fbf', marginTop: '30px'}}>Top 100 <br/> Red Herring Winner</Typography>
          {/* </Paper> */}
        </Grid>
      
      </Grid>
    </div>
  );
}
