import React from 'react';
import MainHeader from '../../components/main-header';
import DiaryContent from '../../components/diary-content';
import ThemesContent from '../../components/themes-content';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    root: {
      background: `linear-gradient(to bottom, #D8C3A5 15%, #E1DAC9 15%)`,
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