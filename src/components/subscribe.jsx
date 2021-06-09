

import React from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(45),
    // flex: 1,
    color: 'blue',
    backgroundColor: 'white',
    width:'37%'
     
     
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));


const Subscribe = () => {
    const classes = useStyles();
  return (
    <div style={{backgroundColor:'#0786a6', padding:'40px'}}>
       <Typography variant="h5" align="center" gutterBottom style={{color:'white'}}>
        <b>Subscribe to Our NewsLetters</b>
      </Typography>
<InputBase
        className={classes.input}
        placeholder="Your e-mail address here"
       
     
      />
      <Button style={{backgroundColor:'#cf6017', marginLeft:'25px', color:'white'}}>subscribe</Button>

     

      
    </div>
  )
}

export default Subscribe

