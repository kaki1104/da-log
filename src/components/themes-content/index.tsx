import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
    },
    text: {
      color: 'black',
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '40px',
      background: 'transparent',
      margin: '30px',
    },
  };
});

const ThemesContent: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className ={classes.text}>
        rappu content goes here!
      </Box>
    </div>
  );
};

export default ThemesContent;