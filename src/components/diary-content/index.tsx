import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Entry from '../entry';

type Props = {
  text: string;
};
const useStyles = makeStyles((theme) => {
  return {
    root: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      position: 'absolute',
      top: '120px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '1000px',
      height:'75vh',
      margin: '0px 24px 8px 24px',
      padding: '10px',
      background: '#FDFBF4',
      borderRadius: '20px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      // filter: 'drop-shadow(-10px 10px 10px rgba(0, 0, 0, 0.25))',
    }
  };
});

const DiaryContent: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Entry left text="seba is da cool"/>
        <Entry text="kaki loves seba mucho mucho"/>
      </Box>
    </div>
  );
};

export default DiaryContent;