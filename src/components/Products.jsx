import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Furniture from '../images/Image -8.png';
import mobile from '../images/Mask Group 3.png';
import meeting from '../images/Mask Group 5.png';
import virtual from '../images/Mask Group 6.png';
import flight from '../images/Image -7.png';
import Background from '../images/Rectangle 27.png';
import MaximizeIcon from '@material-ui/icons/Maximize';
import IconButton from '@material-ui/core/IconButton';
import { spacing } from '@material-ui/system';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      // padding: theme.spacing(2),
      textAlign: 'center',
    //   color: theme.palette.text.secondary,
      // justifyContent: 'center',
    },
  }),
);


export default function SimpleContainer() {
     const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{height: '95vh'}}>
      <Container maxWidth="xl" disableGutters="true" style={{ backgroundColor:'#51a4ed', height: '72vh'}} >
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        <br/>
        <Typography align="center" style={{ color: '#e6eff7', fontSize:'20px' }}>
          <b> Our Products</b>
         
        </Typography>

         {/* <IconButton edge="center" className={classes.menuButton} color="inherit" aria-label="menu">
               < MaximizeIcon/>
          </IconButton> */}
        
    
             
        <Grid container spacing={0} style={{ marginTop:'30px'}}  className={classes.paper}>
        <Grid item xs={12} md={4} >
                      {/* <Paper className={classes.paper}>xs=12</Paper> */}
             
            <img className={classes.paper} src={Furniture} style={{ width: '350px', height: '234px' }} />
            <Typography style={{padding: '20px', color: 'white'}} > AR Furniture Retail</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
            <img className={classes.paper} src={mobile} style={{ width: '350px', height: '234px' }} />
           <Typography style={{padding: '20px', color: 'white'}}>  AR Shoe Try-On     </Typography> 
        </Grid>
        <Grid item xs={12} md={4}>
            <img className={classes.paper} src={meeting} style={{ width: '350px', height: '234px' }}  />
             <Typography style={{padding: '20px', color: 'white'}}> VR Meeting Platform</Typography>     
                  </Grid>
          <Grid item xs={12} md={6} >
            <img className={classes.paper} src={virtual}style={{ width: '350px', height: '234px' }}  />
             <Typography style={{padding: '20px'}}> Virtual Events   </Typography> 
  
                  </Grid>
          <Grid item xs={12} md={6} >
            <img className={classes.paper} src={flight}style={{ width: '350px', height: '234px' }}  />
             <Typography style={{padding: '20px'}}>  Flight Simulator  </Typography> 
      
        </Grid>
        </Grid>
      
              
              
      </Container>
      </div>
    </React.Fragment>
  );
}
