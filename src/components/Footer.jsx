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
    background: 'white',
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
                  <Typography className={classes.root}  ></Typography>
                  
          <Typography style={{margin: '15px', color:'#4989d1'}}  >About Us</Typography>
          <Typography style={{margin: '15px', color:'#4989d1'}}  >Services</Typography>
          <Typography  style={{margin: '15px', color:'#4989d1'}}  >Portfolo</Typography>
          <Typography  style={{margin: '15px', color:'#4989d1'}}  >Configurator</Typography>
          <Typography  style={{margin: '15px', color:'#4989d1'}} >Blog</Typography>
                  <Typography style={{ margin: '15px', color: '#4989d1' }}  >Contact</Typography>
              
                   <Typography  style={{margin: '15px', color:'#4989d1'}}  >enquiry@queppelintec.com</Typography>
          
         
         
          
              </Toolbar>
              <Typography style={{ marginLeft: '120px', marginTop: '40px',color: '#545c66', letterSpacing:'1px' }}  >
                  Copyright &copy; Queppelin Technology Solution Private Limited| All products names, logos and brands are property of their respective owner
               </Typography>

        
      </AppBar>
    </div>
  );
}
