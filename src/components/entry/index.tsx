import React from 'react';
import { makeStyles, Box, AppBar, Toolbar } from '@material-ui/core';

type Props = {
  text: string;
};
const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '300px',
      background: `#FFFFFF;`,
      borderRadius: '16px 0 0 0',
      padding: '4px 0px',
    },
    text: {
      color: 'black',
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '40px',
      letterSpacing: 0.25,
    },
  };
});

const Entry: React.FC<Props> = ({ text }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className ={classes.text}>
        hi
      </Box>
    </div>
  );
};

export default Entry;