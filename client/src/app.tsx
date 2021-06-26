import React from 'react';
import { makeStyles } from '@material-ui/core';
import MainPage from './pages/main';

const useStyles = makeStyles(() => {
  return {
    root: {
      background: `#E1DAC9`,
      height: '100vh',
      margin: '0px !important',
      padding: '0px',
    },
  };
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MainPage />
    </div>
  );
};

export default App;
