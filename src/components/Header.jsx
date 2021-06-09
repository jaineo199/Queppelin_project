import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import quepp from '../images/Group 1.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  app:{
    background: '#109be0',
    padding: '10px'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar  style={{marginTop: '20px'}}>
          <img src={quepp} style={{ width:'170px', marginLeft:'40px'}}/>
            <Typography  className={classes.root}  ></Typography>
          <Typography style={{margin: '15px'}}  >About Us</Typography>
          <Typography style={{margin: '15px'}}  >Services</Typography>
          <Typography  style={{margin: '15px'}}  >Portfolo</Typography>
          <Typography  style={{margin: '15px'}}  >Configurator</Typography>
          <Typography  style={{margin: '15px'}} >Blog</Typography>
          <Typography  style={{margin: '15px'}}  >Contact</Typography>
          
         
         
          
        </Toolbar>
        
      </AppBar>
    </div>
  );
}
