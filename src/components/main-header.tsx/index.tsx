import React from 'react';
import { makeStyles, Box, IconButton, Tabs, Tab } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { monthNames } from '../../constants';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: '100px',
      background: '#D8C3A5',
      borderRadius: '36px 0 0 0',
      padding: '5px 20px 0px 40px',
    },
    settingsButton: {
      margin: '20px'
    },
    tab: {
      margin: '0px 20px 0px 40px',
      width: '600px',
    },
    dateField: {
      width: '160px',
      padding: '10px',
      margin: '10px',
      background: 'pink',
    },
    notificationsButton: {
      position: 'absolute',
      right: '60px',
    },
  };
});

const MainHeader: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const today = new Date();
  const date = monthNames[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.root}>
      <IconButton className={classes.settingsButton}>
        <SettingsIcon />
      </IconButton>
      <Tabs className={classes.tab} value={value} onChange={handleChange} centered>
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
