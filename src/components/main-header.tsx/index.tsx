import React from 'react';
import { makeStyles, Box, IconButton, Tabs, Tab } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { monthNames } from '../../constants';

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
      padding: '5px 20px 0px 40px',
    },
    settingsButton: {
      margin: '20px'
    },
    tab: {
      margin: '0px 20px 0px 40px',
      width: '500px',
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
      <Tabs className={classes.tab} value={tabValue} onChange={handleChange} centered>
        <Tab label="rappu" />
        <Tab label="jazzu" />
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
