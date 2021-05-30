import React from 'react';
import MainHeader from '../../components/main-header';
import DiaryContent from '../../components/diary-content';
import ThemesContent from '../../components/themes-content';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    root: {
      background: `#E1DAC9`,
      height: '100vh',
    },
  };
});

const MainPage: React.FC = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(1);
  return (
    <div className={classes.root}>
      <MainHeader tabValue={tabValue} setTabValue={setTabValue}/>
      {tabValue === 1 ? <DiaryContent /> : <ThemesContent />}
    </div>
  );
};

export default MainPage;