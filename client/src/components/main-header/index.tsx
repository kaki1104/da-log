import React from 'react';
import { makeStyles, Box, IconButton, Tabs, Tab} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import JazzuIcon from "../../assets/icons/jazzu.png";

type Props = {
  tabValue: number;
  setTabValue: (value: number) => void;
};
const useStyles = makeStyles(() => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      height: '12vh',
      background: '#D8C3A5',
      justifyContent: 'space-around',
      alignItems: 'flex-end'
    },
    tabs: {
      width: '50vw',
      height: '90%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end'
    },
    tab: {
      borderRadius: '24px',
    },
    selectedTab: {
      height: '10vh',
      borderRadius: '24px 24px 0px 0px',
      background: '#FDFBF4',
      filter: 'drop-shadow(-10px 10px 10px rgba(0, 0, 0, 0.25))',
    },
    iconField: {
      display: 'flex',
      flexDirection: 'row',
      height: '90%',
      alignItems: 'center',
    },
  };
});

const MainHeader: React.FC<Props> = ({ tabValue, setTabValue }: Props) => {
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <Box className={classes.root}>
      <Tabs className={classes.tabs} value={tabValue} onChange={handleChange} TabIndicatorProps={{style: {display: "none"}}} centered >
        <Tab className={tabValue === 0 ? classes.selectedTab: classes.tab} label="rappu" disableRipple />
        <Tab className={tabValue === 1 ? classes.selectedTab: classes.tab}
            icon={<img alt="jazzu" height="40px" width="70px" src={JazzuIcon} />} disableRipple />
      </Tabs>
      <Box className={classes.iconField}>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MainHeader;
