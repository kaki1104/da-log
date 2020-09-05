import React from 'react';
import { makeStyles, Box, IconButton, Tabs, Tab } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { monthNames } from '../../constants';
import JazzuIcon from '../../icons/jazzu-icon';

type Props = {
  tabValue: number;
  setTabValue: (value: number) => void;
};
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: '100px',
      background: '#D8C3A5',
      padding: '20px 20px 0px 40px',
    },
    settingsButton: {
      margin: '20px'
    },
    tabs: {
      margin: '0px 20px 0px 40px',
      width: '500px',
    },
    tab: {
      borderRadius: '24px',
    },
    selectedTab: {
      borderRadius: '24px 24px 0px 0px',
      background: '#FDFBF4',
      filter: 'drop-shadow(-10px 10px 10px rgba(0, 0, 0, 0.25))',
    },
    dateField: {
      width: '160px',
      padding: '10px',
      margin: '10px',
      background: '#f0d8ee',
    },
    notificationsButton: {
      position: 'absolute',
      right: '60px',
    },
  };
});

const MainHeader: React.FC<Props> = ({ tabValue, setTabValue }: Props) => {
  const classes = useStyles();
  const today = new Date();
  const date = monthNames[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <Box className={classes.root}>
      <IconButton className={classes.settingsButton}>
        <SettingsIcon />
      </IconButton>
      <Tabs className={classes.tabs} value={tabValue} onChange={handleChange} TabIndicatorProps={{style: {display: "none"}}} centered>
        <Tab className={classes.tab} label="rappu" />
        <Tab className={tabValue === 1 ? classes.selectedTab : classes.tab} icon={<JazzuIcon />} />
      </Tabs>
      <Box className={classes.dateField}>
        {date}
      </Box>
      <IconButton className={classes.notificationsButton}>
        <NotificationsIcon />
      </IconButton>
    </Box>
  );
};

export default MainHeader;
