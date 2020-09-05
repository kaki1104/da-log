import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Entry from '../entry';

type Props = {
  text: string;
};
const useStyles = makeStyles((theme) => {
  return {
    root: {
      // width: '100%',
      padding: '24px 36px 24px ',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      // width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
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